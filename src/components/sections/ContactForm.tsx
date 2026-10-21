"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-stone-400";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: kirim data ke API route / layanan email
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-xl bg-brand-50 p-6 text-brand-900">
        <p className="font-semibold">Pesan terkirim</p>
        <p className="mt-1 text-sm">Kami akan membalas dalam 1–2 hari kerja.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <label className="block text-sm font-medium text-ink">
        Nama
        <input type="text" name="name" required placeholder="Nama lengkap" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-ink">
        Email
        <input type="email" name="email" required placeholder="nama@perusahaan.com" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-ink">
        Pesan
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Ceritakan singkat kebutuhan Anda"
          className={fieldClass}
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800 sm:w-auto"
      >
        Kirim pesan
      </button>
    </form>
  );
}