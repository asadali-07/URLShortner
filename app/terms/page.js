import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-100 my-16 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-purple-500">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-purple-500">Use of the Website</h2>
      <p className="mb-4">
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-purple-500">Privacy Policy</h2>
      <p className="mb-4">
        Please refer to our Privacy Policy for information on how we collect, use, and disclose personally identifiable information from our users.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-purple-500">Governing Law</h2>
      <p className="mb-4">
        Your use of this website and any dispute arising out of such use of the website is subject to the laws of [Your Country/State].
      </p>
      <p className="text-sm text-gray-600">
        Last updated: [11-11-2024]
      </p>
    </div>
  );
}

export default TermsAndConditions;