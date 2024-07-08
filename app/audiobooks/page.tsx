export default function AudiobooksPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cărți Audio</h1>
        <p className="mb-4">Ascultă poveștile tale preferate oricând și oriunde!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Poveste 1', 'Poveste 2', 'Poveste 3'].map((title, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p>O scurtă descriere a cărții audio...</p>
              <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Ascultă acum</button>
            </div>
          ))}
        </div>
      </div>
    )
  }