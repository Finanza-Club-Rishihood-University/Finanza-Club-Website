import React from 'react';
import { MdEvent } from "react-icons/md";

function EventsSection() {
    {/* Events Section */}

    // const eventCards = [
    //   { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    //   { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    //   { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    //   { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    //   { title: "Eget risus bibendum", desc: "Eget risus bibendum ac nam quam quam sollicitudin velit. Tempor vermellis vitally facilit." },
    // ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className='flex justify-center gap-1 items-center'>
                {/* This div contains the section's Heading & Icon */}
                <MdEvent className="w-8 h-8 text-[#C0003D]"/>
                <h2 className="text-4xl font-bold text-[#C0003D] text-center mb-3">Events</h2>
            </div>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Eget risus bibendum justo enim quam sollicitudin turpis. Semper convallis tellus facilisi feugiat imperdiet luctus. Eget facilisis morbi sit placerat placerat.
            </p>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
            {/* First Row - 3 equal cards */}
            <div className="group relative rounded-3xl border-2 border-gray-800 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#C0003D] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white rounded-3xl"></div>
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
    );
}

export default EventsSection;