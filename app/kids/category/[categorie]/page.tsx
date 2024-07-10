import Link from 'next/link';
import Image from 'next/image';
import { getContinuturiCopii } from '../../../../lib/api';
import AlphabeticalNavigation from '../../../../components/ui/AlphabeticalNavigation';

export default async function CategoryPage({ params }: { params: { categorie: string } }) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const { data: continuturi } = await getContinuturiCopii(1, 100, '', decodedCategorie);

  return (
    <div className="flex min-h-screen bg-[#EDE7D9]">
      <div className="w-1/12 p-4 bg-[#C8DFC5]">
        <AlphabeticalNavigation />
      </div>
      <div className="w-9/12 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#6D4C3D] font-farro">{decodedCategorie}</h1>
        <div className="grid grid-cols-4 gap-6">
          {continuturi.map((continut: any) => (
            <Link key={continut.id} href={`/kids/${continut.id}`} className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              {continut.attributes.imagine?.data?.attributes?.url ? (
                <Image 
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${continut.attributes.imagine.data.attributes.url}`}
                  alt={continut.attributes.titlu || 'Imagine poveste'}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Fără imagine</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold font-farro text-center text-[#6D4C3D]">{continut.attributes.titlu || 'Titlu nedisponibil'}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-2/12 p-4 bg-[#C8DFC5]">
        {/* Sidebar content */}
      </div>
    </div>
  );
}