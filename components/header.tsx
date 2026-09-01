'use client'

import { Phone, ShieldCheck, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { InspectionModal } from '@/components/modals/inspection-modal'

export function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="bg-primary px-4 py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground">Family-owned by Clint & Brian · Thorough service, guaranteed results</div>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Wise Choice Pest Control home"><span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground"><ShieldCheck /></span><span className="font-serif text-lg font-bold leading-tight text-primary">Wise Choice<br /><span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pest Control</span></span></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex"><a href="#why-us">Why Us</a><a href="#services">Services</a><a href="#story">Our Story</a><a href="#reviews">Reviews</a><InspectionModal trigger={<Button size="sm">Free Quote</Button>} /></nav>
        <div className="hidden items-center gap-2 lg:flex"><Phone className="size-4 text-accent" /><a href="tel:+19727439284" className="font-bold text-primary">(972) 743-9284</a></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="flex flex-col gap-4 border-t px-5 py-5 text-sm font-semibold md:hidden"><a href="#why-us" onClick={() => setOpen(false)}>Why Us</a><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#story" onClick={() => setOpen(false)}>Our Story</a><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a><a href="tel:+19727439284" className="text-accent">Call (972) 743-9284</a></nav>}
    </header>
  </>
}
