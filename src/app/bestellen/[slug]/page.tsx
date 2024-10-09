'use client'

import { Button } from '@/components-radiant/button'
import { Container } from '@/components-radiant/container'
import { Footer } from '@/components-radiant/footer'
import { GradientBackground } from '@/components-radiant/gradient'
import { Navbar } from '@/components-radiant/navbar'
import { Heading, Lead, Subheading } from '@/components-radiant/text'
import React, { useState } from 'react'

type ProductSlug = 'elektrisch' | 'gas' | 'pv'

const products: Record<ProductSlug, { name: string; price: number }> = {
  elektrisch: {
    name: 'Elektrische Keuring (Huishoudelijk)',
    price: 115.0,
  },
  gas: {
    name: 'Gasinstallatie Controle',
    price: 150.0,
  },
  pv: {
    name: 'PV Installatie Keuring',
    price: 165.0,
  },
}

function Header({ product }: { product: { name: string; price: number } }) {
  return (
    <Container className="mt-16">
      <Heading as="h1">{product.name}</Heading>
      <Lead className="mt-6 max-w-3xl">Prijs per inspectie: €{product.price.toFixed(2)} excl. BTW.</Lead>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <img alt="" src="/testimonials/veronica-winton.jpg" className="absolute inset-0 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            Onze inspecties werden snel ingepland en de rapporten werden snel geleverd, waardoor ons project zonder vertragingen kon worden voortgezet.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              Project Manager, EcoHome Installations
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function ProductOrder({ product }: { product: { name: string; price: number } }) {
  const [quantity, setQuantity] = useState(1)
  const [billingInfo, setBillingInfo] = useState('')
  const [address, setAddress] = useState('')
  const [startDate, setStartDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  
  const totalPrice = product.price * quantity
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
        `${product.name} besteld! Facturatie: ${billingInfo}, Adres: ${address}, Naam: ${name}, Telefoon: ${phoneNumber}, Email: ${email}, Aantal: ${quantity}, Startdatum: ${startDate}, Totaal: €${totalPrice}`
    )
  }
  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const newItem = { name: product.name, price: product.price, quantity }
    cart.push(newItem)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${quantity} x ${product.name} aan winkelwagen toegevoegd. Totaal: €${totalPrice}`)
  }

  return (
    <Container className="my-32">
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Bestelling Plaatsen</Subheading>
          <div>
            <form onSubmit={handleSubmit} className="mt-8 grid max-w-lg grid-cols-1 gap-6">
              <div>
                <label htmlFor="billingInfo" className="block text-sm font-medium text-gray-700">
                  Facturatiegegevens
                </label>
                <input
                    id="billingInfo"
                    type="text"
                    className="mt-1 block w-full rounded-md border p-2"
                    placeholder="Bedrijfsnaam of klantnaam"
                    value={billingInfo}
                    onChange={(e) => setBillingInfo(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Contactpersoon
                </label>
                <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full rounded-md border p-2"
                    placeholder="Naam van contactpersoon"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Telefoonnummer
                </label>
                <input
                    id="phoneNumber"
                    type="tel"
                    className="mt-1 block w-full rounded-md border p-2"
                    placeholder="Telefoonnummer van contactpersoon"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mailadres
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-md border p-2"
                    placeholder="E-mailadres van contactpersoon"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Adres
                </label>
                <input
                    id="address"
                    type="text"
                    className="mt-1 block w-full rounded-md border p-2"
                    placeholder="Installatieadres"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Installatie na deze datum
                </label>
                <input
                    id="startDate"
                    type="date"
                    className="mt-1 block w-full rounded-md border p-2"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Aantal
                </label>
                <input
                    id="quantity"
                    type="number"
                    min="1"
                    className="mt-1 block w-full rounded-md border p-2"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Totaalprijs: €{totalPrice.toFixed(2)}</div>
                <Button onClick={addToCart}>Aan winkelwagen toevoegen</Button>
              </div>
            </form>
          </div>
        </div>
        <Testimonial/>
      </div>
    </Container>
  )
}

export default function ProductPage({params}: { params: { slug: string } }) {
  const slug = params.slug as ProductSlug
  
  const product = products[slug]
  
  return (
      <main className="overflow-hidden">
        <GradientBackground/>
        <Container>
          <Navbar/>
        </Container>
        <Header product={product}/>
        <ProductOrder product={product}/>
        <Footer/>
      </main>
  )
}
