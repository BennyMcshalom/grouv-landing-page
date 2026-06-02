import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import RootCard from '@/components/RootCard';
import SpacesSection from '@/components/SpacesSection';
import AuraSection from '@/components/AuraSection';
import JustGrouv from '@/components/JustGrouv';
import Bonds from '@/components/Bonds';
import Nearby from '@/components/Nearby';
import HowItWorks from '@/components/HowItWorks';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export default function Home() {
  return (
    <Providers>
      <span id="top" />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <RootCard />
        <SpacesSection />
        <AuraSection />
        <JustGrouv />
        <Bonds />
        <Nearby />
        <HowItWorks />
        <JoinCTA />
      </main>
      <Footer />
    </Providers>
  );
}
