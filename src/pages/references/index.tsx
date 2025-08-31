import React from 'react';
import { Button, Card, CardBody, Input, Select, SelectItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { referenceData, referenceCategories } from '../../data/references';

export const ReferencesPage: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState<string | 'alle'>('alle');
  const [year, setYear] = React.useState<string | 'alle'>('alle');

  const years = Array.from(new Set(referenceData.map((r) => r.year))).sort((a, b) => b - a);

  const filtered = referenceData.filter((r) => {
    const q = query.toLowerCase();
    const matchQ = !q || r.title.toLowerCase().includes(q) || r.client.toLowerCase().includes(q) || r.excerpt.toLowerCase().includes(q);
    const matchC = category === 'alle' || r.category === category;
    const matchY = year === 'alle' || r.year === Number(year);
    return matchQ && matchC && matchY;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Referenzen</h1>
            <p className="text-white/80 text-lg">Ausgewählte Projekte aus Schleppbetrieb, Wasserbau, Bergungen und Hafenbau.</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Suche" variant="bordered" placeholder="Projekt, Kunde, Stichwort…" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Select label="Kategorie" selectedKeys={[category]} onSelectionChange={(keys) => setCategory(Array.from(keys)[0] as string)}>
              <SelectItem key="alle">Alle</SelectItem>
              {referenceCategories.map((c) => (
                <SelectItem key={c}>{c}</SelectItem>
              ))}
            </Select>
            <Select label="Jahr" selectedKeys={[String(year)]} onSelectionChange={(keys) => setYear(Array.from(keys)[0] as string)}>
              <SelectItem key="alle">Alle</SelectItem>
              {years.map((y) => (
                <SelectItem key={String(y)}>{y}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ref) => (
              <Card key={ref.slug} className="h-full">
                <div className="h-48 overflow-hidden">
                  <img src={ref.image} alt={ref.title} className="w-full h-full object-cover" />
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">{ref.title}</h3>
                  <p className="text-sm text-foreground-500 mb-2">{ref.client} • {ref.year} • {ref.category}</p>
                  <p className="text-foreground-700 mb-4">{ref.excerpt}</p>
                  <div className="flex gap-2">
                    <Button as={Link} to={`/references/${ref.slug}`} variant="flat" color="primary" startContent={<Icon icon="lucide:info" />}>Details</Button>
                    <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Anfragen</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;

