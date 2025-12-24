import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, ArrowRight, Download, Eye } from 'lucide-react';
import { getDocuments } from '../../api/documentsApi';

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await getDocuments();
        const data = response.data;
        setDocuments(data);

        // Split data into categories
        const fetchedNewsletters = data.filter(d => d.type === 'newsletter');
        const fetchedNotes = data.filter(d => d.type === 'note');

        setNewsletters(fetchedNewsletters);
        setNotes(fetchedNotes);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Unable to load documents.");
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const DocumentCard = ({ doc, featured = false }) => {
    return (
      <div className={`bg-[#FFF9F0] ${featured ? 'p-8' : 'p-6'} rounded-[32px] hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
        {/* Thumbnail / Cover */}
        <div className={`${featured ? 'h-80' : 'h-56'} mb-6 overflow-hidden rounded-2xl relative`}>
          {doc.thumbnail ? (
            <img
              src={doc.thumbnail}
              alt={doc.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
              <FileText size={featured ? 96 : 64} opacity={0.5} />
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1 bg-[#C0003D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
              {doc.category || doc.type || 'Document'}
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div>
          <div className="flex items-center gap-2 text-[#C0003D] text-xs font-bold mb-3 uppercase tracking-wide">
            <Calendar size={14} />
            <span>{doc.month || doc.date || 'Recent'}</span>
          </div>

          <h3 className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold text-[#C0003D] mb-3 leading-tight group-hover:text-[#a00033] transition-colors`}>
            {doc.title}
          </h3>

          {(featured || doc.description || doc.desc) && (
            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">
              {doc.description || doc.desc}
            </p>
          )}

          {/* Action Area */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[#C0003D] group-hover:text-[#a00033] transition-colors"
            >
              <span>{featured ? 'Read Full Issue' : 'Read Now'}</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-3 text-gray-400">
              <button className="hover:text-[#C0003D] transition-colors">
                <Eye size={18} />
              </button>
              <button className="hover:text-[#C0003D] transition-colors">
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-24 flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#C0003D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-24 flex justify-center items-center bg-white text-center px-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Unavailable</h2>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  // Get latest items for Hero
  const latestNewsletter = newsletters.length > 0 ? newsletters[0] : null;
  const latestNote = notes.length > 0 ? notes[0] : null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C0003D] mb-4">Documents</h2>
          <div className="h-1 w-20 bg-[#C0003D] mb-6"></div>
          <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
            Explore our collection of newsletters, event notes, and insightful documents. Stay updated with the latest financial trends, club activities, and valuable resources curated by Finanza.
          </p>
        </div>
      </section>

      {/* New Arrivals */}
      {(latestNewsletter || latestNote) && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <h3 className="text-3xl font-bold text-[#C0003D] mb-8">New Arrivals</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {latestNewsletter && (
              <DocumentCard doc={latestNewsletter} featured={true} />
            )}
            {latestNote && (
              <DocumentCard doc={latestNote} featured={true} />
            )}
            {/* Fallback if no specific split */}
            {!latestNewsletter && !latestNote && documents.slice(0, 2).map((doc, idx) => (
              <DocumentCard key={idx} doc={doc} featured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Newsletters */}
      {newsletters.length > 0 && (
        <section className="bg-[#FFF9F0] py-16 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#C0003D] mb-2">Latest Newsletters</h2>
                <p className="text-gray-600 max-w-2xl">
                  Stay informed with our monthly newsletter, "The Fin-Z", covering market trends, financial insights, and club updates.
                </p>
              </div>
              <Link to="/documents/newsletters" className="hidden md:block bg-[#C0003D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#a00033] transition-colors">
                View All Newsletters
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsletters.map((doc, idx) => (
                <DocumentCard key={idx} doc={doc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Notes Section */}
      {notes.length > 0 && (
        <section className="bg-[#FFF9F0] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#C0003D] mb-2">Event Notes & Insights</h2>
                <p className="text-gray-600 max-w-2xl">
                  Dive into detailed notes and key takeaways from our exclusive events, workshops, and guest sessions.
                </p>
              </div>
              <Link to="/documents/notes" className="hidden md:block bg-[#C0003D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#a00033] transition-colors">
                View All Notes
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {notes.map((doc, idx) => (
                <DocumentCard key={idx} doc={doc} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
