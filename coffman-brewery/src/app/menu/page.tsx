export default function MenuPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        <div className="flex justify-center">
          <iframe
            src="/Zenker-resume.pdf"
            width="800"
            height="1000"
            className="border border-[var(--brewery-accent)] rounded-lg"
          >
            <p>
              Your browser doesn't support PDFs
              <a href="/Zenker-resume.pdf"> Download the menu</a>
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}
