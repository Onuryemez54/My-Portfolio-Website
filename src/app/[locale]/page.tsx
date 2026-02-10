import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Hero } from '@/components/home/Hero';
import { Projects } from '@/components/home/Projects';

const Home = () => {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 px-6 py-2 sm:gap-5 sm:py-8 md:gap-6 md:py-14 lg:gap-8 lg:py-20 xl:gap-10 2xl:py-24">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
