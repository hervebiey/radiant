import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import type { Metadata } from 'next'
import { Address } from './address'

export const metadata: Metadata = {
  title: 'Instellingen',
}

export default function Settings() {
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <Heading>Instellingen</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Bedrijfsnaam</Subheading>
        </div>
        <div>
          <Input aria-label="Organization Name" name="name" defaultValue="Examoplo" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Bedrijfsomschrijving</Subheading>
          <Text>Maximum 240 characters.</Text>
        </div>
        <div>
          <Textarea aria-label="Organization Bio" name="bio" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Bedrijfsemail</Subheading>
          <Text>Dit is hoe klanten contact met u kunnen opnemen voor ondersteuning.</Text>
        </div>
        <div className="space-y-4">
          <Input type="email" aria-label="Organization Email" name="email" defaultValue="info@examoplo.com" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Adres</Subheading>
          <Text>Dit is waar uw bedrijf is geregistreerd.</Text>
        </div>
        <Address />
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit">Wijzigingen Opslaan</Button>
      </div>
    </form>
  )
}
