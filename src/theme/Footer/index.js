import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';
import tw from 'tailwind-styled-components';

const Container = tw.footer`
  py-16
`;

const Logo = tw.img`
  block
  mb-12
`;

const Grid = tw.div`
  grid
  gap-8
  md:grid-cols-6
`;

const Title = tw.h4`
  text-2xl
`;

const ListItem = tw.li`
  text-xl
`;

const Copyright = tw.div`
  mt-24
  pt-8
  border-solid
  border-l-0
  border-r-0
  border-b-0
  border-t-4
  border-t-brand-primary
`;

function FooterLink ({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true
  });

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? { href: prependBaseUrlToHref ? normalizedHref : href }
        : { to: toUrl }
      )}
      {...props}>
      {href && !isInternalUrl(href)
        ? (
            <span>
              {label}
              <IconExternalLink />
            </span>
          )
        : label
      }
    </Link>
  );
}

function FooterLogo ({ sources, alt, width, height }) {
  return (
    <ThemedImage
      className="footer__logo"
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function MultiColumnLinks ({ links }) {
  return (
    <>
      {links.map((linkItem, i) => (
        <div key={i}>
          <Title>{linkItem.title}</Title>
          <ul className="footer__items">
            {linkItem.items.map((item, key) =>
              item.html
                ? (
                    <ListItem
                      key={key}
                      className="footer__item" // Developer provided the HTML, so assume it's safe.
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )
                : (
                    <ListItem key={item.href || item.to} className="footer__item">
                      <FooterLink {...item} />
                    </ListItem>
                  )
            )}
          </ul>
        </div>
      ))}
    </>
  );
}

function SimpleLinks ({ links }) {
  return (
    <div className="footer__links">
      {links.map((item, key) => (
        <>
          {item.html
            ? (
                <span
                  key={key}
                  className="footer__link-item" // Developer provided the HTML, so assume it's safe.
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: item.html }}
                />
              )
            : (
                <FooterLink {...item} />
              )
          }
          {links.length !== key + 1 && (
            <span className="footer__link-separator">·</span>
          )}
        </>
      ))}
    </div>
  );
}

function isMultiColumnFooterLinks (links) {
  return 'title' in links[0];
}

function Footer () {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src)
  };

  if (!footer) {
    return null;
  }

  return (
    <Container className={clsx('footer', { 'footer--dark': footer.style === 'dark' })}>
      <div className="container container-fluid">
        <Logo height={64} src="/img/feathers-logo-horizontal-inverted.svg" />
        {links &&
          links.length > 0 &&
            (isMultiColumnFooterLinks(links)
              ? (
                  <Grid>
                    <MultiColumnLinks links={links} />
                  </Grid>
                )
              : (
                  <div className="footer__links text--center">
                    <SimpleLinks links={links} />
                  </div>
                )
            )
        }
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href
                  ? (
                      <Link href={logo.href} className={styles.footerLogoLink}>
                        <FooterLogo
                          alt={logo.alt}
                          sources={sources}
                          width={logo.width}
                          height={logo.height}
                        />
                      </Link>
                    )
                  : (
                      <FooterLogo alt={logo.alt} sources={sources} />
                    )
                }
              </div>
            )}
            {copyright
              ? (
                  <Copyright
                    className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: copyright }}
                  />
                )
              : null
            }
          </div>
        )}
      </div>
    </Container>
  );
}

export default React.memo(Footer);
