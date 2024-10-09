import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Select } from '@/components/select'
import { getProducts } from '@/data'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Producten',
}

export default async function Producten() {
  let events = await getProducts()

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Producten</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Zoek naar producten&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sorteer op naam</option>
                <option value="status">Sorteer op status</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <ul className="mt-10">
        {events.map((product, index) => (
          <>
            <li key={product.id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={product.id} className="flex gap-6 py-6">
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold">
                      <Link href={product.url}>{product.name}</Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500">
                      {product.price} excl. BTW <span aria-hidden="true">·</span> Laatst besteld op {product.date}
                    </div>
                    <div className="text-xs/6 text-zinc-600">Aantal keren besteld: {product.ticketsAvailable}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="max-sm:hidden" color={product.status === 'Beschikbaar' ? 'lime' : 'zinc'}>
                    {product.status}
                  </Badge>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
