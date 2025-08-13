import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary-blue)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary-gray)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent-green)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Design-specific colors
        dark: "var(--dark-gray)",
        medium: "var(--medium-gray)",
        light: "var(--light-gray)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--medium-gray)',
            h1: {
              color: 'var(--dark-gray)',
              fontWeight: '700',
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            },
            h2: {
              color: 'var(--dark-gray)',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              color: 'var(--dark-gray)',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            a: {
              color: 'var(--primary-blue)',
              '&:hover': {
                color: 'hsl(213.9, 88.28%, 43.14%)',
              },
            },
            blockquote: {
              borderLeftColor: 'var(--primary-blue)',
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              fontSize: '1.125rem',
              color: 'var(--dark-gray)',
            },
            code: {
              backgroundColor: 'var(--light-gray)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            pre: {
              backgroundColor: 'var(--light-gray)',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
