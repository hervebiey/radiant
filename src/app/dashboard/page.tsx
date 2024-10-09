import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getRecentOrders } from '@/data'

function Stat({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
        <span className="text-zinc-500">sinds vorige week</span>
      </div>
    </div>
  )
}

export default async function Home() {
  let orders = await getRecentOrders()

  return (
    <>
      <Heading>Goedemiddag, Erica</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overzicht</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Laatste week</option>
            <option value="last_two">Laatste twee weken</option>
            <option value="last_month">Laatste maand</option>
            <option value="last_quarter">Laatste kwartaal</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Totaal besteld" value="€12,500" change="+3.2%" />
        <Stat title="Gemiddelde orderwaarde" value="€250" change="-0.5%" />
        <Stat title="Bestellingen" value="58" change="+5.5%" />
        <Stat title="Inspecties afgerond" value="45" change="+2.0%" />
      </div>
      <Subheading className="mt-14">Recente bestellingen</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
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
