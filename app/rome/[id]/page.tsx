import Link from 'next/link';
import { getArticleRoma } from '../../../lib/api';
import Image from 'next/image';

// Funcție auxiliară pentru a converti conținutul structurat în HTML
function contentToHtml(content: any[]) {
  return content.map((block, index) => {
    if (block.type === 'paragraph') {
      return <p key={index}>{block.children.map((child: any) => child.text).join('')}</p>;
    }
    // Adăugați aici mai multe cazuri pentru alte tipuri de blocuri, dacă este necesar
    return null;
  });
}

export default async function ArticleRomaPage({ params }: { params: { id: string } }) {
  const article = await getArticleRoma(params.id);

  if (!article) {
    return <div>Articolul nu a fost găsit.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{article.attributes.titlu}</h1>
      <p className="text-gray-600 mb-4">Categorie: {article.attributes.categorie}</p>
      {article.attributes.imagine_principala?.data && (
        <Image 
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.imagine_principala.data.attributes.url}`}
          alt={article.attributes.titlu}
          width={800}
          height={400}
          className="mb-4 rounded"
        />
      )}
      <div>{contentToHtml(article.attributes.continut)}</div>
    </div>
  );
}