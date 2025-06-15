
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import AffiliateWidget from "../../../components/AffiliateWidget";
import MobileAffiliates from "@/components/MobileAffiliates";

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"]{ slug }`);
  return slugs.map((p : any) => ({ slug: p.slug.current }));
}

// Composants personnalisés pour PortableText
const components = {
  block: {
    h1: ({children}: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-semibold mt-5 mb-2">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
    normal: ({children}: any) => <p className="mb-4 leading-7">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="mb-1">{children}</li>,
    number: ({children}: any) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
    underline: ({children}: any) => <u className="underline">{children}</u>,
    link: ({value, children}: any) => (
      <a 
        href={value?.href} 
        className="text-blue-600 hover:text-blue-800 underline"
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
};

export default async function Post({ params} : any) {
  // Récupérer l'article
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ 
      title, 
      body, 
      coverImage {
        asset->{
          _id,
          url
        },
        alt
      }
    }`,
    { slug: params.slug }
  );

  // Récupérer les widgets d'affiliation actifs
  const affiliateWidgets = await client.fetch(
    `*[_type == "affiliateWidget" && isActive == true] | order(priority desc) {
      _id,
      title,
      company,
      description,
      offer,
      price,
      affiliateLink,
      image {
        asset->{
          _id,
          url
        }
      },
      buttonText,
      colorScheme,
      widgetType,
      targetPages
    }`
  );

  // Filtrer les widgets par position
  const leftSidebarWidgets = affiliateWidgets.filter(( w: any) => w.widgetType === 'leftSidebar');
  const rightSidebarWidgets = affiliateWidgets.filter((w : any) => w.widgetType === 'rightSidebar');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Widgets dynamiques */}
          <aside className="hidden lg:block lg:col-span-2 xl:col-span-2">
            <div className="sticky top-8 space-y-6">
              {leftSidebarWidgets.map((widget : any) => (
                <AffiliateWidget 
                  key={widget._id} 
                  widget={widget} 
                  size="compact" 
                />
              ))}
            </div>
          </aside>

          {/* Contenu principal */}
          <main className="col-span-1 lg:col-span-8 xl:col-span-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.coverImage && (
                <div className="w-full h-64 md:h-80 lg:h-96 relative">
                  <Image
                    src={urlFor(post.coverImage).width(1200).height(600).url()}
                    alt={post.coverImage.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              
              <div className="p-6 md:p-8 lg:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  {post.title}
                </h1>
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <PortableText 
                    value={post.body} 
                    components={components}
                  />
                </div>
              </div>
            </article>
          </main>

          {/* Right Sidebar */}
          <aside className="col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="sticky top-8 space-y-6">
              
              {/* Newsletter widget statique */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                <p className="text-sm mb-4 opacity-90">Recevez nos derniers conseils tech</p>
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm mb-3"
                />
                <button className="w-full bg-white text-purple-600 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                  S'abonner
                </button>
              </div>

              {/* Widgets d'affiliation dynamiques */}
              {rightSidebarWidgets.map((widget : any) => (
                <AffiliateWidget 
                  key={widget._id} 
                  widget={widget} 
                />
              ))}

              {/* Widget mobile - Version compacte */}
<MobileAffiliates widgets={affiliateWidgets} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}