import Link from 'next/link';
import Image from 'next/image';
import { getArticlesRoma } from '../../../../lib/api';
import ChronologicalNavigation from '../../../../components/ui/ChronologicalNavigation';
import { encodeURIComponentSafe } from '../../../../lib/utils';

const categorii = ["Istoria Romei", "Legendele Romei", "Personalitățile Romei", "Arta și cultură", "Religia Romei Antice", "Vaticanul", "Papalitatea și Creștinismul", "Monumente", "Biserici", "Titani ai artei", "Muzee", "Tururi", "Librărie"];

export default async function CategoryPage({ 
  params, 
  searchParams 
}: { 
  params: { categorie: string }, 
  searchParams: { perioada?: string, search?: string }
}) {
  const decodedCategorie = decodeURIComponent(params.categorie);
  const perioada = searchParams.perioada ? parseInt(searchParams.perioada) : undefined;
  const search = searchParams.search || '';

  const { data: articole } = await getArticlesRoma(1, 100, search, decodedCategorie, perioada);

  // Găsim anul minim și maxim pentru navigarea cronologică
  const ani = articole.map(articol => articol.attributes.perioada).filter(Boolean);
  const minAn = Math.min(...ani);
  const maxAn = Math.max(...ani);

  return (
    <div className="flex min-h-screen bg-[#FFF7E6]">
      {/* Navigare cronologică în stânga */}
      <div className="w-1/12 p-4 bg-[#FFE4B5]">
        <ChronologicalNavigation minYear={minAn} maxYear={maxAn} categorie={decodedCategorie} />
      </div>

      {/* Conținut principal */}
      <div className="w-9/12 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#8B0000] font-farro">{decodedCategorie}</h1>
        <div className="grid grid-cols-3 gap-6">
          {articole.map((articol: any) => (
            <div key={articol.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              {articol.attributes.imagine_principala?.data?.attributes?.url ? (
                <Image 
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${articol.attributes.imagine_principala.data.attributes.url}`}
                  alt={articol.attributes.titlu || 'Imagine Roma'}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Fără imagine</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold font-farro text-center text-[#8B0000] mb-2">{articol.attributes.titlu || 'Titlu nedisponibil'}</h2>
                <p className="text-sm text-[#4A3728] mb-2">{articol.attributes.descriere?.slice(0, 100)}...</p>
                <Link href={`/rome/${articol.id}`} className="text-[#8B0000] hover:underline text-center block">
                  Citește mai mult
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar în dreapta */}
      <div className="w-2/12 p-4 bg-[#FFE4B5]">
        {/* Bară de căutare */}
        <form className="mb-6">
          <input
            type="text"
            placeholder="Caută..."
            className="w-full p-2 border border-[#8B0000] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
            defaultValue={search}
          />
          <button type="submit" className="mt-2 w-full bg-[#8B0000] text-white px-4 py-2 rounded-full hover:bg-[#6D071A] transition-colors duration-300">Caută</button>
        </form>

        {/* Spațiu pentru vânzarea de carte */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-farro text-[#8B0000]">Cărțile Noastre</h3>
          <p className="text-sm text-[#4A3728]">Descoperă colecția noastră de cărți despre Roma!</p>
        </div>

        {/* Categorii */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-farro text-[#8B0000]">Categorii</h3>
          <ul>
            {categorii.map((cat) => (
              <li key={cat} className="mb-2">
                <Link href={`/rome/category/${encodeURIComponentSafe(cat)}`} className={`text-[#4A3728] hover:text-[#8B0000] transition-colors duration-300 ${cat === decodedCategorie ? 'font-bold' : ''}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Spațiu pentru AdSense */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">Spațiu rezervat pentru reclame</p>
        </div>

        {/* Taguri */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-farro text-[#8B0000]">Taguri Populare</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#FFD700] text-[#8B0000] px-2 py-1 rounded-full text-sm">istorie</span>
            <span className="bg-[#FFD700] text-[#8B0000] px-2 py-1 rounded-full text-sm">artă</span>
            <span className="bg-[#FFD700] text-[#8B0000] px-2 py-1 rounded-full text-sm">cultură</span>
          </div>
        </div>
      </div>
    </div>
  );
}