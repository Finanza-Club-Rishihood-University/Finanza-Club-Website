import React, { useState, useEffect } from 'react';
import { FileText, Calendar, ArrowRight, Download, Eye, Star } from 'lucide-react';
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
      <div className={`group relative w-full ${featured ? 'pt-[100%] md:pt-[70%]' : 'pt-[141.4%]'} bg-white rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer overflow-hidden border-r-4 border-b-4 border-gray-200`}>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col">

          {/* Thumbnail / Cover */}
          <div className="relative h-3/4 w-full bg-gray-100 overflow-hidden">
            {doc.thumbnail ? (
              <img
                src={doc.thumbnail}
                alt={doc.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                <FileText size={featured ? 96 : 64} opacity={0.5} />
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

            {/* Category/Featured Badge */}
            <div className="absolute top-4 left-4 flex gap-2">
              {featured && (
                <span className="px-3 py-1 bg-[#E85D04] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Star size={10} fill="white" /> New Arrival
                </span>
              )}
              <span className="px-3 py-1 bg-[#C0003D] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                {doc.category || 'Document'}
              </span>
            </div>

            {/* Featured Title Overlay (visible on image for featured cards) */}
            {featured && (
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-lg">
                  {doc.title}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2 drop-shadow-md">
                  {doc.description || doc.desc}
                </p>
              </div>
            )}
          </div>

          {/* Details Section (Simplified for featured, standard for others) */}
          <div className={`flex-1 ${featured ? 'bg-[#FAF9F6]' : 'bg-white'} p-6 flex flex-col justify-between relative`}>
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            {!featured && (
              <div>
                <div className="flex items-center gap-2 text-[#E85D04] text-xs font-bold mb-2 uppercase tracking-wide">
                  <Calendar size={12} />
                  <span>{doc.month || doc.date || 'Recent'}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#C0003D] transition-colors line-clamp-2">
                  {doc.title}
                </h3>
              </div>
            )}

            {/* Action Area */}
            <div className={`flex items-center justify-between ${featured ? 'h-full items-center' : 'mt-4 pt-4 border-t border-gray-100'}`}>
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-gray-800 group-hover:text-[#C0003D] transition-colors"
              >
                <span>{featured ? 'Read Full Issue' : 'Read Now'}</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-3 text-gray-400">
                <button className="hover:text-[#E85D04] transition-colors"><Eye size={18} /></button>
                <button className="hover:text-[#E85D04] transition-colors"><Download size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-24 flex justify-center items-center bg-[#FAF9F6]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#C0003D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-24 flex justify-center items-center bg-[#FAF9F6] text-center px-4">
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
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-32">
      {/* Header Section */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#C0003D] to-[#E85D04] text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6 shadow-lg cursor-default">
          Premium Archives
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C0003D] to-[#E85D04]">
            Finanza
          </span> Knowledge Hub
        </h1>
      </section>

      {/* HERO: New Arrivals */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#C0003D] pl-4 uppercase tracking-widest">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {latestNewsletter && (
            <div className="w-full">
              <DocumentCard doc={latestNewsletter} featured={true} />
            </div>
          )}
          {latestNote && (
            <div className="w-full">
              <DocumentCard doc={latestNote} featured={true} />
            </div>
          )}
          {/* Fallback if no specific split */}
          {!latestNewsletter && !latestNote && documents.slice(0, 2).map((doc, idx) => (
            <DocumentCard key={idx} doc={doc} featured={true} />
          ))}
        </div>
      </section>

      {/* Latest Newsletters */}
      {newsletters.length > 0 && (
        <section className="container mx-auto px-6 max-w-7xl mb-24">
          <div className="flex items-center justify-between mb-10 border-b-2 border-gray-200 pb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Latest Newsletters</h2>
            <button className="text-sm font-bold text-[#C0003D] hover:text-[#E85D04] uppercase tracking-wide transition-colors">See Archive</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsletters.map((doc, idx) => (
              <DocumentCard key={idx} doc={doc} />
            ))}
          </div>
        </section>
      )}

      {/* Event Notes Section */}
      {notes.length > 0 && (
        <section className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-10 border-b-2 border-gray-200 pb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Event Notes & Insights</h2>
            <button className="text-sm font-bold text-[#C0003D] hover:text-[#E85D04] uppercase tracking-wide transition-colors">View All Notes</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {notes.map((doc, idx) => (
              <DocumentCard key={idx} doc={doc} />
            ))}
          </div>
        </section>
      )}

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C0003D] via-[#E85D04] to-[#C0003D] z-50"></div>
    </div>
  );
}
