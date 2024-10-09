import { Button } from '@/components-radiant/button'
import { Container } from '@/components-radiant/container'
import { Footer } from '@/components-radiant/footer'
import { Gradient, GradientBackground } from '@/components-radiant/gradient'
import { Navbar } from '@/components-radiant/navbar'
import { Heading, Lead, Subheading } from '@/components-radiant/text'

const products = [
  {
    name: 'Elektrische Keuring (Huishoudelijk)' as const,
    slug: 'elektrisch',
    price: 115.0,
  },
  {
    name: 'Gasinstallatie Controle' as const,
    slug: 'gas',
    price: 150.0,
  },
  {
    name: 'PV Installatie Keuring' as const,
    slug: 'pv',
    price: 165.0,
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Inspecties Bestellen.</Heading>
      <Lead className="mt-6 max-w-3xl">Kies uw gewenste inspectiedienst en voeg deze toe aan uw winkelwagen.</Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} product={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{product.name}</Subheading>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">€{product.price}</div>
            <div className="text-sm/5 text-gray-950/75">
              <p>excl. BTW</p>
              <p>per inspectie</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={`/bestellen/${product.slug}`}>Inspectie Bestellen</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Bestellen() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Footer />
    </main>
  )
}
