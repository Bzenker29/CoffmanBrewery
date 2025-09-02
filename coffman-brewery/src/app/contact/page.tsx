export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 bg-[var(--brewery-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[var(--brewery-dark)] mb-12">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-[var(--brewery-accent)]">
              <h2 className="text-2xl font-bold text-[var(--brewery-dark)] mb-6">
                Visit Us
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[var(--brewery-primary)]">
                    Address
                  </h3>
                  <p className="text-[var(--brewery-dark)]">
                    123 Brewery Lane <br />
                    Aiken, SC 12345
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--brewery-primary)]">
                    Phone
                  </h3>
                  <p className="text-[var(--brewery-dark)]">(443) 555-1234</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--brewery-primary)] mb-2">
                    Email
                  </h3>
                  <p className="text-[var(--brewery-dark)]">
                    info@coffmanbrewery.com
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[var(--brewery-primary)] p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Hours</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Bar Hours</h3>
                  <div className="text-white space-y-1">
                    <p>Monday - Thursday: 4:00 PM - 9:00 PM</p>
                    <p>Friday - Saturday: 12:00 PM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Kitchen Hours
                  </h3>
                  <div className="text-white space-y-1">
                    <p>Monday - Thursday: 2:00 PM - 9:00 PM</p>
                    <p>Friday - Saturday: 12:00 PM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[var(--brewery-accent)]">
            <h2 className="text-2xl font-bold text-[var(--brewery-dark)] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--brewery-dark)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--brewery-primary)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--brewery-dark)] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--brewery-primary)]"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--brewery-dark)] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--brewery-primary)]"
                  placeholder="Tell is what's on your mind..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--brewery-primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--brewery-primary-dark)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
