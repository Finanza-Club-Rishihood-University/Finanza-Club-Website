import React from 'react';
import { CgNotes } from "react-icons/cg";

function NotesSection() {
    const sessionNotes = [
        {
        title: "Learn To Earn Notes",
        subtitle: "Speakers: Nikhil Arya",
        // topic: "Topic 1: Outside Views",
        content: "From Background to Transparent Education and Banking. This paragraph includes everything needed to convey information clearly and effectively."
        },
        {
        title: "Retrieve Better Finance",
        content: "Detailed information about financial strategies and investment opportunities for students."
        }
    ];

    {/* Session Notes Section */}
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className='flex justify-center gap-1 items-center'>
                {/* This div contains the section's Heading & Icon */}
                <CgNotes className="w-8 h-8 text-[#C0003D]"/>
                <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Session notes</h2>
            </div>
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
    );
}

export default NotesSection;