import Link from "next/link";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// 📸 Création du builder d'URL d'images
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const getPosts = async () => {
  return await client.fetch(`
    *[_type == "post"]{
      title,
      slug,
      excerpt,
      coverImage
    }
  `);
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="">
      <h1 className="text-4xl font-bold mb-8 md:px-20 py-10">📝 Derniers articles DevOps</h1>
      <ul className="grid grid-cols-1 px-4 md:grid-cols-2 gap-10 md:px-40">
        {posts.map((post: any) => (
          <li key={post.slug.current} className="border-b pb-6">
            {post.coverImage && post.coverImage.asset && (
              <Image
                src={urlFor(post.coverImage).width(800).height(400).url()}
                alt={post.title}
                width={400}
                height={400}
                className="rounded-md mb-4 object-cover"
              />
            )}
            <Link
              href={`/blog/${post.slug.current}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
