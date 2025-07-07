import React from 'react'

export default function SideBar() {
  return (
   <div>
  <div className="flex flex-col w-64 h-screen border-e border-gray-100 bg-white">
    {/* ── Logo (static) ─────────────────────────────────────────────── */}
    <div className="px-4 py-6">
      <img src="/photos/Kitform.png" width={50} className="rounded-full" alt="Logo" />
    </div>

    {/* ── Scrollable Nav ───────────────────────────────────────────── */}
    <div className="flex-1 px-4 overflow-y-auto">
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            My Forms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Responses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Analytics
          </a>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium">Account</span>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                {/* chevron icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    {/* ── Storage & CTA (fixed) ────────────────────────────────────── */}
    <div className="px-4 py-6 border-t border-gray-100">
      {/* Progress Bar */}
      <p className="text-sm font-medium text-gray-700 mb-1">Storage Used</p>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div className="h-3 bg-blue-600 rounded-full" style={{ width: '60%' }} />
      </div>
      <p className="text-xs text-gray-500 mt-1">60% of 100 used</p>

      {/* Create Form Button */}
      <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
        + Create Form
      </button>
    </div>

    {/* ── Profile (fixed bottom) ───────────────────────────────────── */}
    <div className="border-t border-gray-100">
      <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-10 rounded-full object-cover"
        />
        <div>
          <p className="text-xs">
            <strong className="block font-medium">Eric Frusciante</strong>
            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div>
  </div>
</div>


  )
}
