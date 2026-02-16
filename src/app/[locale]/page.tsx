import { Divider } from '@/components/common/Divider';
import { About } from '@/components/home/about/About';
import { Contact } from '@/components/home/contact/Contact';
import { Hero } from '@/components/home/hero/Hero';
import { Projects } from '@/components/home/projects/Projects';

const Home = () => {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 overflow-x-hidden px-6 py-2 sm:gap-5 sm:py-8 md:gap-6 md:py-14 lg:gap-8 lg:py-20 xl:gap-10 2xl:py-24">
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </div>
  );
};

export default Home;
('');
