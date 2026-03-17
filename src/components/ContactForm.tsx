import { useState, FormEvent } from 'react'
import styles from './ContactForm.module.css'

const formId = typeof import.meta.env !== 'undefined' && import.meta.env?.VITE_FORMSPREE_FORM_ID
  ? (import.meta.env.VITE_FORMSPREE_FORM_ID as string).trim()
  : ''

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formId) {
      setStatus('error')
      return
    }
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Name</span>
        <input type="text" name="name" required placeholder="Your name" />
      </label>
      <label className={styles.label}>
        <span>Email</span>
        <input type="email" name="email" required placeholder="you@example.com" />
      </label>
      <label className={styles.label}>
        <span>Message</span>
        <textarea name="message" required rows={5} placeholder="Your message..." />
      </label>
      {!formId && (
        <p className={styles.envNote}>
          Configure VITE_FORMSPREE_FORM_ID in .env to enable the contact form.
        </p>
      )}
      <button type="submit" className={styles.submit} disabled={status === 'sending' || !formId}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'success' && <p className={styles.success}>Thank you. Your message has been sent.</p>}
      {status === 'error' && (
        <p className={styles.error}>
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  )
}
