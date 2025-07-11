import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaRegCopy } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ShareDialog({ open, onClose, url }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Panel */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-semibold text-gray-900">
                    Share Your Form
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <IoClose className="w-6 h-6" />
                  </button>
                </div>

                {/* URL Input */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={url}
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    <FaRegCopy />
                    Copy
                  </button>
                </div>

               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
