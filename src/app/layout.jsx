import localFont from "next/font/local";
import "./global.css";
import Navbar from "./components/Navbar"

const geistsans = localFont({
  src: "/fonts/geistVF.woff",
  variable: "==font=geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/geistMonoVF.woff",
  variable: "--font=geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Practical class on React",
  description: "This is a practical react app",
  keywords:"tailwindcss, css, html, univelcity"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={'${Geistsans.variable} ${geistMono.variable} antialised'}>
      <Navbar/>
      <div className="min-h-screen">
        {children}
      </div>

</body>
</html>
  )
}
