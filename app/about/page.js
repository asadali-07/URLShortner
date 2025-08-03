import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center">
      <div className="max-w-2xl bg-purple-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Our URL Shortener</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our URL shortener app! Our service allows you to take long URLs and convert them into short, easy-to-share links. Whether you are sharing links on social media, in emails, or anywhere else, our tool makes it simple and efficient.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide a fast, reliable, and user-friendly URL shortening service. We prioritize your privacy and ensure that your data is secure with us.
        </p>
        <p className="text-gray-600">
          Thank you for choosing our service. We hope you find it useful and convenient!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;