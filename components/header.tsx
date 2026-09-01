'use client'

import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { InspectionModal } from '@/components/modals/inspection-modal'

export function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="bg-primary px-4 py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground">Family-owned by Clint & Brian · Thorough service, guaranteed results</div>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Wise Choice Pest Control home"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_hmbcqqhmbcqqhmbc-iiLfECMHHgy2KmKlcY1yMXpXfhCvBz.jpeg" alt="Wise Choice Pest Control logo" className="h-12 w-auto max-w-[220px] object-contain" /></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex"><a href="#why-us">Why Us</a><a href="#services">Services</a><a href="#story">Our Story</a><a href="#reviews">Reviews</a><InspectionModal trigger={<Button size="sm">Free Quote</Button>} /></nav>
        <div className="hidden items-center gap-2 lg:flex"><Phone className="size-4 text-accent" /><a href="tel:+19727439284" className="font-bold text-primary">(972) 743-9284</a></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="flex flex-col gap-4 border-t px-5 py-5 text-sm font-semibold md:hidden"><a href="#why-us" onClick={() => setOpen(false)}>Why Us</a><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#story" onClick={() => setOpen(false)}>Our Story</a><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a><a href="tel:+19727439284" className="text-accent">Call (972) 743-9284</a></nav>}
    </header>
  </>
}
