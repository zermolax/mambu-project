import { getContinutCopii } from '../../../lib/api';
import Image from 'next/image';

function contentToHtml(content: any[]) {
  return content.map((block, index) => {
    if (block.type === 'paragraph') {
      return <p key={index}>{block.children.map((child: any) => child.text).join('')}</p>;
    }
    return null;
  });
}

export default async function ContinutCopiiPage({ params }: { params: { id: string } }) {
  const continut = await getContinutCopii(params.id);

  if (!continut) {
    return <div>Conținutul nu a fost găsit.</div>;
  }

  const imageUrl = continut.attributes.imagine?.data && continut.attributes.imagine.data.length > 0
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${continut.attributes.imagine.data[0].attributes.url}`
    : '/placeholder-image.jpg'; // O imagine placeholder în caz că nu există imagine

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{continut.attributes.titlu}</h1>
      <p className="text-gray-600 mb-4">Tip: {continut.attributes.categorie}</p>
      <Image 
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${continut.attributes.imagine.data.attributes.url}`}
          alt={continut.attributes.titlu}
          width={800}
          height={400}
          className="mb-4 rounded"
        />
      <div className="whitespace-pre-wrap">{contentToHtml(continut.attributes.continut)}</div>
    </div>
  );
}