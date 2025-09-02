export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 bg-[var(--brewery-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[var(--brewery-dark)] mb-12">
          Our Events
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Live Music */}

          <div className="bg-white p-6 rounded-lg shadow-lg border border-[var(--brewery-accent)]">
            <h2 className="text-2xl text-center font-bold text-[var(--brewery-dark)] mb-6">
              Live Music
            </h2>
            <div>
              <h3 className="font-semibold text-center text-[var(--brewery-primary)] mb-12">
                Every 1st and 3rd Saturday of the month
              </h3>
              <p className="text-[var(--brewery-dark)]">
                Come and enjoy different local bands such as (blank) and (blank)
                play on these special days. Bring your friends and family along
                to enjoy our wonderful food and drinks with this amazing live
                music
              </p>
            </div>
          </div>

          {/* Food Trucks */}

          <div className="bg-white p-6 rounded-lg shadow-lg border border-[var(--brewery-accent)]">
            <h2 className="text-2xl text-center font-bold text-[var(--brewery-dark)] mb-6">
              Food Trucks
            </h2>
            <div>
              <h3 className="font-semibold text-center text-[var(--brewery-primary)] mb-12">
                Every Friday and Saturday
              </h3>
              <p className="text-[var(--brewery-dark)]">
                Enjoy food from our local vendors on wheels. These food trucks
                will be located along the side of the building with easy access
                and line control so everyone can get to the trucks easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
