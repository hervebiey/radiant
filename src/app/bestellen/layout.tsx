// src/app/layout.tsx (Server Component)

import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Inspectiediensten',
  description: 'Bestel inspectiediensten op maat van uw project.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="nl">
      <body>{children}</body>
      </html>
  )
}