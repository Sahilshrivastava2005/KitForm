import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';

export default function Create({ onFormCreated }) {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?._id;

  const onCreate = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User not logged in");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/api/ai/ask', {
        prompt: userInput,
        userId: userId,
      });

      if (res.data.success) {
        setOpen(false);
        setUserInput(''); // clear input
        if (onFormCreated) onFormCreated(); // 🔁 refresh forms list
      } else {
        alert('Form generation failed');
      }
    } catch (err) {
      console.error('API Error:', err);
      alert('Error generating form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        + Create Form
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <Dialog.Title className="text-lg font-semibold">New Form</Dialog.Title>

                <form className="mt-4 space-y-4" onSubmit={onCreate}>
                  <input
                    type="text"
                    required
                    className="w-full rounded border p-2"
                    placeholder="Write description of Form"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                  />

                  <div className="flex justify-end gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      {loading ? 'Creating...' : 'Create'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
