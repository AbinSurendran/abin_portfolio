// import { JetBrains_Mono } from "next/font/google";
// import "./globals.css";

// const JetBrains_Mono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-jetbrainsMono",
// });

// export const metadata = {
//   title: "Abin Surendran",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={jetbrainsMono.variable}>{children}</body>
//     </html>
//   );
// }


import { JetBrains_Mono as JetBrainsMonoLoader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const jetbrainsMono = JetBrainsMonoLoader({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Abin Surendran",
    description: "Generated by create next app",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}