import React from 'react';
import { FaPhotoVideo } from "react-icons/fa";

function MediaSection() {
    {/* Media | Reels | News Section */}

    const mediaCards = [
        { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
        { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
        { desc: "Lorem ipsum dolor sit amet consectetur. Nec sollicitudin feugiat sed vel sit. Rhoncus nec in." },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className='flex justify-center gap-2 items-center'>
                {/* This div contains the section's Heading & Icon */}
                <FaPhotoVideo className="w-8 h-8 text-[#C0003D]"/>
                <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Media / News</h2>
            </div>
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
    );
}

export default MediaSection;