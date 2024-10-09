import { getProducts } from '@/data'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type React from 'react'
import { ApplicationLayout } from './application-layout'

export const metadata: Metadata = {
  title: {
    template: 'Dashboard: %s',
    default: 'Dashboard',
  },
  description: '',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getProducts()

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Dashboard</title>
      </head>
      <body>
        <ApplicationLayout events={events}>{children}</ApplicationLayout>
      </body>
    </html>
  )
}
