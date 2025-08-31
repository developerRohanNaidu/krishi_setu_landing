export default function HowItWorks() {
    const steps = [
      { title: "1. Farmers Create Campaign", desc: "Farmers request funds for crops, livestock, or seasonal harvest." },
      { title: "2. Investors Buy Shares", desc: "Anyone can invest with as little as ₹100 and own farm shares." },
      { title: "3. Farmers Grow & Update", desc: "Farmers post updates, progress, and photos from the field." },
      { title: "4. Profit Sharing", desc: "Investors earn proportional profits when farmers sell their produce." },
    ]
  
    return (
      <section id="how" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-green-700">How It Works</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  