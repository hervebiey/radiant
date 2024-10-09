'use client'

import { Input } from '@/components/input'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/listbox'
import { getCountries } from '@/data'
import { useState } from 'react'

export function Address() {
  let countries = getCountries()
  let [country, setCountry] = useState(countries[0])

  return (
    <div className="grid grid-cols-2 gap-6">
      <Input
        aria-label="Street Address"
        name="address"
        placeholder="Straatnaam en huisnummer"
        defaultValue="Krijgslaan 21"
        className="col-span-2"
      />
      <Input aria-label="City" name="city" placeholder="Stad" defaultValue="Gent" className="col-span-2" />
      <Listbox aria-label="Region" name="region" placeholder="Regio" defaultValue="Oost-Vlaanderen">
        {country.regions.map((region) => (
          <ListboxOption key={region} value={region}>
            <ListboxLabel>{region}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
      <Input aria-label="Postal code" name="postal_code" placeholder="Postcode" defaultValue="9000" />
      <Listbox
        aria-label="Country"
        name="country"
        placeholder="Land"
        by="code"
        value={country}
        onChange={(country) => setCountry(country)}
        className="col-span-2"
      >
        {countries.map((country) => (
          <ListboxOption key={country.code} value={country}>
            <ListboxLabel>{country.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  )
}
