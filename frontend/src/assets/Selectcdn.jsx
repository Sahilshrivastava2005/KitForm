import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronsUpDown, Check } from 'lucide-react';

// helper: "dark" → "Dark"
const pretty = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Selectcdn({
  options = [],      // array of strings
  value,             // string | null
  onChange,          // (newValue: string) => void
  placeholder = 'Select an option',
}) {
  return (
    <div className="w-full max-w-sm">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            {/* Trigger button */}
            <Listbox.Button className="flex w-full items-center justify-between rounded-2xl border border-gray-300 bg-white p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span>{value ? pretty(value) : placeholder}</span>
              <ChevronsUpDown className="h-4 w-4 opacity-50" />
            </Listbox.Button>

            {/* Dropdown */}
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-50 mt-2 w-full
                           max-h-60 overflow-y-auto scroll-smooth    /* smooth scroll */
                           rounded-xl border bg-white text-gray-900 shadow-md
                           focus:outline-none"
              >
                {options.map((opt) => (
                  <Listbox.Option
                    key={opt}
                    value={opt}
                    className={({ active }) =>
                      `relative cursor-pointer select-none px-4 py-2 text-sm ${
                        active ? 'bg-blue-600 text-white' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block ${selected ? 'font-medium' : 'font-normal'}`}>
                          {pretty(opt)}
                        </span>
                        {selected && (
                          <span
                            className={`absolute inset-y-0 right-4 flex items-center ${
                              active ? 'text-white' : 'text-blue-600'
                            }`}
                          >
                            <Check className="h-4 w-4" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
