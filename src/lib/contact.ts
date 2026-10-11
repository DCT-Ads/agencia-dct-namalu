import type { MouseEvent } from "react";

/**
 * Contato público da agência.
 * WhatsApp: DDI + DDD + número, só dígitos (ex.: 5511987654321).
 * Quando o número estiver vazio, os botões de reunião usam o e-mail.
 */
export const WORK_EMAIL = "Lorynbegui@gmail.com";
/** +55 41 99274-6873. O 0 depois do 55 não entra no link internacional. */
export const WHATSAPP_NUMBER = "5541992746873";
export const WHATSAPP_DISPLAY = "(41) 99274-6873";

const MEETING_SUBJECT = "Solicitar reunião — DCT Namalu Ads";

export function whatsappLink(message: string): string | null {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (digits.length < 12) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body: string): string | null {
  const email = WORK_EMAIL.trim();
  if (!email.includes("@")) return null;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** WhatsApp quando houver número; caso contrário, e-mail; por último, a seção de contato. */
export function meetingHref(message: string): string {
  return whatsappLink(message) ?? emailLink(MEETING_SUBJECT, message) ?? "#contato";
}

export function isExternalContact(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function openExternal(href: string, newTab = false) {
  const link = document.createElement("a");
  link.href = href;
  if (newTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState(null, "", `#${id}`);
}
