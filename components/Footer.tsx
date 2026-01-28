export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-8">

        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Dashboard</li>
            <li>Market Data</li>
            <li>AI Signals</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="font-semibold text-lg">
          StockHorizon
        </div>
      </div>

      <div className="text-center text-xs opacity-60 mt-16">
        © 2026 StockHorizon. All rights reserved.
      </div>
    </footer>
  );
}
