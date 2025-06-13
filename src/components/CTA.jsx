import React from 'react';

export default function CTA() {
  return (
    <section className="p-16 bg-gray-100 text-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Ready to meet someone amazing?</h2>
      <div className="flex justify-center space-x-4">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
        </a>
      </div>
    </section>
  );
}