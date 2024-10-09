import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { getOrder } from '@/data'
import { BanknotesIcon, CalendarIcon, ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NumberIcon } from '@sanity/icons'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let order = await getOrder(params.id)

  return {
    title: order && `Order #${order.id}`,
  }
}

export default async function Order({ params }: { params: { id: string } }) {
  let order = await getOrder(params.id)

  if (!order) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link
          href="/dashboard/orders"
          className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Bestellingen
        </Link>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <Heading>Bestelling #{order.id}</Heading>
          <Badge color="lime">Inspectie Voltooid</Badge>
          <Badge color="lime">Factuur Betaald</Badge>
        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <NumberIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span className="inline-flex gap-3">{order.amount}</span>
            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <BanknotesIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>{order.price.eur}</span>
            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>{order.date}</span>
            </span>
          </div>
          <div className="flex gap-4">
            <Button outline as="a" href="#" download>
              Rapport Downloaded
            </Button>
            <Button outline as="a" href="#" download>
              Factuur Downloaded
            </Button>
            <Button>Factuur Opnieuw Verzenden</Button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Subheading>Samenvatting</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>Product</DescriptionTerm>
          <DescriptionDetails>
            <Link href={order.product.url} className="flex items-center gap-2">
              <span>{order.product.name}</span>
            </Link>
          </DescriptionDetails>
          <DescriptionTerm>Aantal</DescriptionTerm>
          <DescriptionDetails>{order.amount}</DescriptionDetails>
          <DescriptionTerm>Totaalbedrag</DescriptionTerm>
          <DescriptionDetails>{order.price.eur}</DescriptionDetails>
          <DescriptionTerm>Adres</DescriptionTerm>
          <DescriptionDetails>{order.address}</DescriptionDetails>
        </DescriptionList>
      </div>
      <div className="mt-12">
        <Subheading>Contactpersoon</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>Naam</DescriptionTerm>
          <DescriptionDetails>{order.customer.name}</DescriptionDetails>
          <DescriptionTerm>E-mailadres</DescriptionTerm>
          <DescriptionDetails>{order.customer.email}</DescriptionDetails>
          <DescriptionTerm>Telefoonnummer</DescriptionTerm>
          <DescriptionDetails>{order.customer.phone}</DescriptionDetails>
        </DescriptionList>
      </div>
    </>
  )
}
