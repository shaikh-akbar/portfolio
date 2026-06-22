import "./globals.css";

export const metadata = {
  title: "Shaikh Akbar | Premium Portfolio",
  description:
    "A futuristic, animated personal portfolio built with Next.js, JSX, Tailwind CSS, and Framer Motion.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
