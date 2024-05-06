'use client';

import { Toaster } from 'react-hot-toast';
import Container from '../micro/Container';
import Form from './Form';

function ContactForm() {
  return (
    <section className="border-b">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: 'max-content',
          },
        }}
      />
      <Container>
        <p className="text-center">Form: TODO</p>
        <Form />
      </Container>
    </section>
  );
}

export default ContactForm;
