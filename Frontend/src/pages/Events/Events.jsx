export default function Events() {
  const events = [
    {
      title: "Investment 101 Workshop",
      date: "November 12, 2025",
      description: "Learn the fundamentals of investing, portfolio management, and risk assessment.",
      time: "4:00 PM - 6:00 PM",
      location: "Finance Building, Room 201"
    },
    {
      title: "Crypto & Future of Money",
      date: "November 20, 2025",
      description: "Explore the world of cryptocurrencies and their impact on traditional finance.",
      time: "3:00 PM - 5:00 PM",
      location: "Business School, Room 150"
    },
    {
      title: "Finance Quiz Night",
      date: "November 25, 2025",
      description: "Test your financial knowledge in a fun and competitive environment.",
      time: "6:00 PM - 8:00 PM",
      location: "Student Center, Main Hall"
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#C0003D' }}>Upcoming Events</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Join us for our upcoming events designed to enhance your financial knowledge and networking opportunities.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <div key={i} className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div style={{ backgroundColor: '#C0003D', height: '8px' }}></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#C0003D' }}>{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700 mb-6">{event.description}</p>
              <button
                className="w-full text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                style={{ backgroundColor: '#C0003D' }}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}