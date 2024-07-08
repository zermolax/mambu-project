export default function RomePage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Descoperă Roma</h1>
        <p className="mb-4">Explorează istoria, arta și cultura fascinantă a Romei!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Cartea despre Roma</h2>
            <p>Descoperiți secretele Romei cu ghidul nostru complet.</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Află mai multe</button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Tururi Ghidate</h2>
            <p>Participați la tururile noastre pentru o experiență autentică în Roma.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Rezervă acum</button>
          </div>
        </div>
      </div>
    )
  }