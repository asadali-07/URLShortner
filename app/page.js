"use client"
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image"; 
import Typed from 'typed.js';
import { useEffect, useRef } from'react';

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  const el = useRef(null);
   useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Fast and Reliable','Privacy-Focused','Secure and Simple',],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className="bg-purple-100">
      <section className="grid lg:grid-cols-2 grid-cols-1 h-screen px-6 lg:px-52 py-12 bg-gradient-to-r from-gray-100 to-white">
        <div className="flex flex-col gap-4  justify-center  md:p-0">
          <p
            className={`text-2xl text-purple-500 md:text-3xl font-bold ${poppins.className}`}
          >
            The best URL shortener in the Market
          </p>
          <p className="text-sm  md:text-base">
            We are the most straightforward URL Shortener in the world. Most of
            the URL shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener.<br/>
            <span className=" text-lg text-purple-500 mb-3 font-semibold   decoration-primary" ref={el}></span>
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
          <Link href="/shorten">
  <button className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-lg p-4 py-2 font-bold text-white">
    Try Now
  </button>
</Link>

<Link href="/github" target="_blank">
  <button className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-lg p-4 py-2 font-bold text-white">
    GitHub
  </button>
</Link>

          </div>
        </div>
        <div className="flex justify-center md:justify-start relative">
          <Image
            className="mix-blend-darken p-4"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
      <section className="py-20 bg-white text-center">
        <p className="text-3xl font-bold  text-purple-500 mb-6">Features</p>
        <div className="flex flex-row flex-wrap justify-around items-center my-5">
          <div className="flex flex-col mx-16 justify-center items-center">
            <Image
              alt="an Image of a vector"
              src={"/easy.webp"}
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold text-purple-500 my-3">Simple and Easy</h3>
            <p>Shorten URLs with a few clicks, no hassle</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="an Image of a vector"
              src={"/privacy.webp"}
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold my-3 text-purple-500">Privacy First</h3>
            <p>No tracking or login required—your data is safe.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="an Image of a vector"
              src={"/links.webp"}
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold my-3 text-purple-500">Customizable Links</h3>
            <p>Make your shortened links memorable with custom aliases.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white text-center">
        <p className="text-purple-500 text-3xl font-bold mb-6">
          What Our Users Say
        </p>
        \
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <p className="italic text-lg">
              &quote;The best URL shortener I have used. Simple and easy to use!&quote;
            </p>
            <p className="mt-4 font-semibold text-gray-800">Rohan Das</p>
            <p className="text-sm text-gray-500">Startup Owner</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <p className="italic text-lg">
              &quote;I love the customization options and the privacy features.&quote;
            </p>
            <p className="mt-4 font-semibold text-gray-800">Izhan Ahmed</p>
            <p className="text-sm text-gray-500">Freelancer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
