import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Avatar, Progress } from "@heroui/react";
import { Icon } from '@iconify/react';

const stats = [
  {
    id: 1,
    number: "50+",
    label: "Jahre Erfahrung",
    description: "Bewährte Expertise seit Jahrzehnten",
    icon: "lucide:calendar",
    color: "primary",
    progress: 95
  },
  {
    id: 2,
    number: "24/7",
    label: "Verfügbarkeit",
    description: "Rund um die Uhr für Sie da",
    icon: "lucide:clock",
    color: "secondary",
    progress: 100
  },
  {
    id: 3,
    number: "1000+",
    label: "Erfolgreiche Projekte",
    description: "Zufriedene Kunden im ganzen Hafen",
    icon: "lucide:trophy",
    color: "success",
    progress: 88
  },
  {
    id: 4,
    number: "15+",
    label: "Fahrzeuge & Geräte",
    description: "Moderne Flotte für jeden Einsatz",
    icon: "lucide:ship",
    color: "warning",
    progress: 92
  }
];

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* No background - will use BeamsBackground from parent */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zahlen, die für sich sprechen
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Vertrauen Sie auf unsere langjährige Erfahrung und bewährte Leistung
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsVisible(true)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.id} variants={cardVariants}>
              <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-xl transition-all duration-300 group">
                <CardBody className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <Avatar
                      icon={<Icon icon={stat.icon} className="text-3xl" />}
                      className={`w-20 h-20 text-white ${
                        stat.color === 'primary' ? 'bg-blue-500' :
                        stat.color === 'secondary' ? 'bg-purple-500' :
                        stat.color === 'success' ? 'bg-green-500' :
                        'bg-orange-500'
                      } group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    />
                  </div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-3"
                  >
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {stat.number}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
            <Icon icon="lucide:star" className="text-yellow-400" />
            Vertrauen Sie auf bewährte Qualität
            <Icon icon="lucide:star" className="text-yellow-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
