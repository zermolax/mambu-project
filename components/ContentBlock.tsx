// components/ContentBlock.tsx

import Image from 'next/image';

interface ContentBlockProps {
  block: {
    type: string;
    content: string;
    image?: {
      url: string;
      alt: string;
    };
  };
}

export default function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case 'text':
      return <p className="mb-4 font-milonga text-gray-800">{block.content}</p>;
    case 'heading':
      return <h2 className="text-2xl font-bold mb-4 font-farro text-pink-700">{block.content}</h2>;
    case 'image':
      return (
        <div className="my-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.image?.url}`}
            alt={block.image?.alt || 'Imagine articol'}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-pink-500 pl-4 italic my-4 text-gray-700">
          {block.content}
        </blockquote>
      );
    default:
      return null;
  }
}