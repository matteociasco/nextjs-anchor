import Link from 'next/link';
import React from 'react';

const Anchor = ({
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
}) => {
  return React.createElement(Link, {
    href: href,
    as: as,
    locale: locale,
    passHref: passHref,
    prefetch: prefetch,
    replace: replace,
    scroll: scroll,
    shallow: shallow
  }, React.createElement("a", {
    className: className,
    style: style
  }, children));
};

export { Anchor };
//# sourceMappingURL=index.modern.js.map
