export default function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-700 to-green-500 text-white relative">
        <h1 className="text-5xl font-extrabold">Invest in Farmers. Grow Together.</h1>
        <p className="mt-4 text-lg max-w-xl">
          Krishi Setu connects farmers with investors. Farmers get funds for crops & livestock, investors earn fair returns.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#cta" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl">Become Investor</a>
          <a href="#cta" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl">Join as Farmer</a>
        </div>
      </section>
    )
  }
  