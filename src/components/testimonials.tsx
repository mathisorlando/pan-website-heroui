import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full">
        <CardBody className="p-6">
          <Icon icon="lucide:quote" className="text-3xl text-primary-300 mb-4" />
          <p className="text-foreground-700 mb-6 italic">"{quote}"</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-foreground-500">{company}</p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Die Zusammenarbeit mit PAN Hamburg war von Anfang bis Ende professionell. Das Team hat unsere komplexen Anforderungen verstanden und termingerecht umgesetzt.",
      author: "Dr. Michael Schmidt",
      company: "Hamburg Port Authority"
    },
    {
      quote: "Besonders beeindruckt hat uns die Flexibilität und das technische Know-how. Selbst bei unvorhergesehenen Herausforderungen fand das Team schnell Lösungen.",
      author: "Sabine Müller",
      company: "Nordlicht Reederei GmbH"
    },
    {
      quote: "Die Bergungsarbeiten wurden mit höchster Präzision und unter Einhaltung aller Sicherheitsstandards durchgeführt. Wir werden definitiv wieder mit PAN Hamburg zusammenarbeiten.",
      author: "Thomas Weber",
      company: "Maritime Solutions GmbH"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Das sagen unsere Kunden</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Wir sind stolz auf die langjährigen Partnerschaften mit unseren Kunden und die positiven Rückmeldungen zu unserer Arbeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
