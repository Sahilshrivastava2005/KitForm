// FieldsEdit.jsx
import React, { Fragment, useState } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import { Edit, Trash2 } from "lucide-react";
import { themes } from "../assets/themes";

export default function FieldsEdit({
  defaultValue,
  onUpdate,
  deleteFields,
  themeStyles,                 // coming from parent
}) {
  /* ------------------------ state ------------------------ */
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(defaultValue?.fieldLabel || "");
  const [placeholder, setPlaceholder] = useState(
    defaultValue?.placeholder || ""
  );

  /* ---------------------- theme hook --------------------- */
  const t = themeStyles || themes.light; // graceful fallback

  /* --------------------- render -------------------------- */
  return (
    <div className="flex items-center gap-2">
      {/* ══════════════ EDIT (Popover) ══════════════ */}
      <Popover className="relative">
        <Popover.Button
          className="p-2 rounded transition hover:opacity-75"
          aria-label="Edit"
        >
          <Edit className="h-5 w-5" />
        </Popover.Button>

        <Popover.Panel
          className={`absolute right-0 z-10 mt-2 w-64 rounded-md border shadow-lg p-4 space-y-3 ${t.base}`}
        >
          <p className="text-sm font-semibold">Edit Field</p>

          {/* Label field */}
          <div className="flex flex-col space-y-1">
            <label className={`${t.label} text-xs`}>Label Name</label>
            <input
              type="text"
              className={`${t.input.field} placeholder:${t.input.placeholder} text-sm`}
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Enter label"
            />
          </div>

          {/* Placeholder field */}
          <div className="flex flex-col space-y-1">
            <label className={`${t.label} text-xs`}>Placeholder</label>
            <input
              type="text"
              className={`${t.input.field} placeholder:${t.input.placeholder} text-sm`}
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              placeholder="Enter placeholder"
            />
          </div>

          <button
            className={`${t.btn.primary} w-full text-sm`}
            onClick={() => onUpdate({ label, placeholder })}
          >
            Save
          </button>
        </Popover.Panel>
      </Popover>

      {/* ══════════════ DELETE (icon → dialog) ══════════════ */}
      <button
        type="button"
        aria-label="Delete"
        onClick={() => setOpen(true)}
        className="p-2 rounded transition hover:opacity-75"
      >
        <Trash2 className="h-5 w-5 text-red-500" />
      </button>

      {/* Confirm dialog */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          {/* Center wrapper */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full max-w-sm transform rounded-2xl shadow-xl transition-all p-6 ${t.base}`}
                >
                  <Dialog.Title className="text-lg font-medium">
                    Are you absolutely sure?
                  </Dialog.Title>

                  <p className={`${t.helper} mt-2`}>
                    This action can’t be undone. The item will be permanently
                    removed.
                  </p>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => setOpen(false)}
                      className={`${t.btn.secondary}`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        deleteFields();
                        setOpen(false);
                      }}
                      className="bg-red-600 text-white hover:bg-red-500 rounded-lg px-4 py-2 text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
