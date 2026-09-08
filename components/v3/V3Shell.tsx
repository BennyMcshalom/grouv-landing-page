import { DM_Sans } from 'next/font/google';
import './v3-home.css';
import Interactions from './Interactions';
import Header from './Header';
import Footer from './Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function V3Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`v3home ${dmSans.className}`}>
      <Interactions />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
