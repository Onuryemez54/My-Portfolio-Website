import { Container } from '../../ui/Container';
import { SectionKey } from '@/types/sectionTypes';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <Container id={SectionKey.CONTACT}>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid items-center gap-16 md:grid-cols-6 xl:grid-cols-7">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};
