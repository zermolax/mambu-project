import Link from 'next/link';
import Image from 'next/image';
import { getArticlesRoma } from '../../lib/api';
import { encodeURIComponentSafe } from '../../lib/utils';

const categorii = ["Istoria Romei", "Legendele Romei", "Personalitățile Romei", "Arta și cultură", "Religia Romei Antice", "Vaticanul", "Papalitatea și Creștinismul", "Monumente", "Biserici", "Titani ai artei", "Muzee", "Tururi", "Librărie"];

const categoryDescriptions = {
  "Istoria Romei": "Descoperă fascinanta istorie a Romei, de la fondarea sa legendară până în prezent.",
  "Legendele Romei": "Explorează miturile și legendele care au modelat cultura și identitatea Romei.",
  "Personalitățile Romei": "Cunoaște figurile istorice care au influențat destinul Cetății Eterne.",
  "Arta și cultură": "Admiră capodoperele artistice și descoperă bogăția culturală a Romei.",
  "Religia Romei Antice": "Află despre practicile religioase și credințele Romei antice.",
  "Vaticanul": "Explorează istoria și semnificația celui mai mic stat din lume.",
  "Papalitatea și Creștinismul": "Descoperă rolul Romei în dezvoltarea creștinismului.",
  "Monumente": "Vizitează virtual monumentele emblematice ale Romei.",
  "Biserici": "Admiră arhitectura și arta sacră a bisericilor romane.",
  "Titani ai artei": "Cunoaște artiștii care au creat capodoperele Romei.",
  "Muzee": "Explorează comorile ascunse în muzeele Romei.",
  "Tururi": "Planifică-ți vizita în Roma cu tururile noastre ghidate.",
  "Librărie": "Descoperă cărți captivante despre Roma și cultura sa."
};

export default async function RomePage({ 
  searchParams 
}: { 
  searchParams: { page?: string, search?: string, categorie?: string } 
}) {
  const search = searchParams.search || '';

  const categoriiArticole = await Promise.all(
    categorii.map(async (categorie) => {
      const { data } = await getArticlesRoma(1, 8, '', categorie);
      return { categorie, articole: data };
    })
  );

  return (
    <div className="flex min-h-screen bg-[#FFF7E6]">
      <div className="w-10/12 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#8B0000] font-farro">Descoperă Roma</h1>
        <p className="text-lg mb-8 text-center font-milonga text-[#4A3728]">
          Bine ați venit în fascinanta lume a Romei! Explorați istoria milenară, arta captivantă și cultura vibrantă a Cetății Eterne. De la monumentele antice la capodoperele Renașterii, Roma vă așteaptă să-i descoperiți secretele.
        </p>
        
        {categoriiArticole.map(({ categorie, articole }, index) => (
          <div key={categorie} className={`mb-12 p-6 rounded-lg transition-all duration-300 ${getCategoryColor(index)}`}>
            <h2 className="text-3xl font-bold mb-2 text-center font-farro text-[#8B0000]">{categorie}</h2>
            <p className="text-center mb-6 font-milonga text-[#4A3728]">{categoryDescriptions[categorie]}</p>
            <div className="grid grid-cols-4 gap-4">
              {articole.slice(0, 8).map((articol: any) => (
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
                    <h3 className="text-lg font-semibold font-farro text-center text-[#8B0000] mb-2">{articol.attributes.titlu || 'Titlu nedisponibil'}</h3>
                    <p className="text-sm text-[#4A3728] mb-2">{articol.attributes.descriere?.slice(0, 100)}...</p>
                    <Link href={`/rome/${articol.id}`} className="text-[#8B0000] hover:underline text-center block">
                      Citește mai mult
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={`/rome/category/${encodeURIComponentSafe(categorie)}`} className="bg-[#8B0000] text-white px-6 py-2 rounded-full hover:bg-[#6D071A] transition-colors duration-300 inline-block font-farro">
                Vezi toate articolele din {categorie}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar în dreapta */}
      <div className="w-2/12 p-4 bg-[#FFE4B5]">
        {/* Bară de căutare */}
        <form className="mb-6">
          <input
            type="text"
            placeholder="Caută..."
            className="w-full p-2 border border-[#8B0000] rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
          />
          <button type="submit" className="mt-2 w-full bg-[#8B0000] text-white px-4 py-2 rounded-full hover:bg-[#6D071A] transition-colors duration-300">Caută</button>
        </form>

        {/* Spațiu pentru vânzarea de carte */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-farro text-[#8B0000]">Cărțile Noastre</h3>
          <p className="text-sm text-[#4A3728]">Descoperă colecția noastră de cărți despre Roma!</p>
          {/* Aici veți adăuga ulterior componentele pentru shopping */}
        </div>

        {/* Categorii */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-farro text-[#8B0000]">Categorii</h3>
          <ul>
            {categorii.map((cat) => (
              <li key={cat} className="mb-2">
                <Link href={`/rome/category/${encodeURIComponentSafe(cat)}`} className="text-[#4A3728] hover:text-[#8B0000] transition-colors duration-300">
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

function getCategoryColor(index: number) {
  const colors = [
    'bg-[#FFF7E6]', 'bg-[#FFE4B5]', 'bg-[#FFDAB9]', 'bg-[#FFD700]', 
    'bg-[#FFB90F]', 'bg-[#FFA500]', 'bg-[#FF8C00]'
  ];
  return colors[index % colors.length];
}