import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { siteContact } from "@/lib/site-contact"

type PhoneLinkProps = {
  href?: string
  title?: string
  className?: string
  children: ReactNode
}

export function PhoneLink({ href, title, className, children }: PhoneLinkProps) {
  const tel = href ?? siteContact.phoneHref
  return (
    <Link
      href={tel}
      title={title}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 transition active:opacity-90",
        className
      )}
    >
      {children}
    </Link>
  )
}
