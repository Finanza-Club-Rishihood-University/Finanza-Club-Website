import React from 'react';

export default function Home() {
  const eventCards = [
    { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
  ];

  const sessionNotes = [
    {
      title: "Learn To Earn Notes",
      subtitle: "Speakers: Harshit Jain, Sahil Gurnani",
      topic: "Topic 1: Outside Views",
      content: "From Background to Transparent Education and Banking. This paragraph includes everything needed to convey information clearly and effectively."
    },
    {
      title: "Retrieve Better Finance",
      content: "Detailed information about financial strategies and investment opportunities for students."
    }
  ];

  const mediaCards = [
    { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
    { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
    { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-300 mb-16">
        <img 
          src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=500&fit=crop" 
          alt="Finance classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">Finanza Club</h1>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-3xl font-bold mb-2">About</h2>
        <h3 className="text-4xl font-bold text-[#C0003D] mb-6">Finanza</h3>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in sollicitudin feugiat sed turpis ut arcu non risus. At tortor placerat at dignissim aliquet. Et facilisi vivamus diam quam interdum placerat non lobortis velit scelerisque. Eget venenatis sed vel sit sed. Ipsum sollicitudin feugiat lobortis lacinia. Tempor morbi bibendum pharetra velit turpis scelerisque sed. Sed habitasse viverra purus.
          </p>
          <p>
            Ultrices facilisi quis sem integer sem orci. Morbi sit tortor. Ultrices feugiat imperdiet lectis. Eget rhoncus non gravit placerat.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi feugiat imperdiet luctus. Eget facilisis morbi sit placerat placerat.
        </p>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
          {/* First Row - 3 equal cards */}
          <div className="group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-[0.98]"></div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Eget risus bibendum</h3>
                <p className="text-sm text-gray-600">
                  Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi
                </p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-[0.98]"></div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Eget risus bibendum</h3>
                <p className="text-sm text-gray-600">
                  Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi
                </p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-[0.98]"></div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Eget risus bibendum</h3>
                <p className="text-sm text-gray-600">
                  Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - 2 wide cards */}
          <div className="md:col-span-2 group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-[0.98]"></div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Eget risus bibendum</h3>
                <p className="text-sm text-gray-600">
                  Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi
                </p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-[0.98]"></div>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Eget risus bibendum</h3>
                <p className="text-sm text-gray-600">
                  Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Notes Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Session notes</h2>
        <p className="text-center text-gray-600 mb-12">
          Eget risus bibendum phu nam verm sollicitudin lorem. Tempor vermellis vitally velit turpis interstitium placerat. Eget facilisi mattis rhoncus feugiat placerat.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1 space-y-6">
            {sessionNotes.map((note, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                {note.subtitle && <p className="text-sm text-gray-600 mb-2">{note.subtitle}</p>}
                {note.topic && <p className="text-sm font-semibold mb-2">{note.topic}</p>}
                <p className="text-sm text-gray-700 leading-relaxed">{note.content}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="bg-gray-300 h-64 rounded-lg"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#C0003D] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <button className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors">
            View More
          </button>
        </div>
      </section>

      {/* Latest Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 h-96 rounded-lg"></div>
          
          <div>
            <h2 className="text-4xl font-bold text-[#C0003D] mb-6">Latest Newsletter</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in sollicitudin feugiat sed turpis ut arcu non risus. At tortor placerat at dignissim aliquet. Et facilisi vivamus diam quam interdum placerat non lobortis velit scelerisque. Eget venenatis sed vel sit sed. Ipsum sollicitudin feugiat lobortis lacinia.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#C0003D] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a00033] transition-colors">
                Read It
              </button>
              <button className="border-2 border-[#C0003D] text-[#C0003D] px-6 py-2 rounded-full font-semibold hover:bg-[#C0003D] hover:text-white transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media | Reels | News Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Media | Reels | News</h2>
        <p className="text-center text-gray-600 mb-12">
          Eget risus bibendum phu nam verm sollicitudin lorem. Tempor vermellis vitally velit turpis interstitium placerat. Eget facilisi mattis rhoncus feugiat placerat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaCards.map((card, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
              <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}