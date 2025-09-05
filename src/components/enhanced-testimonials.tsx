import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Avatar, Chip, Divider } from "@heroui/react";
import { Icon } from '@iconify/react';

const testimonials = [
  {
    id: 1,
    name: "Klaus Müller",
    company: "Hamburger Hafen AG",
    role: "Projektleiter",
    content: "PAN Hamburg hat unser Wasserbauprojekt mit höchster Professionalität durchgeführt. Die Zusammenarbeit war von Anfang bis Ende erstklassig.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
    project: "Kaimauer-Sanierung"
  },
  {
    id: 2,
    name: "Sabine Weber",
    company: "Maritime Solutions GmbH",
    role: "Geschäftsführerin",
    content: "Zuverlässigkeit und Qualität auf höchstem Niveau. Das Team von PAN Hamburg ist unser bevorzugter Partner für alle Schlepparbeiten.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=2",
    project: "Schleppdienste"
  },
  {
    id: 3,
    name: "Thomas Schmidt",
    company: "Nordsee Shipping",
    role: "Kapitän",
    content: "In Notfällen ist PAN Hamburg immer zur Stelle. Schnell, kompetent und mit der nötigen Ausrüstung - einfach verlässlich.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
    project: "Notfall-Bergung"
  }
];

export const EnhancedTestimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip
            startContent={<Icon icon="lucide:star" className="text-sm" />}
            variant="flat"
            color="warning"
            className="mb-4"
          >
            Kundenstimmen
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vertrauen Sie auf die Erfahrungen zufriedener Kunden aus dem gesamten Hamburger Hafen
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                <CardBody className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Icon 
                      icon="lucide:quote" 
                      className="text-3xl text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300" 
                    />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon 
                          key={i} 
                          icon="lucide:star" 
                          className="text-yellow-400 text-sm fill-current" 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <Divider className="mb-4" />

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar
                      src={testimonial.avatar}
                      name={testimonial.name}
                      className="w-12 h-12"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <Chip
                    size="sm"
                    variant="flat"
                    color="primary"
                    className="bg-blue-50 text-blue-700"
                    startContent={<Icon icon="lucide:briefcase" className="text-xs" />}
                  >
                    {testimonial.project}
                  </Chip>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Reaktionszeit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Projekte</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
