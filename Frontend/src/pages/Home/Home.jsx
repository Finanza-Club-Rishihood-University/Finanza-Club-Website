import React from 'react';
  import HeroSection from './HeroSection';
  import AboutSection from './AboutSection';
  import EventsSection from './EventsSection';
  import NotesSection from './NotesSection';
  import NewsletterSection from './NewsletterSection';
  import MediaSection from './MediaSection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <NotesSection />
      <NewsletterSection />
      <MediaSection />
    </div>
  );
}