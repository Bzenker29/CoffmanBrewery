import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section*/}
      <section className="bg-[var(--brewery-accent-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[var(--brewery-dark)]">
            Coffman Brewery
          </h1>
          <p className="text-xl text-[var(--brewery-dark)] mb-8">
            Your one stop shop for a great time with friends
          </p>
          <Image
            src="/coffman-brewery.jpeg"
            alt="Coffman Brewery Logo"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Experience Section*/}
      <section className="py-16 bg-[var(--brewery-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--brewery-dark)] text-center mb-8">
            The Coffman Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[var(--brewery-accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍺</span>
              </div>
              <h3 className="text-xl font-semibold mb-2"> Craft Brews</h3>
              <p className="text-[var(--brewery-dark)]">
                Locally brewed beers with unique flavors and traditional
                favorites
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[var(--brewery-accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2"> Fresh Food</h3>
              <p className="text-[var(--brewery-dark)]">
                Delicious pub food made with fresh, locally sourced ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[var(--brewery-accent)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2"> Fun Activities</h3>
              <p className="text-[var(--brewery-dark)]">
                Games and entertainment for the perfect night out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Happy Hour  & Amenities*/}
      <section id="hours" className="py-16 bg-[var(--brewery-light)]">
        <div className="max-w-7xl mx-auto px-4 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Amenities */}
            <div>
              <h2 className="text-4xl font-bold text-center text-[var(--brewery-dark)] mb-8">
                Amenities & Games
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 border border-[var(--brewery-accent)] rounded-lg">
                  <span className="text-4xl mr-4">🎯</span>
                  <h3 className="font-semibold text-[var(--brewery-dark)]">
                    Darts
                  </h3>
                </div>
                <div className="flex items-center p-4 border border-[var(--brewery-accent)] rounded-lg">
                  <span className="text-4xl mr-4">🌽</span>
                  <h3 className="font-semibold text-[var(--brewery-dark)]">
                    Cornhole
                  </h3>
                </div>
                <div className="flex items-center p-4 border border-[var(--brewery-accent)] rounded-lg">
                  <span className="text-4xl mr-4">🎱</span>
                  <h3 className="font-semibold text-[var(--brewery-dark)]">
                    Pool Tables
                  </h3>
                </div>
                <div className="flex items-center p-4 border border-[var(--brewery-accent)] rounded-lg">
                  <span className="text-4xl mr-4">📺</span>
                  <h3 className="font-semibold text-[var(--brewery-dark)]">
                    Sports TV
                  </h3>
                </div>
                <div className="flex items-center p-4 border border-[var(--brewery-accent)] rounded-lg">
                  <span className="text-4xl mr-4">🎶</span>
                  <h3 className="font-semibold text-[var(--brewery-dark)]">
                    Live Music
                  </h3>
                </div>
              </div>
            </div>

            {/* Hours & Happy Hour*/}
            <div className="space-y-8 bg-[var(--brewery-primary)] p-6 rounded-lg">
              {/* Hours */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--brewery-dark)] mb-8">
                  Hours
                </h2>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--brewery-dark)] mb-3">
                      Bar Hours
                    </h3>
                    <div className="space-y-1 text-[var(--brewery-dark)]">
                      <p> Monday - Thursday: 4:00 PM - 9:00 PM </p>
                      <p> Friday - Saturday: 12:00 PM - 11:00 PM </p>
                      <p> Sunday: 12:00 PM 10:00 PM </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--brewery-dark)] mb-3">
                      Kitchen Hours
                    </h3>
                    <div className="space-y-1 text-[var(--brewery-dark)]">
                      <p> Monday - Thursday: 2:00 PM - 9:00 PM </p>
                      <p> Friday - Saturday: 12:00 PM - 11:00 PM </p>
                      <p> Sunday: 12:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Happy Hour */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--brewery-dark)] mb-8">
                  Happy Hour
                </h2>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--brewery-dark)] mb-3">
                    Monday - Friday: 4:00 PM - 6:00 PM
                  </h3>
                  <ul className="space-y-2 text-[var(--brewery-dark)]">
                    <li> $2 off all draft beers </li>
                    <li> $5 appetizers </li>
                    <li> $6 house cocktails</li>
                    <li> $3 off wine by the glass </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
