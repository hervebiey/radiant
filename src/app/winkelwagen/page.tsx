'use client'

import { Button } from '@/components-radiant/button'
import { Container } from '@/components-radiant/container'
import { Footer } from '@/components-radiant/footer'
import { Gradient, GradientBackground } from '@/components-radiant/gradient'
import { Navbar } from '@/components-radiant/navbar'
import { Heading } from '@/components-radiant/text'
import { useEffect, useState } from 'react'

const itemsPerPage = 5

function Header() {
	return (
		<Container className="mt-16">
			<Heading as="h1">Uw Winkelwagen</Heading>
		</Container>
	)
}

function Pagination({ page, totalItems, onPageChange }: { page: number; totalItems: number; onPageChange: (page: number) => void }) {
	const pageCount = Math.ceil(totalItems / itemsPerPage)
	const hasPreviousPage = page > 1
	const hasNextPage = page < pageCount
	
	const handlePageChange = (newPage: number) => {
		onPageChange(newPage)
	}
	
	if (pageCount < 2) return null
	
	return (
		<div className="mt-6 flex items-center justify-between gap-2">
			<Button variant="outline" onClick={() => handlePageChange(page - 1)} disabled={!hasPreviousPage}>
				Previous
			</Button>
			<div className="flex gap-2 max-sm:hidden">
				{Array.from({ length: pageCount }, (_, i) => (
					<Button
						key={i + 1}
						onClick={() => handlePageChange(i + 1)}
						variant="outline"
						data-active={i + 1 === page}
					>
						{i + 1}
					</Button>
				))}
			</div>
			<Button variant="outline" onClick={() => handlePageChange(page + 1)} disabled={!hasNextPage}>
				Next
			</Button>
		</div>
	)
}

function PricingCards({ page }: { page: number }) {
  const [cart, setCart] = useState<{ name: string; price: number; quantity: number }[]>([])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(cartItems)
  }, [])

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedItems = cart.slice(startIndex, startIndex + itemsPerPage)

  if (cart.length === 0) {
    return <p className="mt-8 text-gray-500">Uw winkelwagen is leeg.</p>
  }

  return (
	  <div className="relative py-24">
		  <Container className="relative">
			  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				  {paginatedItems.length > 0 ? (
					  <ul className="mt-8">
						  {paginatedItems.map((item, index) => (
							  <li key={index} className="flex justify-between border-b py-4">
                    <span>
                      {item.quantity} x {item.name}
                    </span>
								  <span>€{(item.price * item.quantity).toFixed(2)}</span>
							  </li>
						  ))}
					  </ul>
				  ) : (
					  <p className="mt-8 text-gray-500">Geen items op deze pagina.</p>
				  )}
			  </div>
		  </Container>
		  <Container>
			  <div className="mt-6 text-lg font-semibold">Totaal: €{totalPrice.toFixed(2)}</div>
			  <Button className="mt-4">Afrekenen</Button>
		  </Container>
	  </div>
  )
}

export default function Cart({searchParams}: { searchParams: { page?: string } }) {
	const [page, setPage] = useState(parseInt(searchParams.page || '1'))
	
	const handlePageChange = (newPage: number) => {
		setPage(newPage)
	}
	
	return (
		<main className="overflow-hidden">
			<GradientBackground/>
			<Container>
				<Navbar/>
			</Container>
			<Header/>
			<PricingCards page={page}/>
			<Pagination
				page={page}
				totalItems={JSON.parse(localStorage.getItem('cart') || '[]').length}
				onPageChange={handlePageChange}
			/>
			<Footer/>
		</main>
	)
}
