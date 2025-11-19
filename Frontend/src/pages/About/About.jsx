export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#C0003D' }}>About Finanza</h2>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <p className="text-gray-700 text-lg mb-6">
            Finanza is a premier student-driven finance club dedicated to fostering financial literacy,
            promoting investment awareness, and nurturing entrepreneurial skills among students.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Founded in 2020, our club has grown to become one of the most respected finance organizations
            on campus, organizing impactful events, workshops, and competitions that bridge the gap
            between academic learning and real-world financial applications.
          </p>

          <p className="text-gray-700 text-lg">
            We believe in empowering the next generation of financial leaders through education,
            networking, and hands-on experience in various aspects of finance and economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white rounded-xl shadow-lg p-8" style={{ backgroundColor: '#C0003D' }}>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To equip students with essential financial knowledge and practical skills to make informed
              decisions in their personal and professional lives.
            </p>
          </div>

          <div className="text-white rounded-xl shadow-lg p-8" style={{ backgroundColor: '#E65C2A' }}>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To create a financially literate generation capable of contributing meaningfully to
              the global economy and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}