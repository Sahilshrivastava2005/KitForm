import React, { useEffect, useState } from "react";
import Selectcdn from "../assets/Selectcdn"; // adjust path!
import formbg from "../assets/formbg";

const themeOptions = [
  "light", "dark", "forest", "cyberpunk", "pastel", "aqua", "lofi", "night", "winter",
  "bumblebee", "emerald", "retro", "synthwave", "valentine", "cupcake", "garden",
  "halloween", "coffee", "dracula", "ocean", "lavender", "neutral", "luxe", "gameOfThrones",
];

export default function ControllerForm({ selectedTheme, setselectedTheme, setselectedBg, selectedBg }) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (selectedTheme) console.log("Selected Theme:", selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if (selectedBg) console.log("Selected Background:", selectedBg);
  }, [selectedBg]);

  const entries = Object.entries(formbg);
  const visibleEntries = showAll ? entries : entries.slice(0, 9);

  return (
    <div className="gap-y-0.5">
      {/* Theme selector */}
      <div className="max-w-sm w-full space-y-4 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold">Choose Theme</h2>
        <Selectcdn
          options={themeOptions}
          value={selectedTheme}
          onChange={setselectedTheme}
          placeholder="Select a theme"
        />
        {selectedTheme && (
          <p className="text-sm">
            Selected: <strong>{selectedTheme}</strong>
          </p>
        )}
      </div>

      {/* Background selector with toggle */}
      <div className="max-w-sm w-full space-y-4 p-6 bg-white rounded-xl shadow-lg mt-4">
        <h1 className="text-lg font-semibold">Background</h1>
        <div className="grid grid-cols-3 gap-2">
          {visibleEntries.map(([themeName, className], index) => (
            <div
              key={themeName + index}
              className={`w-full h-[50px] rounded-lg ${className} ${
                selectedBg === themeName ? "ring-4 ring-blue-500" : ""
              } hover:border-red-900 hover:border-4 cursor-pointer`}
              title={themeName}
              onClick={() => setselectedBg(themeName)}
            />
          ))}
        </div>

        {entries.length > 6 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-2 text-sm text-blue-600 hover:underline w-full text-center"
          >
            {showAll ? "Show less ▲" : "Show more ▼"}
          </button>
        )}
      </div>
    </div>
  );
}