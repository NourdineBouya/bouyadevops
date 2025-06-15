// components/AffiliateWidget.jsx
"use client"
import Image from "next/image";
import { urlFor } from "../sanity/lib/image";

const colorSchemes = {
  orange: {
    bg: 'bg-gradient-to-r from-orange-400 to-orange-600',
    button: 'bg-white text-orange-600 hover:bg-gray-100'
  },
  blue: {
    bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
    button: 'bg-white text-blue-600 hover:bg-gray-100'
  },
  green: {
    bg: 'bg-gradient-to-r from-green-500 to-green-600',
    button: 'bg-white text-green-600 hover:bg-gray-100'
  },
  red: {
    bg: 'bg-gradient-to-r from-red-500 to-red-600',
    button: 'bg-white text-red-600 hover:bg-gray-100'
  },
  purple: {
    bg: 'bg-gradient-to-r from-purple-500 to-purple-600',
    button: 'bg-white text-purple-600 hover:bg-gray-100'
  },
  pink: {
    bg: 'bg-gradient-to-r from-pink-500 to-pink-600',
    button: 'bg-white text-pink-600 hover:bg-gray-100'
  }
};
type ColorScheme = keyof typeof colorSchemes;

interface AffiliateWidgetProps {
  widget: {
    colorScheme?: ColorScheme;
    // ...other widget properties
    [key: string]: any;
  };
  size?: 'normal' | 'compact';
}

// Update your component signature:
export default function AffiliateWidget({ widget, size = 'normal' }: AffiliateWidgetProps) {
  const colors = colorSchemes[widget.colorScheme as ColorScheme] || colorSchemes.blue;
  
  const handleClick = () => {
    // Tracking analytics optionnel
    //if (typeof gtag !== 'undefined') {
    //  gtag('event', 'click', {
     //   event_category: 'affiliate',
      //  event_label: widget.company
     // });
  //  }
    
    window.open(widget.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  if (size === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 border">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">{widget.title}</h3>
        <div className={`${colors.bg} rounded-lg p-3 text-white text-center cursor-pointer`} onClick={handleClick}>
          {widget.image && (
            <div className="w-8 h-8 mx-auto mb-2 relative">
              <Image
                src={urlFor(widget.image).width(32).height(32).url()}
                alt={widget.company}
                fill
                className="object-contain"
              />
            </div>
          )}
          <p className="text-xs font-medium">{widget.company}</p>
          {widget.price && <p className="text-lg font-bold">{widget.price}</p>}
          {widget.offer && <p className="text-xs opacity-90">{widget.offer}</p>}
          <button className={`${colors.button} px-3 py-1 rounded text-xs font-medium mt-2 transition-colors`}>
            {widget.buttonText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{widget.title}</h3>
      <div className={`${colors.bg} rounded-lg p-4 text-white text-center cursor-pointer`} onClick={handleClick}>
        {widget.image && (
          <div className="w-16 h-16 mx-auto mb-3 relative">
            <Image
              src={urlFor(widget.image).width(64).height(64).url()}
              alt={widget.company}
              fill
              className="object-contain"
            />
          </div>
        )}
        <h4 className="text-lg font-bold mb-1">{widget.company}</h4>
        {widget.description && (
          <p className="text-sm opacity-90 mb-2">{widget.description}</p>
        )}
        {widget.price && <p className="text-xl font-bold mb-1">{widget.price}</p>}
        {widget.offer && <p className="text-sm opacity-90 mb-3">{widget.offer}</p>}
        <button className={`${colors.button} px-4 py-2 rounded font-medium text-sm transition-colors`}>
          {widget.buttonText} →
        </button>
      </div>
    </div>
  );
}