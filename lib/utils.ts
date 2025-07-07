import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadICS(reminder: {
  title: string;
  date: string;
  notes?: string;
}) {
  // Format date as YYYYMMDD
  const startDate = reminder.date.replace(/-/g, "");
  const now = new Date();
  const uid = `${Date.now()}@spousedetails.app`;
  
  // Create a more comprehensive ICS file
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Spouse Details App//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `SUMMARY:${reminder.title}`,
    `DESCRIPTION:${reminder.notes || "Reminder from Spouse Details App"}`,
    `DTSTART;VALUE=DATE:${startDate}`,
    `DTEND;VALUE=DATE:${startDate}`,
    `DTSTAMP:${now.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `CREATED:${now.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar; charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${reminder.title.replace(/[^a-zA-Z0-9]/g, "_")}.ics`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
}
