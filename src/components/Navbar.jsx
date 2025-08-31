export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
        <h1 className="text-2xl font-bold text-green-700">Krishi Setu</h1>
        <div className="space-x-6">
          <a href="#how" className="hover:text-green-600">How it Works</a>
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#screenshots" className="hover:text-green-600">App</a>
          <a href="#cta" className="px-4 py-2 bg-green-600 text-white rounded-lg">Join Now</a>
        </div>
      </nav>
    )
  }
  