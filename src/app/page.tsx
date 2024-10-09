import { Button } from '@/components-radiant/button'
import { Container } from '@/components-radiant/container'
import { Footer } from '@/components-radiant/footer'
import { Gradient } from '@/components-radiant/gradient'
import { Navbar } from '@/components-radiant/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	description: 'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
	return (
		<div className="relative">
			<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
			<Container className="relative">
				<Navbar />
				<div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
					<h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
						Ontdek onze inspectiediensten.
					</h1>
					<p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
						Kies uit ons aanbod van diensten die zijn afgestemd op uw behoeften.
					</p>
					<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
						<Button href="/dashboard">Naar Mijn Dashboard</Button>
						<Button variant="secondary" href="/bestellen">
							Inspecties Bestellen
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default function Home() {
	return (
		<div className="overflow-hidden">
			<Hero />
			<Footer />
		</div>
	)
}
