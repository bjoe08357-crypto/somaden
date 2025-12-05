'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.table(Object.fromEntries(formData.entries()));
    setStatus('success');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-white/80">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none"
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-white/80">Subject</span>
        <select
          name="subject"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none"
        >
          <option value="General">General</option>
          <option value="Partnership">Partnership</option>
          <option value="Franchise">Franchise</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-white/80">Message</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none"
        />
      </label>
      <button type="submit" className="button-primary w-full sm:w-auto">
        Submit
      </button>
      {status === 'success' && (
        <p className="text-sm font-semibold text-emerald">
          Thanks! We received your message.
        </p>
      )}
    </form>
  );
}
