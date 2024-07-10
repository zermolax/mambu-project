import Link from 'next/link';
import Image from 'next/image';
import { getContinuturiCopii } from '../../lib/api';
import { encodeURIComponentSafe } from '../../lib/utils';

const categorii = ["Cântece", "Poezii", "Povestiri", "Fabule", "Cărți", "Jocuri", "Canale YouTube"];

const categoryDescriptions = {
  "Cântece": "Descoperă o colecție veselă de cântece pentru copii, perfecte pentru dezvoltarea limbajului și a abilităților muzicale.",
  "Poezii": "Explorează lumea magică a poeziei pentru copii, care stimulează imaginația și dezvoltă dragostea pentru limbaj.",
  "Povestiri": "Pășește în universul captivant al povestirilor pentru copii, pline de aventură și învățăminte valoroase.",
  "Fabule": "Învață lecții de viață importante prin intermediul fabulelor noastre educative și amuzante.",
  "Cărți": "Descoperă o selecție atent aleasă de cărți pentru copii, potrivite pentru toate vârstele și interesele.",
  "Jocuri": "Distrează-te și învață cu jocurile noastre interactive, concepute pentru a stimula dezvoltarea cognitivă.",
  "Canale YouTube": "Explorează canale YouTube educative și distractive, verificate și sigure pentru copii."
};

export default async function KidsPage({ 
  searchParams 
}: { 
  searchParams: { page?: string, search?: string, categorie?: string, letter?: string } 
}) {
  const search = searchParams.search || '';
  const letter = searchParams.letter || '';

  const categoriiContinut = await Promise.all(
    categorii.map(async (categorie) => {
      const { data } = await getContinuturiCopii(1, 12, '', categorie, letter);
      return { categorie, continuturi: data };
    })
  );

  return (
    <div className="flex min-h-screen bg-[#EDE7D9]">
      <div className="w-10/12 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#6D4C3D] font-farro">Povești și Cântece pentru Copii</h1>
        <p className="text-lg mb-8 text-center font-milonga text-[#6D4C3D]">
          Bine ați venit în lumea magică a poveștilor și cântecelor pentru copii! Aici veți găsi o colecție variată de conținut educativ și distractiv, perfect pentru dezvoltarea imaginației și învățarea prin joc. De la cântece vesele la povești captivante, avem tot ce e nevoie pentru a încânta și educa micuții cititori.
        </p>
        
        {categoriiContinut.map(({ categorie, continuturi }, index) => (
          <div key={categorie} className={`mb-12 p-6 rounded-lg transition-all duration-300 ${getCategoryColor(index)}`}>
            <h2 className="text-3xl font-bold mb-2 text-center font-farro text-[#6D4C3D]">{categorie}</h2>
            <p className="text-center mb-6 font-milonga text-[#6D4C3D]">{categoryDescriptions[categorie]}</p>
            <div className="grid grid-cols-6 gap-4">
              {continuturi.slice(0, 12).map((continut: any) => (
                <Link key={continut.id} href={`/kids/${continut.id}`} className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  {continut.attributes.imagine?.data?.attributes?.url ? (
                    <Image 
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${continut.attributes.imagine.data.attributes.url}`}
                      alt={continut.attributes.titlu || 'Imagine poveste'}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Fără imagine</span>
                    </div>
                  )}
                  <div className="p-2">
                    <h3 className="text-sm font-semibold font-farro text-center text-[#6D4C3D]">{continut.attributes.titlu || 'Titlu nedisponibil'}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href={`/kids/category/${encodeURIComponentSafe(categorie)}`} className="bg-[#9A8268] text-white px-6 py-2 rounded-full hover:bg-[#6D4C3D] transition-colors duration-300 inline-block font-farro">
                Vezi tot conținutul din {categorie}
              </Link>
            </div>
          </div>
        ))}
      </div>


      {/* Sidebar în dreapta */}
      <div className="w-2/12 p-4 bg-[#C8DFC5]">
        {/* Bara de căutare */}
        <form className="mb-6">
          <input
            type="text"
            placeholder="Caută..."
            className="w-full p-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            defaultValue={search}
          />
          <button type="submit" className="mt-2 w-full bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300">Caută</button>
        </form>

        {/* Spațiu pentru shopping */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 font-farro">Cărțile Noastre</h3>
          <p className="text-sm">Descoperă colecția noastră de cărți pentru copii!</p>
          {/* Aici veți adăuga ulterior componentele pentru shopping */}
        </div>

        {/* Categorii */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-farro">Categorii</h3>
          <ul>
            {categorii.map((cat) => (
              <li key={cat} className="mb-2">
                <Link href={`/kids/category/${encodeURIComponentSafe(cat)}`} className="text-pink-700 hover:text-pink-900 transition-colors duration-300">
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
          <h3 className="text-xl font-bold mb-2 font-farro">Taguri Populare</h3>
          <div className="flex flex-wrap gap-2">
            {/* Aici veți adăuga ulterior logica pentru taguri */}
            <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-sm">copii</span>
            <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-sm">povești</span>
            <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-sm">educație</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCategoryColor(index: number) {
  const colors = [
    'bg-[#EDE7D9]', 'bg-[#C8DFC5]', 'bg-[#E1D3C0]', 'bg-[#D2C0B2]', 
    'bg-[#B8A99A]', 'bg-[#9A8268]', 'bg-[#7C6855]'
  ];
  return colors[index % colors.length];
}
