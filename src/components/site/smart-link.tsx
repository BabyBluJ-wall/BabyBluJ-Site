import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

import { isExternal } from '@/data/site'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string }

/** Renders a router Link for internal paths and a new-tab anchor for external URLs. */
export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  // Paths come from the content module, so they can't be narrowed to the route union.
  return (
    <Link to={href as never} {...props}>
      {children}
    </Link>
  )
}
