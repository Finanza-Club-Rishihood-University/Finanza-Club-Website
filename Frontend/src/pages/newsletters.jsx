export default function Newsletters() {
  const newsletters = [
    {
      title: "Quarterly Market Insights",
      month: "October 2025",
      excerpt: "Analysis of market trends, investment opportunities, and economic forecasts for the upcoming quarter.",
      readTime: "5 min read"
    },
    {
      title: "Student Finance Hacks",
      month: "September 2025",
      excerpt: "Practical tips and strategies for students to manage finances, save money, and invest wisely.",
      readTime: "4 min read"
    },
    {
      title: "Cryptocurrency Explained",
      month: "August 2025",
      excerpt: "A beginner's guide to understanding blockchain technology and digital currencies.",
      readTime: "6 min read"
    },
    {
      title: "Entrepreneurship in College",
      month: "July 2025",
      excerpt: "How to start your business while studying and balancing academic responsibilities.",
      readTime: "7 min read"
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#C0003D' }}>Newsletters</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Stay updated with our quarterly newsletters featuring financial insights, market analysis, and member achievements.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {newsletters.map((n, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold" style={{ color: '#C0003D' }}>{n.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded" style={{ backgroundColor: '#FFECE6', color: '#E65C2A' }}>
                  {n.readTime}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{n.month}</p>
              <p className="text-gray-700 mb-6">{n.excerpt}</p>
              <button className="font-medium flex items-center" style={{ color: '#C0003D' }}>
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          className="text-white font-bold py-3 px-8 rounded-full transition duration-300"
          style={{ backgroundColor: '#C0003D' }}
        >
          View All Newsletters
        </button>
      </div>
    </section>
  );
}