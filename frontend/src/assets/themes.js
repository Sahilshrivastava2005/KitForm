// add‑onThemes.js  ▸  append or spread‑merge into your main `themes` object
export const themes = {
/* ───────────────────────────── LIGHT ───────────────────────────── */
  light: {
    /* container / page */
    base: "bg-white text-gray-900",
    form: "space-y-6",

    /* typographic */
    label: "block text-sm font-medium text-gray-700",
    helper: "text-sm text-gray-600",
    error: "text-sm text-red-600",

    /* inputs */
    input: {
      field:
        "block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 " +
        "focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
      placeholder: "text-gray-500",
    },
    select:
      "block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 " +
      "focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
    textarea:
      "block w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] text-gray-900 placeholder-gray-500 " +
      "focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",

    /* checks */
    checkbox:
      "h-4 w-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:outline-none",
    radio:
      "h-4 w-4 text-blue-600 bg-white border-gray-300 rounded-full focus:ring-blue-500 focus:outline-none",

    /* buttons */
    btn: {
      primary:
        "bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── DARK ────────────────────────────── */
  dark: {
    base: "bg-gray-900 text-white",
    form: "space-y-6",

    label: "block text-sm font-medium text-gray-300",
    helper: "text-sm text-gray-400",
    error: "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 " +
        "focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",
      placeholder: "text-gray-400",
    },
    select:
      "block w-full border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white " +
      "focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",
    textarea:
      "block w-full border border-gray-700 rounded-lg px-4 py-2 min-h-[120px] bg-gray-800 text-white placeholder-gray-400 " +
      "focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",

    checkbox:
      "h-4 w-4 text-gray-200 bg-gray-800 border-gray-600 rounded focus:ring-gray-500 focus:outline-none",
    radio:
      "h-4 w-4 text-gray-200 bg-gray-800 border-gray-600 rounded-full focus:ring-gray-500 focus:outline-none",

    btn: {
      primary:
        "bg-gray-700 text-white hover:bg-gray-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-gray-600 text-gray-200 hover:bg-gray-500 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── FOREST ───────────────────────────── */
  forest: {
    base: "bg-green-900 text-green-100",
    form: "space-y-6",

    label: "block text-sm font-medium text-green-200",
    helper: "text-sm text-green-300",
    error: "text-sm text-red-400",

    input: {
      field:
        "block w-full border border-green-700 rounded-lg px-4 py-2 bg-green-800 text-green-100 placeholder-green-300 " +
        "focus:outline-none focus:ring-4 focus:ring-green-700 focus:border-green-500",
      placeholder: "text-green-300",
    },
    select:
      "block w-full border border-green-700 rounded-lg px-4 py-2 bg-green-800 text-green-100 " +
      "focus:outline-none focus:ring-4 focus:ring-green-700 focus:border-green-500",
    textarea:
      "block w-full border border-green-700 rounded-lg px-4 py-2 min-h-[120px] bg-green-800 text-green-100 placeholder-green-300 " +
      "focus:outline-none focus:ring-4 focus:ring-green-700 focus:border-green-500",

    checkbox:
      "h-4 w-4 text-green-600 bg-green-800 border-green-600 rounded focus:ring-green-500 focus:outline-none",
    radio:
      "h-4 w-4 text-green-600 bg-green-800 border-green-600 rounded-full focus:ring-green-500 focus:outline-none",

    btn: {
      primary:
        "bg-green-600 text-white hover:bg-green-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-green-700 text-green-100 hover:bg-green-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ────────────────────────── CYBERPUNK ──────────────────────────── */
  cyberpunk: {
    base: "bg-black text-pink-500",
    form: "space-y-6",

    label: "block text-sm font-medium text-pink-400",
    helper: "text-sm text-pink-400",
    error: "text-sm text-yellow-400",

    input: {
      field:
        "block w-full border border-pink-600 rounded-lg px-4 py-2 bg-black text-pink-500 placeholder-pink-600 " +
        "focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",
      placeholder: "text-pink-600",
    },
    select:
      "block w-full border border-pink-600 rounded-lg px-4 py-2 bg-black text-pink-500 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",
    textarea:
      "block w-full border border-pink-600 rounded-lg px-4 py-2 min-h-[120px] bg-black text-pink-500 placeholder-pink-600 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",

    checkbox:
      "h-4 w-4 text-yellow-400 bg-black border-pink-600 rounded focus:ring-yellow-400 focus:outline-none",
    radio:
      "h-4 w-4 text-yellow-400 bg-black border-pink-600 rounded-full focus:ring-yellow-400 focus:outline-none",

    btn: {
      primary:
        "bg-yellow-400 text-black hover:bg-yellow-300 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-pink-600 text-pink-100 hover:bg-pink-500 rounded-lg px-4 py-2 transition-colors",
    },
  },
  /* ───────────────────────────── PASTEL ──────────────────────────── */
  pastel: {
    base: "bg-pink-100 text-pink-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-pink-700",
    helper: "text-sm text-pink-600",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-pink-50 text-pink-900 " +
        "placeholder-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
      placeholder: "text-pink-500",
    },
    select:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-pink-50 text-pink-900 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
    textarea:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 min-h-[120px] bg-pink-50 text-pink-900 " +
      "placeholder-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",

    checkbox:
      "h-4 w-4 text-pink-600 bg-pink-50 border-pink-300 rounded focus:ring-pink-500 focus:outline-none",
    radio:
      "h-4 w-4 text-pink-600 bg-pink-50 border-pink-300 rounded-full focus:ring-pink-500 focus:outline-none",

    btn: {
      primary:
        "bg-pink-500 text-white hover:bg-pink-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-pink-200 text-pink-900 hover:bg-pink-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────────  AQUA  ──────────────────────────── */
  aqua: {
    base: "bg-cyan-100 text-cyan-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-cyan-700",
    helper: "text-sm text-cyan-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-cyan-300 rounded-lg px-4 py-2 bg-cyan-50 text-cyan-900 " +
        "placeholder-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500",
      placeholder: "text-cyan-500",
    },
    select:
      "block w-full border border-cyan-300 rounded-lg px-4 py-2 bg-cyan-50 text-cyan-900 " +
      "focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500",
    textarea:
      "block w-full border border-cyan-300 rounded-lg px-4 py-2 min-h-[120px] bg-cyan-50 text-cyan-900 " +
      "placeholder-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500",

    checkbox:
      "h-4 w-4 text-cyan-600 bg-cyan-50 border-cyan-300 rounded focus:ring-cyan-500 focus:outline-none",
    radio:
      "h-4 w-4 text-cyan-600 bg-cyan-50 border-cyan-300 rounded-full focus:ring-cyan-500 focus:outline-none",

    btn: {
      primary:
        "bg-cyan-500 text-white hover:bg-cyan-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-cyan-200 text-cyan-900 hover:bg-cyan-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────────  LOFI  ──────────────────────────── */
  lofi: {
    base: "bg-gray-100 text-gray-800",
    form: "space-y-6",

    label:  "block text-sm font-medium text-gray-700",
    helper: "text-sm text-gray-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-gray-800 " +
        "placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:border-gray-500",
      placeholder: "text-gray-500",
    },
    select:
      "block w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 text-gray-800 " +
      "focus:outline-none focus:ring-4 focus:ring-gray-200 focus:border-gray-500",
    textarea:
      "block w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] bg-gray-50 text-gray-800 " +
      "placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:border-gray-500",

    checkbox:
      "h-4 w-4 text-gray-700 bg-gray-50 border-gray-300 rounded focus:ring-gray-500 focus:outline-none",
    radio:
      "h-4 w-4 text-gray-700 bg-gray-50 border-gray-300 rounded-full focus:ring-gray-500 focus:outline-none",

    btn: {
      primary:
        "bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────────  NIGHT  ─────────────────────────── */
  night: {
    base: "bg-gray-800 text-gray-200",
    form: "space-y-6",

    label:  "block text-sm font-medium text-gray-300",
    helper: "text-sm text-gray-400",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-700 text-gray-200 " +
        "placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",
      placeholder: "text-gray-400",
    },
    select:
      "block w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-700 text-gray-200 " +
      "focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",
    textarea:
      "block w-full border border-gray-600 rounded-lg px-4 py-2 min-h-[120px] bg-gray-700 text-gray-200 " +
      "placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:border-gray-500",

    checkbox:
      "h-4 w-4 text-gray-300 bg-gray-700 border-gray-600 rounded focus:ring-gray-500 focus:outline-none",
    radio:
      "h-4 w-4 text-gray-300 bg-gray-700 border-gray-600 rounded-full focus:ring-gray-500 focus:outline-none",

    btn: {
      primary:
        "bg-gray-600 text-white hover:bg-gray-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-gray-500 text-gray-200 hover:bg-gray-400 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── WINTER ──────────────────────────── */
  winter: {
    base: "bg-blue-50 text-blue-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-blue-700",
    helper: "text-sm text-blue-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-blue-300 rounded-lg px-4 py-2 bg-white text-blue-900 " +
        "placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
      placeholder: "text-blue-500",
    },
    select:
      "block w-full border border-blue-300 rounded-lg px-4 py-2 bg-white text-blue-900 " +
      "focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
    textarea:
      "block w-full border border-blue-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-blue-900 " +
      "placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",

    checkbox:
      "h-4 w-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:outline-none",
    radio:
      "h-4 w-4 text-blue-600 bg-white border-blue-300 rounded-full focus:ring-blue-500 focus:outline-none",

    btn: {
      primary:
        "bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-blue-200 text-blue-900 hover:bg-blue-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── BUMBLEBEE ────────────────────────── */
  bumblebee: {
    base: "bg-yellow-100 text-yellow-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-yellow-800",
    helper: "text-sm text-yellow-700",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-yellow-300 rounded-lg px-4 py-2 bg-yellow-50 text-yellow-900 " +
        "placeholder-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500",
      placeholder: "text-yellow-600",
    },
    select:
      "block w-full border border-yellow-300 rounded-lg px-4 py-2 bg-yellow-50 text-yellow-900 " +
      "focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500",
    textarea:
      "block w-full border border-yellow-300 rounded-lg px-4 py-2 min-h-[120px] bg-yellow-50 text-yellow-900 " +
      "placeholder-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500",

    checkbox:
      "h-4 w-4 text-yellow-600 bg-yellow-50 border-yellow-300 rounded focus:ring-yellow-500 focus:outline-none",
    radio:
      "h-4 w-4 text-yellow-600 bg-yellow-50 border-yellow-300 rounded-full focus:ring-yellow-500 focus:outline-none",

    btn: {
      primary:
        "bg-yellow-500 text-yellow-900 hover:bg-yellow-400 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-yellow-300 text-yellow-900 hover:bg-yellow-400 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── EMERALD ─────────────────────────── */
  emerald: {
    base: "bg-emerald-900 text-emerald-100",
    form: "space-y-6",

    label:  "block text-sm font-medium text-emerald-200",
    helper: "text-sm text-emerald-300",
    error:  "text-sm text-red-400",

    input: {
      field:
        "block w-full border border-emerald-700 rounded-lg px-4 py-2 bg-emerald-800 text-emerald-100 " +
        "placeholder-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-700 focus:border-emerald-500",
      placeholder: "text-emerald-300",
    },
    select:
      "block w-full border border-emerald-700 rounded-lg px-4 py-2 bg-emerald-800 text-emerald-100 " +
      "focus:outline-none focus:ring-4 focus:ring-emerald-700 focus:border-emerald-500",
    textarea:
      "block w-full border border-emerald-700 rounded-lg px-4 py-2 min-h-[120px] bg-emerald-800 text-emerald-100 " +
      "placeholder-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-700 focus:border-emerald-500",

    checkbox:
      "h-4 w-4 text-emerald-600 bg-emerald-800 border-emerald-600 rounded focus:ring-emerald-500 focus:outline-none",
    radio:
      "h-4 w-4 text-emerald-600 bg-emerald-800 border-emerald-600 rounded-full focus:ring-emerald-500 focus:outline-none",

    btn: {
      primary:
        "bg-emerald-600 text-white hover:bg-emerald-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-emerald-700 text-emerald-100 hover:bg-emerald-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── RETRO ───────────────────────────── */
  retro: {
    base: "bg-orange-50 text-orange-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-orange-700",
    helper: "text-sm text-orange-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-orange-300 rounded-lg px-4 py-2 bg-white text-orange-900 " +
        "placeholder-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500",
      placeholder: "text-orange-500",
    },
    select:
      "block w-full border border-orange-300 rounded-lg px-4 py-2 bg-white text-orange-900 " +
      "focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500",
    textarea:
      "block w-full border border-orange-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-orange-900 " +
      "placeholder-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500",

    checkbox:
      "h-4 w-4 text-orange-600 bg-white border-orange-300 rounded focus:ring-orange-500 focus:outline-none",
    radio:
      "h-4 w-4 text-orange-600 bg-white border-orange-300 rounded-full focus:ring-orange-500 focus:outline-none",

    btn: {
      primary:
        "bg-orange-500 text-white hover:bg-orange-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-orange-200 text-orange-900 hover:bg-orange-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────── SYNTHWAVE ─────────────────────────── */
  synthwave: {
    base: "bg-purple-900 text-pink-400",
    form: "space-y-6",

    label:  "block text-sm font-medium text-pink-300",
    helper: "text-sm text-pink-300",
    error:  "text-sm text-yellow-400",

    input: {
      field:
        "block w-full border border-pink-600 rounded-lg px-4 py-2 bg-purple-900 text-pink-400 " +
        "placeholder-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",
      placeholder: "text-pink-600",
    },
    select:
      "block w-full border border-pink-600 rounded-lg px-4 py-2 bg-purple-900 text-pink-400 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",
    textarea:
      "block w-full border border-pink-600 rounded-lg px-4 py-2 min-h-[120px] bg-purple-900 text-pink-400 " +
      "placeholder-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-pink-500",

    checkbox:
      "h-4 w-4 text-yellow-400 bg-purple-900 border-pink-600 rounded focus:ring-yellow-400 focus:outline-none",
    radio:
      "h-4 w-4 text-yellow-400 bg-purple-900 border-pink-600 rounded-full focus:ring-yellow-400 focus:outline-none",

    btn: {
      primary:
        "bg-pink-600 text-white hover:bg-pink-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-purple-700 text-pink-300 hover:bg-purple-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── VALENTINE ────────────────────────── */
  valentine: {
    base: "bg-pink-50 text-pink-800",
    form: "space-y-6",

    label:  "block text-sm font-medium text-pink-700",
    helper: "text-sm text-pink-600",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-white text-pink-800 " +
        "placeholder-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
      placeholder: "text-pink-500",
    },
    select:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-white text-pink-800 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
    textarea:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-pink-800 " +
      "placeholder-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",

    checkbox:
      "h-4 w-4 text-red-500 bg-white border-pink-300 rounded focus:ring-red-500 focus:outline-none",
    radio:
      "h-4 w-4 text-red-500 bg-white border-pink-300 rounded-full focus:ring-red-500 focus:outline-none",

    btn: {
      primary:
        "bg-red-500 text-white hover:bg-red-400 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-pink-300 text-pink-800 hover:bg-pink-400 rounded-lg px-4 py-2 transition-colors",
    },
  },

  
  cupcake: {
    base: "bg-pink-50 text-pink-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-pink-700",
    helper: "text-sm text-pink-600",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-pink-100 text-pink-900 " +
        "placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
      placeholder: "text-pink-400",
    },
    select:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 bg-pink-100 text-pink-900 " +
      "focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",
    textarea:
      "block w-full border border-pink-300 rounded-lg px-4 py-2 min-h-[120px] bg-pink-100 text-pink-900 " +
      "placeholder-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-500",

    checkbox:
      "h-4 w-4 text-pink-600 bg-pink-100 border-pink-300 rounded focus:ring-pink-500 focus:outline-none",
    radio:
      "h-4 w-4 text-pink-600 bg-pink-100 border-pink-300 rounded-full focus:ring-pink-500 focus:outline-none",

    btn: {
      primary:
        "bg-pink-500 text-white hover:bg-pink-600 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-pink-200 text-pink-900 hover:bg-pink-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── CORPORATE ────────────────────────── */
  corporate: {
    base: "bg-blue-50 text-blue-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-blue-700",
    helper: "text-sm text-blue-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-blue-300 rounded-lg px-4 py-2 bg-white text-blue-900 " +
        "placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
      placeholder: "text-blue-500",
    },
    select:
      "block w-full border border-blue-300 rounded-lg px-4 py-2 bg-white text-blue-900 " +
      "focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",
    textarea:
      "block w-full border border-blue-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-blue-900 " +
      "placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500",

    checkbox:
      "h-4 w-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:outline-none",
    radio:
      "h-4 w-4 text-blue-600 bg-white border-blue-300 rounded-full focus:ring-blue-500 focus:outline-none",

    btn: {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-blue-200 text-blue-900 hover:bg-blue-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── GARDEN ──────────────────────────── */
  garden: {
    base: "bg-green-50 text-green-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-green-700",
    helper: "text-sm text-green-600",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-green-300 rounded-lg px-4 py-2 bg-green-100 text-green-900 " +
        "placeholder-green-500 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500",
      placeholder: "text-green-500",
    },
    select:
      "block w-full border border-green-300 rounded-lg px-4 py-2 bg-green-100 text-green-900 " +
      "focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500",
    textarea:
      "block w-full border border-green-300 rounded-lg px-4 py-2 min-h-[120px] bg-green-100 text-green-900 " +
      "placeholder-green-500 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500",

    checkbox:
      "h-4 w-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500 focus:outline-none",
    radio:
      "h-4 w-4 text-green-600 bg-green-100 border-green-300 rounded-full focus:ring-green-500 focus:outline-none",

    btn: {
      primary:
        "bg-green-600 text-white hover:bg-green-700 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-green-200 text-green-900 hover:bg-green-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── HALLOWEEN ────────────────────────── */
  halloween: {
    base: "bg-gray-900 text-orange-400",
    form: "space-y-6",

    label:  "block text-sm font-medium text-orange-300",
    helper: "text-sm text-orange-300",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-orange-600 rounded-lg px-4 py-2 bg-gray-800 text-orange-300 " +
        "placeholder-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-600 focus:border-orange-500",
      placeholder: "text-orange-600",
    },
    select:
      "block w-full border border-orange-600 rounded-lg px-4 py-2 bg-gray-800 text-orange-300 " +
      "focus:outline-none focus:ring-4 focus:ring-orange-600 focus:border-orange-500",
    textarea:
      "block w-full border border-orange-600 rounded-lg px-4 py-2 min-h-[120px] bg-gray-800 text-orange-300 " +
      "placeholder-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-600 focus:border-orange-500",

    checkbox:
      "h-4 w-4 text-orange-500 bg-gray-800 border-orange-600 rounded focus:ring-orange-600 focus:outline-none",
    radio:
      "h-4 w-4 text-orange-500 bg-gray-800 border-orange-600 rounded-full focus:ring-orange-600 focus:outline-none",

    btn: {
      primary:
        "bg-orange-600 text-gray-900 hover:bg-orange-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-gray-700 text-orange-300 hover:bg-gray-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── COFFEE ──────────────────────────── */
  coffee: {
    base: "bg-amber-900 text-amber-100",
    form: "space-y-6",

    label:  "block text-sm font-medium text-amber-200",
    helper: "text-sm text-amber-300",
    error:  "text-sm text-red-400",

    input: {
      field:
        "block w-full border border-amber-700 rounded-lg px-4 py-2 bg-amber-800 text-amber-100 " +
        "placeholder-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-700 focus:border-amber-500",
      placeholder: "text-amber-300",
    },
    select:
      "block w-full border border-amber-700 rounded-lg px-4 py-2 bg-amber-800 text-amber-100 " +
      "focus:outline-none focus:ring-4 focus:ring-amber-700 focus:border-amber-500",
    textarea:
      "block w-full border border-amber-700 rounded-lg px-4 py-2 min-h-[120px] bg-amber-800 text-amber-100 " +
      "placeholder-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-700 focus:border-amber-500",

    checkbox:
      "h-4 w-4 text-amber-500 bg-amber-800 border-amber-600 rounded focus:ring-amber-500 focus:outline-none",
    radio:
      "h-4 w-4 text-amber-500 bg-amber-800 border-amber-600 rounded-full focus:ring-amber-500 focus:outline-none",

    btn: {
      primary:
        "bg-amber-600 text-amber-900 hover:bg-amber-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-amber-700 text-amber-100 hover:bg-amber-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── DRACULA ─────────────────────────── */
  dracula: {
    base: "bg-violet-900 text-fuchsia-300",
    form: "space-y-6",

    label:  "block text-sm font-medium text-fuchsia-300",
    helper: "text-sm text-fuchsia-400",
    error:  "text-sm text-yellow-300",

    input: {
      field:
        "block w-full border border-fuchsia-600 rounded-lg px-4 py-2 bg-violet-900 text-fuchsia-300 " +
        "placeholder-fuchsia-600 focus:outline-none focus:ring-4 focus:ring-fuchsia-600 focus:border-fuchsia-500",
      placeholder: "text-fuchsia-600",
    },
    select:
      "block w-full border border-fuchsia-600 rounded-lg px-4 py-2 bg-violet-900 text-fuchsia-300 " +
      "focus:outline-none focus:ring-4 focus:ring-fuchsia-600 focus:border-fuchsia-500",
    textarea:
      "block w-full border border-fuchsia-600 rounded-lg px-4 py-2 min-h-[120px] bg-violet-900 text-fuchsia-300 " +
      "placeholder-fuchsia-600 focus:outline-none focus:ring-4 focus:ring-fuchsia-600 focus:border-fuchsia-500",

    checkbox:
      "h-4 w-4 text-yellow-400 bg-violet-900 border-fuchsia-600 rounded focus:ring-yellow-400 focus:outline-none",
    radio:
      "h-4 w-4 text-yellow-400 bg-violet-900 border-fuchsia-600 rounded-full focus:ring-yellow-400 focus:outline-none",

    btn: {
      primary:
        "bg-fuchsia-600 text-white hover:bg-fuchsia-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-violet-700 text-fuchsia-300 hover:bg-violet-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────────  OCEAN  ─────────────────────────── */
  ocean: {
    base: "bg-teal-900 text-teal-100",
    form: "space-y-6",

    label:  "block text-sm font-medium text-teal-200",
    helper: "text-sm text-teal-300",
    error:  "text-sm text-red-400",

    input: {
      field:
        "block w-full border border-teal-700 rounded-lg px-4 py-2 bg-teal-800 text-teal-100 " +
        "placeholder-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-700 focus:border-teal-500",
      placeholder: "text-teal-300",
    },
    select:
      "block w-full border border-teal-700 rounded-lg px-4 py-2 bg-teal-800 text-teal-100 " +
      "focus:outline-none focus:ring-4 focus:ring-teal-700 focus:border-teal-500",
    textarea:
      "block w-full border border-teal-700 rounded-lg px-4 py-2 min-h-[120px] bg-teal-800 text-teal-100 " +
      "placeholder-teal-300 focus:outline-none focus:ring-4 focus:ring-teal-700 focus:border-teal-500",

    checkbox:
      "h-4 w-4 text-teal-500 bg-teal-800 border-teal-600 rounded focus:ring-teal-500 focus:outline-none",
    radio:
      "h-4 w-4 text-teal-500 bg-teal-800 border-teal-600 rounded-full focus:ring-teal-500 focus:outline-none",

    btn: {
      primary:
        "bg-teal-600 text-white hover:bg-teal-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-teal-700 text-teal-100 hover:bg-teal-600 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ──────────────────────────── LAVENDER ─────────────────────────── */
  lavender: {
    base: "bg-purple-50 text-purple-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-purple-700",
    helper: "text-sm text-purple-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-purple-300 rounded-lg px-4 py-2 bg-white text-purple-900 " +
        "placeholder-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500",
      placeholder: "text-purple-500",
    },
    select:
      "block w-full border border-purple-300 rounded-lg px-4 py-2 bg-white text-purple-900 " +
      "focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500",
    textarea:
      "block w-full border border-purple-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-purple-900 " +
      "placeholder-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500",

    checkbox:
      "h-4 w-4 text-purple-600 bg-white border-purple-300 rounded focus:ring-purple-500 focus:outline-none",
    radio:
      "h-4 w-4 text-purple-600 bg-white border-purple-300 rounded-full focus:ring-purple-500 focus:outline-none",

    btn: {
      primary:
        "bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-purple-200 text-purple-900 hover:bg-purple-300 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ───────────────────────────── NEUTRAL ─────────────────────────── */
  neutral: {
    base: "bg-stone-100 text-stone-900",
    form: "space-y-6",

    label:  "block text-sm font-medium text-stone-700",
    helper: "text-sm text-stone-600",
    error:  "text-sm text-red-600",

    input: {
      field:
        "block w-full border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-900 " +
        "placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-stone-200 focus:border-stone-500",
      placeholder: "text-stone-500",
    },
    select:
      "block w-full border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-900 " +
      "focus:outline-none focus:ring-4 focus:ring-stone-200 focus:border-stone-500",
    textarea:
      "block w-full border border-stone-300 rounded-lg px-4 py-2 min-h-[120px] bg-white text-stone-900 " +
      "placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-stone-200 focus:border-stone-500",

    checkbox:
      "h-4 w-4 text-stone-600 bg-white border-stone-300 rounded focus:ring-stone-500 focus:outline-none",
    radio:
      "h-4 w-4 text-stone-600 bg-white border-stone-300 rounded-full focus:ring-stone-500 focus:outline-none",

    btn: {
      primary:
        "bg-stone-600 text-white hover:bg-stone-700 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-stone-300 text-stone-900 hover:bg-stone-400 rounded-lg px-4 py-2 transition-colors",
    },
  },

  /* ─────────────────────────────  LUXE  ──────────────────────────── */
  luxe: {
    base: "bg-black text-yellow-300",
    form: "space-y-6",

    label:  "block text-sm font-medium text-yellow-400",
    helper: "text-sm text-yellow-500",
    error:  "text-sm text-red-500",

    input: {
      field:
        "block w-full border border-yellow-600 rounded-lg px-4 py-2 bg-black text-yellow-300 " +
        "placeholder-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:border-yellow-500",
      placeholder: "text-yellow-600",
    },
    select:
      "block w-full border border-yellow-600 rounded-lg px-4 py-2 bg-black text-yellow-300 " +
      "focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:border-yellow-500",
    textarea:
      "block w-full border border-yellow-600 rounded-lg px-4 py-2 min-h-[120px] bg-black text-yellow-300 " +
      "placeholder-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:border-yellow-500",

    checkbox:
      "h-4 w-4 text-yellow-400 bg-black border-yellow-600 rounded focus:ring-yellow-500 focus:outline-none",
    radio:
      "h-4 w-4 text-yellow-400 bg-black border-yellow-600 rounded-full focus:ring-yellow-500 focus:outline-none",

    btn: {
      primary:
        "bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg px-4 py-2 transition-colors",
      secondary:
        "bg-yellow-600 text-yellow-100 hover:bg-yellow-500 rounded-lg px-4 py-2 transition-colors",
    },
  },
  /* ──────────────────────────  GAME OF THRONES  ────────────────────────── */
/* ───────────────────────  GAME OF THRONES  ─────────────────────── */
gameOfThrones: {
  /* Page / card wrapper */
  base:  "bg-stone-900 text-stone-200",
  form:  "space-y-6",

  /* Typography */
  label:  "block text-sm font-medium text-amber-400",   // Lannister gold
  helper: "text-sm text-sky-400",                       // Night Watch blue
  error:  "text-sm text-red-500",                       // Red Wedding, anyone?

  /* Inputs */
  input: {
    field:
      "block w-full rounded-lg px-4 py-2 border border-stone-600 " +
      "bg-stone-800 text-stone-200 placeholder-stone-500 " +
      "focus:outline-none focus:ring-4 focus:ring-amber-500/40 focus:border-amber-500",
    placeholder: "text-stone-500",
  },
  select:
    "block w-full rounded-lg px-4 py-2 border border-stone-600 " +
    "bg-stone-800 text-stone-200 focus:outline-none focus:ring-4 " +
    "focus:ring-amber-500/40 focus:border-amber-500",
  textarea:
    "block w-full rounded-lg px-4 py-2 min-h-[120px] border border-stone-600 " +
    "bg-stone-800 text-stone-200 placeholder-stone-500 " +
    "focus:outline-none focus:ring-4 focus:ring-amber-500/40 focus:border-amber-500",

  /* Checks */
  checkbox:
    "h-4 w-4 rounded bg-stone-800 border-stone-600 text-amber-500 " +
    "focus:ring-amber-500 focus:outline-none",
  radio:
    "h-4 w-4 rounded-full bg-stone-800 border-stone-600 text-amber-500 " +
    "focus:ring-amber-500 focus:outline-none",

  /* Buttons */
  btn: {
    primary:
      "bg-amber-500 text-stone-900 hover:bg-amber-600 rounded-lg px-4 py-2 transition-colors",
    secondary:
      "bg-red-700 text-white hover:bg-red-800 rounded-lg px-4 py-2 transition-colors",
  },
},


};
