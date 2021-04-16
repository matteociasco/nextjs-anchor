import Link, { LinkProps } from 'next/link'
import React from 'react'

export type AnchorProps = LinkProps & {
  className?: string
  children: any
  style?: React.StyleHTMLAttributes<any>
}

export const Anchor = ({
  className,
  children,
  style,
  href,
  as,
  locale,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow
}: AnchorProps) => {
  return (
    <Link
      href={href}
      as={as}
      locale={locale}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a className={className} style={style}>
        {children}
      </a>
    </Link>
  )
}
