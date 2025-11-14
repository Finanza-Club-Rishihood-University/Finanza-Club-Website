import React from 'react';

function HeroSection() {
    {/* Hero Section with Image */}
    return (
        <section className="relative h-[400px] md:h-[700px] bg-gray-300 mb-16">
            <img 
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=500&fit=crop" 
                alt="Finance classroom" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-5xl md:te xt-6xl font-bold">Finanza Club</h1>
            </div>
        </section>
    );
}

export default HeroSection;