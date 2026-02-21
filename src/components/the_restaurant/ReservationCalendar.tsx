"use client";

import { FormEvent, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type DayCell = {
  key: string;
  date: Date;
  inMonth: boolean;
  available: boolean;
};

const WEEK_DAYS = {
  it: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
} as const;

function toKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function buildMonthGrid(visibleMonth: Date, today: Date): DayCell[] {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const monthStart = new Date(year, month, 1);
  const firstWeekday = (monthStart.getDay() + 6) % 7;
  const gridStart = addDays(monthStart, -firstWeekday);

  return Array.from({ length: 42 }).map((_, i) => {
    const date = addDays(gridStart, i);
    const inMonth = date.getMonth() === month;
    const day = date.getDay();
    const isMonday = day === 1;
    const afterToday = date >= addDays(today, 1);
    const withinWindow = date <= addDays(today, 120);
    const available = inMonth && !isMonday && afterToday && withinWindow;

    return {
      key: toKey(date),
      date,
      inMonth,
      available,
    };
  });
}

function getTimeSlots(date: Date) {
  const weekday = date.getDay();
  const weekend = weekday === 0 || weekday === 6;
  return weekend
    ? ["12:30", "13:45", "19:15", "20:30", "21:45"]
    : ["19:00", "19:30", "20:15", "21:00", "21:45"];
}

function formatDateLabel(date: Date, locale: "it" | "en") {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatMonth(date: Date, locale: "it" | "en") {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function ReservationCalendar() {
  const { locale } = useLanguage();
  const isEn = locale === "en";

  const t = isEn
    ? {
        prevMonth: "Previous month",
        nextMonth: "Next month",
        availableTimes: "Available times",
        fullName: "Full name",
        email: "Email",
        guests: "Guests",
        specialRequests: "Special requests",
        specialRequestsPlaceholder:
          "Allergies, intolerances, or special requests",
        summary: "Summary:",
        at: "at",
        submit: "Confirm booking request",
        callback: "We will contact you within 30 minutes during opening hours.",
        requestReady:
          "Request prepared: your email app opens with details pre-filled.",
        noNotes: "No notes",
        subjectPrefix: "Reservation Atelier Nove —",
        labelName: "Name",
        labelEmail: "Email",
        labelGuests: "Guests",
        labelDate: "Date",
        labelTime: "Time",
        labelNotes: "Notes",
      }
    : {
        prevMonth: "Mese precedente",
        nextMonth: "Mese successivo",
        availableTimes: "Orari disponibili",
        fullName: "Nome e cognome",
        email: "Posta elettronica",
        guests: "Numero ospiti",
        specialRequests: "Richieste speciali",
        specialRequestsPlaceholder:
          "Allergie, intolleranze o richieste speciali",
        summary: "Riepilogo:",
        at: "alle",
        submit: "Conferma richiesta di prenotazione",
        callback:
          "Ti ricontattiamo entro 30 minuti in orario di apertura per conferma.",
        requestReady:
          "Richiesta preparata: si apre il tuo programma di posta elettronica con i dati già compilati.",
        noNotes: "Nessuna nota",
        subjectPrefix: "Prenotazione Atelier Nove —",
        labelName: "Nome",
        labelEmail: "Email",
        labelGuests: "Ospiti",
        labelDate: "Data",
        labelTime: "Orario",
        labelNotes: "Note",
      };

  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const monthGrid = useMemo(
    () => buildMonthGrid(visibleMonth, today),
    [visibleMonth, today],
  );

  const firstAvailable = useMemo(
    () => monthGrid.find((day) => day.available)?.date ?? addDays(today, 1),
    [monthGrid, today],
  );

  const [selectedDate, setSelectedDate] = useState<Date>(firstAvailable);
  const [selectedTime, setSelectedTime] = useState(
    getTimeSlots(firstAvailable)[0],
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const minMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
    [today],
  );
  const maxMonth = useMemo(() => {
    const maxDate = addDays(today, 120);
    return new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
  }, [today]);

  const slots = useMemo(() => getTimeSlots(selectedDate), [selectedDate]);

  const prevMonth = () => {
    if (visibleMonth <= minMonth) return;
    setVisibleMonth(
      (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    if (visibleMonth >= maxMonth) return;
    setVisibleMonth(
      (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1),
    );
  };

  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
    const nextSlots = getTimeSlots(date);
    setSelectedTime(nextSlots[0]);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);

    const subject = `${t.subjectPrefix} ${formatDateLabel(selectedDate, locale)} ${selectedTime}`;
    const body = [
      `${t.labelName}: ${name}`,
      `${t.labelEmail}: ${email}`,
      `${t.labelGuests}: ${guests}`,
      `${t.labelDate}: ${formatDateLabel(selectedDate, locale)}`,
      `${t.labelTime}: ${selectedTime}`,
      "",
      `${t.labelNotes}:`,
      notes || t.noNotes,
    ].join("\n");

    window.location.href = `mailto:vettolab0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div className="calendar-shell">
        <div className="calendar-head">
          <button
            type="button"
            className="cal-nav"
            onClick={prevMonth}
            disabled={visibleMonth <= minMonth}
            aria-label={t.prevMonth}
          >
            ←
          </button>
          <p className="text-sm font-medium capitalize">
            {formatMonth(visibleMonth, locale)}
          </p>
          <button
            type="button"
            className="cal-nav"
            onClick={nextMonth}
            disabled={visibleMonth >= maxMonth}
            aria-label={t.nextMonth}
          >
            →
          </button>
        </div>

        <div className="calendar-grid calendar-weekdays">
          {WEEK_DAYS[locale].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {monthGrid.map((cell) => {
            const active = isSameDay(cell.date, selectedDate);
            return (
              <button
                key={cell.key}
                type="button"
                disabled={!cell.available}
                onClick={() => onSelectDate(cell.date)}
                className={`cal-day ${active ? "is-active" : ""} ${!cell.inMonth ? "is-out" : ""}`}
                aria-label={formatDateLabel(cell.date, locale)}
                aria-pressed={active}
              >
                {cell.date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs tracking-[0.14em] text-amber-200/80 uppercase">
          {t.availableTimes}
        </p>
        <div className="flex flex-wrap gap-2">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              className={`time-chip ${selectedTime === slot ? "is-active" : ""}`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <input
        aria-label={t.fullName}
        className="field"
        placeholder={t.fullName}
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          aria-label={t.email}
          className="field"
          type="email"
          placeholder={t.email}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          aria-label={t.guests}
          className="field"
          type="number"
          inputMode="numeric"
          min={1}
          max={12}
          placeholder={t.guests}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <textarea
        aria-label={t.specialRequests}
        className="field min-h-24 resize-none"
        placeholder={t.specialRequestsPlaceholder}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="rounded-2xl border border-amber-100/10 bg-black/20 px-4 py-3 text-sm text-stone-200">
        <p>
          <span className="font-medium text-amber-100">{t.summary}</span>{" "}
          {formatDateLabel(selectedDate, locale)} {t.at} {selectedTime} ·{" "}
          {guests} {isEn ? "guests" : "ospiti"}
        </p>
      </div>

      <button type="submit" className="btn-primary w-full">
        {t.submit}
      </button>
      <p className="text-xs text-stone-400" aria-live="polite">
        {t.callback}
      </p>
      {isSubmitted ? (
        <p className="text-xs text-amber-100/90" aria-live="polite">
          {t.requestReady}
        </p>
      ) : null}
    </form>
  );
}
