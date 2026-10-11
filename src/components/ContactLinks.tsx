import type { ReactNode } from "react";
import { isExternalContact, meetingHref, scrollToSection } from "@/lib/contact";
import { cn } from "@/lib/utils";

const clickable = "cursor-pointer relative z-20";

export function MeetingLink({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: ReactNode;
}) {
  const href = meetingHref(message);
  const opensWhatsapp = href.startsWith("http");

  if (!isExternalContact(href)) {
    return (
      <a href="#contato" onClick={(event) => scrollToSection(event, "contato")} className={cn(clickable, className)}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={opensWhatsapp ? "_blank" : undefined}
      rel={opensWhatsapp ? "noopener noreferrer" : undefined}
      className={cn(clickable, className)}
    >
      {children}
    </a>
  );
}

export function ScrollLink({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(event) => scrollToSection(event, targetId)}
      className={cn(clickable, className)}
    >
      {children}
    </a>
  );
}
