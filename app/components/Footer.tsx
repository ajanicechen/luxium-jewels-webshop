import { NavLink } from '@remix-run/react';
import type { FooterQuery, HeaderQuery } from 'storefrontapi.generated';
import { useRootLoaderData } from '~/root';
import { SocialMedia } from './atoms/SocialMediaBtn';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export function Footer({
  menu,
  shop,
}: FooterQuery & { shop: HeaderQuery['shop'] }) {
  return (
    <footer className="footer">
      {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )}
    </footer>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
}) {
  const { publicStoreDomain } = useRootLoaderData();

  const [isOpen, setIsOpen] = React.useState(false);

  function setClass() { return (!isOpen) ? 'f-section-toggle' : 'f-section-content' }
  function setChevron() { return (!isOpen) ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} /> }

  return (
    <>
      <div className="footer-menu" role="navigation">
        {/* cust. support */}
        <div className='f-section-wrapper'>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className='f-section-btn'
          >
            Customer Support
            {setChevron()}
          </button>
          <ul className={setClass()}>
            {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
              if (!item.url) return null;
              // if the url is internal, we strip the domain
              const url =
                item.url.includes('myshopify.com') ||
                  item.url.includes(publicStoreDomain) ||
                  item.url.includes(primaryDomainUrl)
                  ? new URL(item.url).pathname
                  : item.url;
              const isExternal = !url.startsWith('/');
              return isExternal ? (
                <li key={item.id}><a href={url} rel="noopener noreferrer" target="_blank">
                  {item.title}
                </a></li>
              ) : (
                <li key={item.id}><NavLink
                  end
                  key={item.id}
                  prefetch="intent"
                  to={url}
                >
                  {item.title}
                </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* product categories*/}
        <div className='f-section-wrapper'>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className='f-section-btn'
          >
            Discover
            {setChevron()}
          </button>
          <ul className={setClass()}>
            <li key='Earrings'>Earrings</li>
            <li key='Rings'>Rings</li>
            <li key='Necklaces'>Necklaces</li>
          </ul>
        </div>

      {/* shop info */}
      <div className='f-section-wrapper'>
        <button
          onClick={() => setIsOpen((open) => !open)}
          className='f-section-btn'
        >
          Luxium Jewels
          {setChevron()}
        </button>
        <ul className={setClass()}>
          <li key='mail'>info@luxium-jewels.com</li>
          <li key='phone'>010-1234567</li>
          <li key='location'>Rotterdam</li>
        </ul>
      </div>
    </div >
      <SocialMedia />
    </>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}
