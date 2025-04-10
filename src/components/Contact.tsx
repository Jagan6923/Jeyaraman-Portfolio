import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}