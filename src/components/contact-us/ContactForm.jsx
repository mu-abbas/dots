import { Toaster } from 'react-hot-toast';
import Form from './Form';

function ContactForm() {
  return (
    <section className="xl:w-full">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: 'max-content',
          },
        }}
      />
      <Form />
    </section>
  );
}

export default ContactForm;
