_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("iK8f"),o=t("mXGw"),a=t.n(o),c=a.a.createElement;function l(){return c(a.a.Fragment,null,c("h1",null,"Home page"),c(r.a,{href:"/about",style:{color:"red"}},"Go to about"))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var a=o(t("mXGw")),c=t("elyg"),l=t("nOHt"),u=t("vNVm"),s={};function i(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,m=e.shallow,w=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=a.Children.only(v),g=E&&"object"===typeof E&&E.ref,b=(0,u.useIntersection)({rootMargin:"200px"}),_=r(b,2),L=_[0],M=_[1],N=a.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(p),r="undefined"!==typeof y?y:t&&t.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&i(t,p,d,{locale:r})}),[d,p,M,y,n,t]);var k={ref:N,onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:l}))}(e,t,p,d,h,m,w,y)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),i(t,p,d,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){var C="undefined"!==typeof y?y:t&&t.locale,R=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(d,C,t&&t.locales,t&&t.domainLocales);k.href=R||(0,c.addBasePath)((0,c.addLocale)(d,C,t&&t.defaultLocale))}return a.default.cloneElement(E,k)};n.default=f},iK8f:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("YFqc"),o=t.n(r),a=t("mXGw"),c=t.n(a),l=function(e){var n=e.className,t=e.children,r=e.style,a=e.href,l=e.as,u=e.locale,s=e.passHref,i=e.prefetch,f=e.replace,p=e.scroll,d=e.shallow;return c.a.createElement(o.a,{href:a,as:l,locale:u,passHref:s,prefetch:i,replace:f,scroll:p,shallow:d},c.a.createElement("a",{className:n,style:r},t))}},vNVm:function(e,n,t){"use strict";var r=t("zoAU");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),i=r(s,2),f=i[0],p=i[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=t("mXGw"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var l=new Map}},[["/EDR",0,2,1]]]);