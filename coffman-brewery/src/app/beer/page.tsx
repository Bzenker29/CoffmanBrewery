import Link from "next/link";

export default function BeerPage() {
  const beers = [
    {
      name: "Coffman Gold",
      type: "Golden Ale",
      abv: "4.8%",
      ibu: "22",
      description:
        "A crisp, refreshing golden ale with hints of honey and citrus. Perfect for any occasion.",
    },
    {
      name: "Midnight Porter",
      type: "Porter",
      abv: "6.2%",
      ibu: "35",
      description:
        "Rich and smooth with notes of chocolate and coffee. A perfect end to any evening.",
    },
    {
      name: "Hoppy Trail IPA",
      type: "IPA",
      abv: "6.8%",
      ibu: "65",
      description:
        "Bold and hoppy with tropical fruit flavors and a citrusy finish.",
    },
    {
      name: "Wheat Field",
      type: "Wheat Beer",
      abv: "5.1%",
      ibu: "18",
      description:
        "Light and cloudy with a smooth wheat character and subtle spice notes.",
    },
    {
      name: "Amber Waves",
      type: "Amber Ale",
      abv: "5.5%",
      ibu: "28",
      description:
        "Balanced malt sweetness with caramel notes and a clean finish.",
    },
    {
      name: "Stout Hearted",
      type: "Stout",
      abv: "7.2%",
      ibu: "42",
      description:
        "Full-bodied with roasted malt flavors, hints of vanilla, and a creamy texture.",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-[var(--brewery-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[var(--brewery-dark)] mb-4">
          Our Craft Beers
        </h1>
        <p className="text-center text-[var(--brewery-dark)] mb-12 text-lg">
          Locally brewed with passion and tradition
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beers.map((beer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-[var(--brewery-accent)]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[var(--brewery-dark)]">
                  {beer.name}
                </h3>
                <span className="text-sm bg-[var(--brewery-primary)] text-white px-2 py-1 rounded">
                  {beer.type}
                </span>
              </div>

              <div className="flex space-x-4 mb-4 text-sm text-[var(--brewery-secondary)]">
                <span className="font-semibold">ABV: {beer.abv}</span>
                <span className="font-semibold">IBU: {beer.ibu}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-[var(--brewery-primary)] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come Try Our Beers!
            </h2>
            <p className="text-white mb-6">
              Vist us today to sample our full selection of craft beers
            </p>
            <Link
              href="/#hours"
              className="bg-[var(--brewery-dark)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--brewery-secondary)] inline-block"
            >
              View Hours & Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
