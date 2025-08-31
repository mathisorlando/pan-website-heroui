import React from 'react';
import { Button, Card, CardBody, Divider, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { fleetData, allTypes, allTags } from '../../data/fleet';
import { equipmentCategories, equipmentData } from '../../data/equipment';

export const FleetPage: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [types, setTypes] = React.useState<Set<string>>(new Set());
  const [tags, setTags] = React.useState<Set<string>>(new Set());

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleType = (t: string) => {
    const next = new Set(types);
    next.has(t) ? next.delete(t) : next.add(t);
    setTypes(next);
  };

  const toggleTag = (t: string) => {
    const next = new Set(tags);
    next.has(t) ? next.delete(t) : next.add(t);
    setTags(next);
  };

  const clearFilters = () => {
    setQuery('');
    setTypes(new Set());
    setTags(new Set());
  };

  const filtered = fleetData.filter((f) => {
    const q = query.toLowerCase();
    const matchQuery = !q ||
      f.name.toLowerCase().includes(q) ||
      f.type.toLowerCase().includes(q) ||
      f.specs.join(' ').toLowerCase().includes(q) ||
      f.tags.join(' ').toLowerCase().includes(q);
    const matchType = types.size === 0 || types.has(f.type);
    const matchTags = tags.size === 0 || f.tags.some((t) => tags.has(t));
    return matchQuery && matchType && matchTags;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Flotte & Equipment</h1>
            <p className="text-white/80 text-lg">
              Leistungsstark aufgestellt: moderne Schiffe, spezialisierte Arbeitsgeräte und eingespielte Crews –
              für Schleppbetrieb, Wasserbau und Bergungen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="#flotte" onClick={(e) => handleNav(e, 'flotte')} variant="flat" color="primary" startContent={<Icon icon="lucide:ship" />}>Flotte</Button>
              <Button as={Link} to="#equipment" onClick={(e) => handleNav(e, 'equipment')} variant="flat" color="primary" startContent={<Icon icon="lucide:tool" />}>Equipment</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet filters + list */}
      <section id="flotte" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
            <h2 className="text-3xl font-bold">Unsere Flotte</h2>
            <span className="text-foreground-500 text-sm">{fleetData.length} Einheiten</span>
          </div>

          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Input type="text" variant="bordered" label="Suche" placeholder="Name, Spezifikation, Tag..." onChange={(e) => setQuery(e.target.value)} value={query} />
            <div className="flex flex-wrap gap-2 items-center">
              {allTypes.map((t) => (
                <Button key={t} size="sm" variant={types.has(t) ? 'solid' : 'flat'} color="primary" onClick={() => toggleType(t)}>
                  {t}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {allTags.map((t) => (
                <Button key={t} size="sm" variant={tags.has(t) ? 'solid' : 'flat'} onClick={() => toggleTag(t)}>
                  #{t}
                </Button>
              ))}
              {(types.size > 0 || tags.size > 0 || query) && (
                <Button size="sm" variant="light" onClick={clearFilters} startContent={<Icon icon="lucide:eraser" />}>Filter zurücksetzen</Button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f) => (
              <Card key={f.name} className="h-full">
                <div className="h-56 overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">{f.name}</h3>
                  <p className="text-sm text-foreground-500 mb-2">{f.type}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {f.tags?.map((t) => (
                      <span key={t} className="text-xs bg-default-200 text-foreground-700 rounded px-2 py-0.5">#{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {f.specs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon icon="lucide:check" className="text-success" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button size="sm" as={Link} to={`/fleet/${f.slug}`} variant="flat" color="primary" startContent={<Icon icon="lucide:info" />}>Details</Button>
                    <Button size="sm" as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Anfragen</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Equipment list */}
      <section id="equipment" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((title) => (
              <Card key={title} className="h-full">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  <ul className="space-y-2 text-foreground-600">
                    {equipmentData.filter((e) => e.category === title).map((it) => (
                      <li key={it.slug} className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2"><Icon icon="lucide:dot" />{it.title}</span>
                        <Button as={Link} to={`/equipment/${it.slug}`} size="sm" variant="light" endContent={<Icon icon="lucide:arrow-right" />}>Details</Button>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Benötigen Sie ein bestimmtes Schiff oder Gerät?</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto mb-6">Wir stellen die passende Lösung zusammen – inklusive Crew und Logistik.</p>
          <div className="flex justify-center gap-3">
            <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Jetzt anfragen</Button>
            <Button as={Link} to="/services" variant="flat" color="primary" startContent={<Icon icon="lucide:arrow-right" />}>Leistungen ansehen</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
