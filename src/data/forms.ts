import type { FormField } from '@/components/site/inquiry-form'

// Every form here must be mirrored in public/__forms.html so Netlify registers it.

export const contactFields: FormField[] = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', wide: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]

export const newsletterFields: FormField[] = [
  { name: 'email', label: 'Email', type: 'email', required: true, wide: true, placeholder: 'you@example.com' },
]

export const weddingFields: FormField[] = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'date', label: 'Wedding date', type: 'date' },
  {
    name: 'package',
    label: 'Package',
    type: 'select',
    options: ['Basic', 'Minister & DJ', 'Minister & Singer', 'Vow Renewal', 'Virtual wedding', 'Not sure yet'],
  },
  { name: 'location', label: 'Location (city, state)' },
  { name: 'message', label: 'Tell me about your day', type: 'textarea', required: true },
]

export const bluconnectFields: FormField[] = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'company', label: 'Your company name' },
  { name: 'cards', label: 'How many cards?', type: 'select', options: ['1 card', '5 cards', '10 cards'] },
  { name: 'current_site', label: 'Current site or link page' },
  { name: 'message', label: 'Message', type: 'textarea' },
]

export const hazinaFields: FormField[] = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'address', label: 'Shipping address' },
  {
    name: 'message',
    label: 'Which item, or what idea do you have?',
    type: 'textarea',
    required: true,
  },
]

export const amazonFields: FormField[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'contact', label: 'Email or Discord account', required: true },
  { name: 'price_range', label: 'Price range', wide: true, placeholder: 'e.g. under $50' },
  { name: 'looking_for', label: 'What you are looking for', type: 'textarea', required: true },
]

export const skinFields: FormField[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'discord', label: 'Discord' },
  { name: 'email', label: 'Email', type: 'email', required: true, wide: true },
  { name: 'description', label: 'Describe what you want in detail', type: 'textarea', required: true },
]

export const discordFields: FormField[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'discord', label: 'Discord username', required: true },
  { name: 'email', label: 'Email', type: 'email', wide: true },
  { name: 'message', label: 'What does your server need?', type: 'textarea', required: true },
]
