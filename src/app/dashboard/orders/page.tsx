import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getOrders } from '@/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bestellingen',
}

export default async function Orders() {
  let orders = await getOrders()

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Bestellingen</Heading>
        <Button className="-my-0.5">Nieuwe Bestelling</Button>
      </div>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Ordernummer</TableHeader>
            <TableHeader>Besteldatum</TableHeader>
            <TableHeader>Contactpersoon</TableHeader>
            <TableHeader>Product</TableHeader>
            <TableHeader>Aantal</TableHeader>
            <TableHeader className="text-right">Totaalbedrag</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
              <TableCell>{order.id}</TableCell>
              <TableCell className="text-zinc-500">{order.date}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{order.product.name}</span>
                </div>
              </TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell className="text-right">{order.price.eur}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
