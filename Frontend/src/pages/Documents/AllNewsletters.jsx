import React, { useState, useEffect } from 'react';
import { FileText, Calendar, ArrowRight, Download, Eye, Search, X, CalendarDays } from 'lucide-react';
import { getDocuments } from '../../api/documentsApi';

export default function AllNewsletters() {
    const [allNewsletters, setAllNewsletters] = useState([]);
    const [filteredNewsletters, setFilteredNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter states
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedDate, setSelectedDate] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                const response = await getDocuments();
                const newsletters = response.data.filter(d => d.type === 'newsletter');
                setAllNewsletters(newsletters);
                setFilteredNewsletters(newsletters);

                // Extract unique categories
                const uniqueCategories = [...new Set(newsletters.map(n => n.category).filter(Boolean))];
                setCategories(uniqueCategories);

                setLoading(false);
            } catch (err) {
                console.error("Error fetching newsletters:", err);
                setError("Unable to load newsletters.");
                setLoading(false);
            }
        };

        fetchNewsletters();
    }, []);

    // Apply filters whenever filter states change
    useEffect(() => {
        let results = [...allNewsletters];

        // Search filter
        if (searchQuery) {
            results = results.filter(newsletter =>
                newsletter.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                newsletter.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                newsletter.desc?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory !== 'all') {
            results = results.filter(newsletter => newsletter.category === selectedCategory);
        }

        // Single date filter
        if (selectedDate) {
            results = results.filter(newsletter => {
                const newsletterDate = new Date(newsletter.date || newsletter.month).toDateString();
                const filterDate = new Date(selectedDate).toDateString();
                return newsletterDate === filterDate;
            });
        }

        // Sorting
        results.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.date || b.month) - new Date(a.date || a.month);
                case 'oldest':
                    return new Date(a.date || a.month) - new Date(b.date || b.month);
                case 'a-z':
                    return a.title.localeCompare(b.title);
                case 'z-a':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        setFilteredNewsletters(results);
    }, [searchQuery, selectedCategory, sortBy, selectedDate, allNewsletters]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSortBy('newest');
        setSelectedDate('');
    };

    const DocumentCard = ({ doc }) => (
        <div className="bg-[#FFF9F0] p-6 rounded-[32px] hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <div className="h-56 mb-6 overflow-hidden rounded-2xl relative">
                {doc.thumbnail ? (
                    <img
                        src={doc.thumbnail}
                        alt={doc.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                        <FileText size={64} opacity={0.5} />
                    </div>
                )}

                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-[#C0003D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                        {doc.category || 'Newsletter'}
                    </span>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 text-[#C0003D] text-xs font-bold mb-3 uppercase tracking-wide">
                    <Calendar size={14} />
                    <span>{doc.month || doc.date || 'Recent'}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#C0003D] mb-3 leading-tight group-hover:text-[#a00033] transition-colors">
                    {doc.title}
                </h3>

                {(doc.description || doc.desc) && (
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">
                        {doc.description || doc.desc}
                    </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[#C0003D] group-hover:text-[#a00033] transition-colors"
                    >
                        <span>Read Now</span>
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

    return (
        <div className="min-h-screen bg-white pt-24 pb-32">
            {/* Header */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#C0003D] mb-4">All Newsletters</h1>
                    <div className="h-1 w-20 bg-[#C0003D] mb-6"></div>
                    <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
                        Browse our complete collection of newsletters. Use the filters below to find specific issues.
                    </p>
                </div>
            </section>

            {/* Filters Section - Improved UI */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    {/* Row 1: Search and Sort */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search newsletters by title or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#C0003D] focus:ring-2 focus:ring-[#C0003D]/20 focus:outline-none transition-all"
                            />
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-6 py-3 rounded-full border border-gray-300 focus:border-[#C0003D] focus:ring-2 focus:ring-[#C0003D]/20 focus:outline-none transition-all bg-white cursor-pointer font-medium text-gray-700"
                        >
                            <option value="newest">📅 Newest First</option>
                            <option value="oldest">📅 Oldest First</option>
                            <option value="a-z">🔤 Title: A-Z</option>
                            <option value="z-a">🔤 Title: Z-A</option>
                        </select>
                    </div>

                    {/* Row 2: Category, Date, Clear */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-6 py-3 rounded-full border border-gray-300 focus:border-[#C0003D] focus:ring-2 focus:ring-[#C0003D]/20 focus:outline-none transition-all bg-white cursor-pointer font-medium text-gray-700"
                        >
                            <option value="all">📂 All Categories</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        <div className="relative md:col-span-2">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#C0003D] focus:ring-2 focus:ring-[#C0003D]/20 focus:outline-none transition-all font-medium text-gray-700"
                                placeholder="Select a date"
                            />
                        </div>

                        <button
                            onClick={clearFilters}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all"
                        >
                            <X size={18} />
                            Clear All
                        </button>
                    </div>

                    {/* Results Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-600">
                            Showing <span className="text-[#C0003D] font-bold">{filteredNewsletters.length}</span> of <span className="font-bold">{allNewsletters.length}</span> newsletters
                        </p>
                        {(searchQuery || selectedCategory !== 'all' || selectedDate) && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-[#C0003D] hover:text-[#a00033] font-semibold transition-colors"
                            >
                                Reset filters
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-12">
                {filteredNewsletters.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredNewsletters.map((newsletter, idx) => (
                            <DocumentCard key={idx} doc={newsletter} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText className="text-gray-400" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No newsletters found</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            We couldn't find any newsletters matching your current filters. Try adjusting your search or filters.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors shadow-lg hover:shadow-xl"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
