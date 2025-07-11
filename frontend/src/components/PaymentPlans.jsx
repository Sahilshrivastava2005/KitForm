import React from "react";

export default function PaymentPlans() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h1>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Basic Plan */}
        <div className="p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 border bg-white border-transparent hover:border-indigo-500 hover:bg-indigo-50">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Basic</h2>
            <p className="text-xl font-bold mb-4">Rupees 30/mo</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ Access to basic features like 10k forms</li>
              <li>✅ Email support</li>
              <li>✅ Single user</li>
            </ul>
          </div>
          <button className="w-full py-2 rounded-xl font-semibold bg-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 border bg-white border-transparent hover:border-indigo-500 hover:bg-indigo-50">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-xl font-bold mb-4">Rupees 129/mo</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ Everything in Basic like 1M forms</li>
              <li>✅ Advanced analytics</li>
              <li>✅ Priority support</li>
              <li>✅ Team access</li>
            </ul>
          </div>
          <button className="w-full py-2 rounded-xl font-semibold bg-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 border bg-white border-transparent hover:border-indigo-500 hover:bg-indigo-50">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-xl font-bold mb-4">Custom</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✅ All Pro features</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ Custom integrations</li>
              <li>✅ 24/7 Premium support</li>
            </ul>
          </div>
          <button className="w-full py-2 rounded-xl font-semibold bg-gray-200 text-gray-800 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
