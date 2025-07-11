import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { LuBot } from "react-icons/lu";

export default function HowItWorks() {
  return (
    <section className="text-center py-16 bg-green-300">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consectetur
        saepe laborum.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white border rounded-lg shadow-sm p-6 text-left hover:shadow-md transition duration-300">
          <LuBot size={28} className="mb-4 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Write prompt for your form
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-lg shadow-sm p-6 text-left hover:shadow-md transition duration-300">
          <FaRegEdit size={28} className="mb-4 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Edit Your Form
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-lg shadow-sm p-6 text-left hover:shadow-md transition duration-300">
          <TbShare3 size={28} className="mb-4 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Share & Start Accepting Responses
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
