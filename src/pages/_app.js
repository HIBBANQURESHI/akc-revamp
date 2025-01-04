// Import the Poppins font
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

// Configure the font with desired weights and subsets
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700'], // Add weights as per your design
  variable: '--font-poppins', // Optional: Use a CSS variable for the font
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
