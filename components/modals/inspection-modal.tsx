'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function InspectionModal({ trigger }: { trigger: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(false)
  return <Dialog onOpenChange={(value) => !value && setSubmitted(false)}><DialogTrigger asChild>{trigger}</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Request your free inspection</DialogTitle><DialogDescription>Tell us a little about your property. We&apos;ll be in touch to find a time that works.</DialogDescription></DialogHeader>{submitted ? <div className="rounded-xl bg-secondary p-6 text-center"><p className="font-bold text-primary">Thanks — we&apos;ll call you shortly.</p><p className="mt-2 text-sm text-muted-foreground">Prefer to talk now? <a className="font-bold text-accent" href="tel:+19727439284">(972) 743-9284</a>.</p></div> : <form className="flex flex-col gap-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="grid gap-4 sm:grid-cols-2"><Input required placeholder="Your name" aria-label="Your name" /><Input required type="tel" placeholder="Phone number" aria-label="Phone number" /></div><Input type="email" placeholder="Email address" aria-label="Email address" /><Select required><SelectTrigger><SelectValue placeholder="Property type" /></SelectTrigger><SelectContent><SelectItem value="home">Home</SelectItem><SelectItem value="business">Business</SelectItem><SelectItem value="rental">Rental property</SelectItem></SelectContent></Select><Textarea placeholder="What are you seeing? (optional)" aria-label="Pest issue details" /><Button type="submit" className="w-full">Request free inspection</Button></form>}</DialogContent></Dialog>
}
