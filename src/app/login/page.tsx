import { Button } from '@/components-radiant/button'
import { GradientBackground } from '@/components-radiant/gradient'
import { Link } from '@/components-radiant/link'
import { Mark } from '@/components-radiant/logo'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

export default function Login() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <form action="#" method="POST" className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium">Welkom terug!</h1>
            <p className="mt-1 text-sm/5 text-gray-600">
              Meld u aan bij uw account om verder te gaan.
            </p>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">E-mail</Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium">Wachtwoord</Label>
              <Input
                required
                type="password"
                name="password"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
                  'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
                  'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
                )}
              />
            </Field>
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    'group block size-4 rounded border border-transparent shadow ring-1 ring-black/10 focus:outline-none',
                    'data-[checked]:bg-black data-[checked]:ring-black',
                    'data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-black',
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-[checked]:opacity-100" />
                </Checkbox>
                <Label>Onthoud mij</Label>
              </Field>
              <Link href="#" className="font-medium hover:text-gray-600">
                Wachtwoord vergeten?
              </Link>
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full">
                Aanmelden
              </Button>
            </div>
          </form>
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            Nog geen lid?{' '}
            <Link href="#" className="font-medium hover:text-gray-600">
              Maak een account aan
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
