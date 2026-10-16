import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

export interface FormField {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: string[]
  /** Spans both columns on wide screens. */
  wide?: boolean
}

interface InquiryFormProps {
  /** Netlify form name. Must match a form in public/__forms.html. */
  formName: string
  fields: FormField[]
  submitLabel?: string
  successMessage?: string
  className?: string
}

/**
 * Posts URL-encoded data to the static Netlify Forms skeleton so the
 * submission bypasses the SSR function and reaches Netlify Forms.
 */
export function InquiryForm({
  formName,
  fields,
  submitLabel = 'Submit inquiry',
  successMessage = 'Thank you for getting in touch!',
  className,
}: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('pending')
    try {
      const body = new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>,
      ).toString()
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={cn(
          'flex flex-col items-center gap-3 rounded-2xl border border-primary/40 bg-card/70 p-10 text-center',
          className,
        )}
      >
        <CheckCircle2 className="size-10 text-primary" />
        <p className="font-display text-xl font-semibold">{successMessage}</p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form
      name={formName}
      method="POST"
      onSubmit={handleSubmit}
      className={cn(
        'grid gap-5 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur sm:grid-cols-2 sm:p-8',
        className,
      )}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {fields.map((field) => {
        const id = `${formName}-${field.name}`
        const wide = field.wide || field.type === 'textarea'
        return (
          <div key={field.name} className={cn('flex flex-col gap-2', wide && 'sm:col-span-2')}>
            <Label htmlFor={id}>
              {field.label}
              {field.required && <span className="text-accent"> *</span>}
            </Label>
            {field.type === 'textarea' ? (
              <Textarea
                id={id}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={5}
              />
            ) : field.type === 'select' ? (
              <select
                id={id}
                name={field.name}
                required={field.required}
                defaultValue=""
                className="h-9 rounded-md border border-input bg-input/30 px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Choose one
                </option>
                {field.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={id}
                name={field.name}
                type={field.type ?? 'text'}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </div>
        )
      })}
      {status === 'error' && (
        <p role="alert" className="text-sm text-destructive sm:col-span-2">
          Something went wrong sending that. Please try again, or reach out on Discord.
        </p>
      )}
      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === 'pending'}
          className="w-full rounded-full sm:w-auto glow-cyan"
        >
          {status === 'pending' && <Loader2 className="animate-spin motion-reduce:animate-none" />}
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
