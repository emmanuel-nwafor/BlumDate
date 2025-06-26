import React from 'react';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 sm:h-96 bg-cover bg-center bg-[url(https://res.cloudinary.com/dbczfoqnc/image/upload/v1749845337/4b28601c830887a7f8ec2ba8ad92a5f3586b8c05_1_gzs0lt.jpg)]">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <Header />
          <h1 className="text-3xl md:text-4xl text-white font-bold mt-6">About us</h1>
        </div>
      </div>

      {/* About Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10 md:px-10">
        <div className="w-full md:w-1/2">
          <div
            className="rounded-xl bg-[url('/src/assets/about1.jpg')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify text-sm sm:text-base">
          <h2 className="font-bold text-xl">
             About Blumdate
          </h2>
          <span> 
            Blumdate brings singles together who are truly searching for meaningful relationships. Through 
            verified profiles and a welcoming community, we help you connect with real people ready for 
            lasting love.
          </span>

          <br /><br />

          <h2 className="font-bold text-xl">
            A kind of spark
          </h2>
          <span>
            What sets Blumdate apart is our commitment to connecting you with real, genuine people. 
            Every photo is verified to keep fake profiles out, ensuring a safer experience. Our matching goes 
            beyond surface level — we focus on shared values and interests to help you find partners who 
            truly fit you. Safety is a priority with 24/7 moderation and easy in-app reporting, giving you 
            peace of mind while you explore connections. To help you feel the chemistry early, we offer 
            video introductions so you can see and hear potential matches before chatting. It’s all designed 
            to help you build real, lasting relationship. 
          </span>
        </div>
      </div>

      {/* About Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 py-10 md:px-10">
        <div className="w-full md:w-1/2">
          <div
            className="rounded-xl bg-[url('src/assets/about2.jpg')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify text-sm sm:text-base">
        <h2 className="font-bold text-xl">
             Core Values
          </h2>
          <span>
            At Blumdate, we believe in the little things that make connections feel real—honest moments, 
            thoughtful conversations, and the quiet comfort of being seen. We know that finding someone 
            isn’t about perfection; it’s about feeling understood, welcomed, and open to something 
            meaningful. This space is for everyone, no matter where you’re from or who you love. Because 
            at the end of the day, we all just want something that feels right. 

            She didn’t expect much that day—just another scroll, another face. But there he was. Not flashy, 
            not rehearsed. Just real. Their first chat was about music, and somehow it turned into talking 
            until sunrise. It wasn’t instant magic, but it was easy. Familiar. Weeks passed. They shared 
            playlists, inside jokes, quiet thoughts. When they finally met, it felt like they’d known each other 
            for years. That’s how love begins sometimes—not loud, but steady. And it all started with one 
            quiet “hey.” 
          </span>
        </div>
      </div>

      {/* CTA + Footer */}
      <CTA />
      <Footer />
    </>
  );
}
