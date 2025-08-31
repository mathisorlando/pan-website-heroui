import React from 'react';
import { Button, Card, CardBody, Input, Textarea } from '@heroui/react';
import { Icon } from '@iconify/react';

export const ContactPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const mailtoHref = React.useMemo(() => {
    const subject = encodeURIComponent('Anfrage über die PAN Hamburg Website');
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    return `mailto:mail@pan-hamburg.de?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-white/80 text-lg">Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact details */}
            <Card>
              <CardBody className="p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-2">Ansprechpartner</h2>
                <div className="space-y-2 text-foreground-700">
                  <p className="font-semibold">Andreas Bätjer</p>
                  <p>Entenwerder 1<br/>20539 Hamburg</p>
                </div>

                <div className="space-y-2">
                  <a href="tel:+494079754205" className="flex items-center gap-3 text-foreground-700 hover:text-primary">
                    <Icon icon="lucide:phone" className="text-primary" />
                    <span>Tel: +49 40 79754205</span>
                  </a>
                  <a href="tel:+491724003655" className="flex items-center gap-3 text-foreground-700 hover:text-primary">
                    <Icon icon="lucide:smartphone" className="text-primary" />
                    <span>Mobil: +49 172 4003655</span>
                  </a>
                  <a href="fax:+494079754206" className="flex items-center gap-3 text-foreground-700 hover:text-primary">
                    <Icon icon="lucide:printer" className="text-primary" />
                    <span>Fax: +49 40 79754206</span>
                  </a>
                  <a href="mailto:mail@pan-hamburg.de" className="flex items-center gap-3 text-foreground-700 hover:text-primary">
                    <Icon icon="lucide:mail" className="text-primary" />
                    <span>mail@pan-hamburg.de</span>
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Entenwerder%201%2C%2020539%20Hamburg"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="lucide:map-pin" />
                    Auf Karte öffnen
                  </a>
                </div>
              </CardBody>
            </Card>

            {/* Simple mailto form */}
            <Card>
              <CardBody className="p-6">
                <h2 className="text-2xl font-bold mb-4">Nachricht senden</h2>
                <div className="grid grid-cols-1 gap-4">
                  <Input label="Ihr Name" variant="bordered" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input type="email" label="Ihre E‑Mail" variant="bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Textarea label="Ihre Nachricht" variant="bordered" minRows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
                  <div className="flex gap-3">
                    <Button as="a" href={mailtoHref} color="accent" startContent={<Icon icon="lucide:send" />}>Per E‑Mail senden</Button>
                    <Button as="a" href="tel:+494079754205" variant="flat" color="primary" startContent={<Icon icon="lucide:phone" />}>Anrufen</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Static map */}
          <div className="mt-8">
            <Card>
              <CardBody className="p-4 md:p-6">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon icon="lucide:map" className="text-primary" />
                  Lageplan (statische Karte)
                </h2>
                <img
                  src="https://staticmap.openstreetmap.de/staticmap.php?center=53.5293462,10.0378950&zoom=15&size=1200x400&maptype=mapnik&markers=53.5293462,10.0378950,red-pushpin"
                  alt="Karte – Entenwerder 1, 20539 Hamburg"
                  className="w-full h-64 md:h-80 object-cover rounded"
                  loading="lazy"
                />
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=Entenwerder%201%2C%2020539%20Hamburg"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="lucide:external-link" />
                    In Google Maps öffnen
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
