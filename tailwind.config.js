/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    "./index.html",
    //"../templates/**/*.html",
    //"../templates/**/*.j2",
    //"../*.py",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      "ice-dark-blue": "#232b5f", // hsv(232, 63.16%, 37.25%)
      "ice-blue": "#4c6eac", // hsv(218.75, 55.81%, 67.45%)
      "ice-light-blue": "#dae6ee", // hsv(204, 8.4%, 93.33%)
      "ice-green": "#527f24", // hsv(89.67, 71.65%, 49.8%)
      "ice-txt-blue": "#215f90", // hsv(206.49, 77.08%, 56.47%)
      "ice-pdf-red": "#b60a00", // hsv(3.3, 100%, 71.37%)
      "ice-xlsx-green": "#497038", // hsv(101.79, 50%, 43.92%)
      "ice-pale-grey": "#f3f5f7", // hsv(210, 1.62%, 96.86%)
      "ice-chart-orange": "#ff4500",
      "ice-chart-blue": "#0d0dfe",
      "ice-chart-lavender": "#b773b7",
      "ice-chart-purple": "#850b85",
      "ice-chart-amber": "#fac86e",
      "ice-chart-light-grey": "#bcbcbc",
      "ice-chart-dark-grey": "#0c0c0c",
      "ice-chart-text-grey": "#444444",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Lato", "Roboto", "sans-serif"],
      condensed: ["Roboto Condensed", "Roboto", "Lato", "sans-serif"],
    },
    extend: {
      spacing: {
        120: "30rem",
        160: "40rem",
        192: "48rem",
        240: "60rem",
      },
      backgroundImage: {
        "chemistry-backdrop": "url('/src/assets/chemistry-backdrop.jpg')",
      },
      maxWidth: {
        prose: "80ch",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        /* extend: {
          colors: {
            primary: "#232b5f", // ice-dark-blue
            "primary-foil": "#dae6ee", // ice-light-blue
            secondary: "#4c6eac", // ice-blue
            "secondary-foil": "#f3f5f7", // ice-pale-grey
            tertiary: "#dae6ee", // ice-light-blue
            "tertiary-foil": "#232b5f", // ice-dark-blue
            accent: "#527f24", // ice-green
            "accent-foil": "#fff", // white
            backing: "#fff",
            subdued: "#939597",
            backdrop: "#fff",
          },
        },*/
      },
      themes: [
        /* {
          name: "theme-glass",
          extend: {
            colors: {
              primary: "#232b5f", // ice-dark-blue
              "primary-foil": "#dae6ee", // ice-light-blue
              secondary: "#4c6eac", // ice-blue
              "secondary-foil": "#f3f5f7", // ice-pale-grey
              tertiary: "#dae6ee", // ice-light-blue
              "tertiary-foil": "#232b5f", // ice-dark-blue
              accent: "#527f24", // ice-green
              "accent-foil": "#fff", // white
              subdued: "#939597",
              backing: "#fff",
              accent: "#527f24", // ice-green
              "accent-foil": "#fff", // white
            },
            backgroundImage: {
              backdrop: "url('/src/assets/chemistry-backdrop.jpg')",
            },
          },
        },*/
        {
          name: "look-light",
          extend: {
            colors: {
              /*basic: "#f3f5f7", // ice-pale-grey
              "basic-prose": "#232b5f", // ice-dark-blue
              "basic-onto": "#dae6ee", // ice-light-blue
              subdued: "#4c6eac", // ice-blue
              "subdued-foil": "#f3f5f7", // ice-pale-grey*/
              backdrop: "#fff",
              canvas: "#efefef", // light-grey
              card: "#f3f5f7", // pale-grey
              box: "#e3e5e7", //
              prose: "#111315", // ink
              "prose-subdued": "#616365", // ice-pale-grey
              // TODO: figure out naming or enforcement so that:
              // ???: alpha and charlie need to be far in color for the theme to work properly
              // ???: alpha and bravo cannot be next to each other for the scheme to work properly
              // ???: something about highlighting
              alpha: "#232b5f", // dark-blue
              "alpha-prose": "#fff", // white
              bravo: "#4c6eac", // blue
              "bravo-prose": "#f3f5f7", // pale-grey
              charlie: "#dae6ee", // light-blue
              "charlie-prose": "#000", // black
              delta: "#527f24", // green
              "delta-prose": "#fff", // white

              // TODO: unsure on generic naming here
              // ???: mechanism for colors that need to have good contrast such as in a plot
              // TODO: "plot-checkbox": "#dadfe4", // grey
              // TODO: "plot-grid": "#bcbcbc", // light-grey
              "plot-canvas": "#f3f5f3", // pale-grey
              "plot-card": "#f5f5f5", //
              "plot-prose": "#444444", // ink
              "plot-alpha": "#0d0dfe", // blue // plot line a
              "plot-bravo": "#ff4500", // orange // plot points
              "plot-charlie": "#b773b7", // lavender // plot line b
              "plot-delta": "#850b85", // purple // plot line c
              "plot-echo": "#fac86e", // amber // plot line d
            },
          },
        },
        {
          name: "look-dark",
          extend: {
            colors: {
              // TODO: how can we compose place-web and look-dark
              backdrop: "#888", // ink
              prose: "#efefef",
              canvas: "#191919",
              card: "#f3f5f7", // pale-grey
              box: "#888", //

              alpha: "#dae6ee", // light-blue
              "alpha-prose": "#000", // black
              bravo: "#444", //#8fabdf", // dm-blue
              "bravo-prose": "#f3f5f7", // pale-grey
              charlie: "#8f9bdf", // light-blue
              "charlie-prose": "#000", // black
              delta: "#527f24", // green
              "delta-prose": "#fff", // white

              "plot-canvas": "#f3f5f3", // pale-grey
              "plot-card": "#f5f5f5", //
              "plot-prose": "#444444", // ink
              "plot-alpha": "#0d0dfe", // blue // plot line a
              "plot-bravo": "#ff4500", // orange // plot points
              "plot-charlie": "#b773b7", // lavender // plot line b
              "plot-delta": "#850b85", // purple // plot line c
              "plot-echo": "#fac86e", // amber // plot line d
            },
          },
        },
        {
          name: "feel-paper",
        },
        {
          name: "feel-glass",
        },
        {
          name: "feel-stone",
        },
        {
          name: "feel-plasma",
        },
        {
          name: "place-lab",
          extend: {
            backgroundImage: {
              backdrop: "url('/src/assets/chemistry-backdrop.jpg')",
            },
          },
        },
        {
          name: "place-cloud",
          extend: {
            colors: {
              backdrop: "#f2f1e6", // cloud white
            },
          },
        },
        {
          name: "place-web",
          extend: {
            colors: {
              //  backdrop: "#fff", // white
            },
          },
        },
        /*{
          name: "theme-semantic-glass",
          extend: {
            colors: {
              basic: "#232b5f", // ice-dark-blue
              "basic-foil": "#dae6ee", // ice-light-blue
              accent: "#527f24", // ice-green
              "accent-foil": "#fff", // white
              subdued: "#4c6eac", // ice-blue
              "subdued-foil": "#f3f5f7", // ice-pale-grey
              prose: "#000",
              "prose-foil": "#fff",
            },
            backgroundImage: {
              backdrop: "url('/src/assets/chemistry-backdrop.jpg')",
            },
          },
        },*/
      ],
    }),
  ],
};
