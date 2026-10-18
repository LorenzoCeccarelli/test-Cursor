"use client";

import { activities, locations } from "@/content/site";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm({ activity }: { activity?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!email && !phone) {
      setStatus("error");
      setMessage("Indica un’email oppure un telefono.");
      return;
    }
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error("Invio non riuscito");
      setStatus("ok");
      setMessage("Messaggio inviato. Un tecnico ti risponderà ai recapiti indicati.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Invio non riuscito. Scrivi a track.academy.sport@gmail.com oppure usa telefono o WhatsApp.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>
      <Field label="Telefono" name="phone" type="tel" autoComplete="tel" />
      <p className="text-sm text-muted">Indica almeno email o telefono.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span>Attività di interesse</span>
          <select
            name="activity"
            defaultValue={activity ?? ""}
            className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
          >
            <option value="">Seleziona</option>
            {activities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          <span>Sede preferita</span>
          <select name="location" className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink">
            <option value="">Seleziona</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span>Messaggio</span>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-line bg-paper px-3 py-3 text-ink"
        />
      </label>
      <p className="text-sm text-muted">
        Il modulo serve per informazioni. Non inviare certificati medici o dati sanitari.
      </p>
      {message ? (
        <p className={status === "ok" ? "text-sm text-petrol" : "text-sm text-ink"} role="status">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-petrol px-6 text-sm font-medium text-paper disabled:opacity-60"
      >
        {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-12 rounded-xl border border-line bg-paper px-3 text-ink"
      />
    </label>
  );
}
