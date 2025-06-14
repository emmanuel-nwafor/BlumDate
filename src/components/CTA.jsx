import React from 'react';
import AppStores from './AppStores';

export default function CTA() {
  return (
    <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 custom-font animate-fade-in-up">
                Ready to meet someone amazing?
            </h2>
            <AppStores />
        </div>
    </section>
  );
}