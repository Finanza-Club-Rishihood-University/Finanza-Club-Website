import React from 'react';
import { FaNewspaper } from "react-icons/fa6";

function NewsletterSection() {
    {/* Latest Newsletter Section */}
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-96 rounded-lg"></div>
            
            <div>
                <div className='flex justify-center gap-2 items-center'>
                    {/* This div contains the section's Heading & Icon */}
                    <FaNewspaper className="w-8 h-8 text-[#C0003D]"/>
                    <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Newsletters</h2>
                </div>
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
    );
}

export default NewsletterSection;