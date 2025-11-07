export default function Home() {
  const images = [
    "https://via.placeholder.com/400x250?text=Finance+Event+1",
    "https://via.placeholder.com/400x250?text=Finance+Event+2",
    "https://via.placeholder.com/400x250?text=Finance+Event+3",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#C0003D' }}>Welcome to Finanza Club</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Empowering students through financial literacy and innovation.
        </p>
        <button
          className="text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          style={{ backgroundColor: '#C0003D' }}
        >
          Join Our Community
        </button>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#C0003D' }}>Featured Events</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-80 h-56 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12 rounded-2xl shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#C0003D' }}>Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#C0003D' }}>Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry professionals and successful entrepreneurs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#C0003D' }}>Networking</h3>
              <p className="text-gray-600">Connect with like-minded peers and build valuable relationships.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#C0003D' }}>Practical Skills</h3>
              <p className="text-gray-600">Gain hands-on experience with financial tools and strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}