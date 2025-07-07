// components/CreateFormDialog.jsx
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Create() {
  const [open, setOpen] = useState(false);
  const [userInput,setUserInput]=useState();
  const onCreate=()=>{
    console.log(userInput);
  }
  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
                   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        + Create Form
      </button>

      {/* The modal */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          {/* Centered panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <Dialog.Title className="text-lg font-semibold">New Form</Dialog.Title>

                {/* Your form goes here */}
                <form className="mt-4 space-y-4">
                  <input className="w-full rounded border p-2" placeholder="Write discription of Form" onChange={(event)=>{setUserInput(event.target.value)}} />
                  {/* …more fields… */}
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
                      onClick={()=>(onCreate())}
                      className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      Create
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
