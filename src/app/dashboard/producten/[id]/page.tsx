import { Stat } from '@/app/dashboard/page'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getProduct, getProductOrders } from '@/data'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let product = await getProduct(params.id)

  return {
    title: product?.name,
  }
}

export default async function Product({ params }: { params: { id: string } }) {
  let product = await getProduct(params.id)
  let orders = await getProductOrders(params.id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/dashboard/producten" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Producten
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{product.name}</Heading>
              <Badge color={product.status === 'Beschikbaar' ? 'lime' : 'zinc'}>{product.status}</Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {product.price} excl. BTW <span aria-hidden="true">·</span> Laatst besteld op {product.date}
            </div>
          </div>
        </div>
      </div>
      <Subheading className="mt-12">Recente bestellingen</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Ordernummer</TableHeader>
            <TableHeader>Besteldatum</TableHeader>
            <TableHeader>Contactpersoon</TableHeader>
            <TableHeader className="text-right">Bedrag</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
              <TableCell>{order.id}</TableCell>
              <TableCell className="text-zinc-500">{order.date}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell className="text-right">{order.price.eur}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
