import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import s from './SideBar.module.scss';
import { SidebarItemData } from '@/types';

const icons = {
  airplane: { src: '/icons/Airplane.svg', width: 24, height: 24 },
  tree: { src: '/icons/tree.svg', width: 24, height: 24 },
  fly: { src: '/icons/fly.svg', width: 24, height: 24 },
  plugin: { src: '/icons/plugin.svg', width: 24, height: 24 },
  price: { src: '/icons/price.svg', width: 24, height: 24 },
  bell: { src: '/icons/bell.svg', width: 24, height: 24 },
  refund: { src: '/icons/refund.svg', width: 24, height: 24 },
  human: { src: '/icons/human.svg', width: 24, height: 24 },
  wallet: { src: '/icons/wallet.svg', width: 24, height: 24 },
  add: { src: '/icons/add.svg', width: 24, height: 24 },
  luggage: { src: '/icons/luggage.svg', width: 24, height: 24 },
  voucher: { src: '/icons/voucher.svg', width: 24, height: 24 },
};

const travelDeals: SidebarItemData[] = [
  { text: 'Flight Deals', href: '/', icon: icons.airplane },
  { text: 'Bundle Deals', href: '/', icon: icons.tree },
  { text: 'Departure Airports', href: '/', icon: icons.fly },
  { text: 'Deals Upgrades', href: '/', icon: icons.plugin },
];

const savingTools: SidebarItemData[] = [
  { text: 'Price Tracking', href: '/', icon: icons.price },
  { text: 'Rebooking', href: '/', icon: icons.bell },
  { text: 'Cashback', href: '/', icon: icons.refund },
];

const account: SidebarItemData[] = [
  { text: 'My Profile', href: '/', icon: icons.human },
  {
    text: 'My Wallet',
    href: '/',
    icon: icons.wallet,
    subItem: [{ text: 'Refer Friends', href: '/refer-friends', icon: icons.add }],
  },
  { text: 'My Bookings', href: '/', icon: icons.luggage },
  { text: 'My Vouchers', href: '/', icon: icons.voucher },
];

const SidebarSection: React.FC<{
  label: string;
  items: SidebarItemData[];
  currentPath: string;
}> = ({ label, items, currentPath }) => (
  <div>
    <span className={s.sectionLabel}>{label}</span>
    {items.map(item => (
      <SidebarItem key={item.text} item={item} currentPath={currentPath} />
    ))}
  </div>
);

const SidebarItem: React.FC<{ item: SidebarItemData; currentPath: string }> = ({
  item,
  currentPath,
}) => {
  const isSubActive = item.subItem?.some(sub => sub.href === currentPath) ?? false;
  const [open, setOpen] = useState(isSubActive);

  useEffect(() => {
    if (item.subItem) {
      setOpen(isSubActive);
    }
  }, [currentPath]);

  const isActive = item.href === currentPath;

  if (item.subItem) {
    return (
      <div>
        <button
          className={`${s.item} ${isActive || isSubActive ? s.active : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          style={{ width: '100%' }}
        >
          <img
            src={item.icon.src}
            alt={item.text}
            className={s.icon}
            width={item.icon.width || 24}
            height={item.icon.height || 24}
          />
          <span className={s.text}>{item.text}</span>
        </button>
        {(open || isSubActive) && (
          <div className={s.subItem}>
            {item.subItem.map(sub => (
              <a
                key={sub.text}
                href={sub.href}
                className={`${s.subLink} ${sub.href === currentPath ? s.active : ''}`}
                style={{ background: sub.href === currentPath ? '#e6faff' : undefined }}
              >
                <img
                  src={sub.icon.src}
                  alt={sub.text}
                  className={s.icon}
                  width={sub.icon.width || 24}
                  height={sub.icon.height || 24}
                />
                <span className={s.subText}>{sub.text}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a href={item.href} className={`${s.item} ${isActive ? s.active : ''}`}>
      <img
        src={item.icon.src}
        alt={item.text}
        className={s.icon}
        width={item.icon.width || 24}
        height={item.icon.height || 24}
      />
      <span className={s.text}>{item.text}</span>
    </a>
  );
};

const SideBar: React.FC<{ isMobile?: boolean; onNavigate?: () => void }> = () => {
  const { pathname } = useRouter();

  return (
    <aside className={s.sidebar}>
      <div className={s.wrapper}>
        <SidebarSection label="TRAVEL DEALS" items={travelDeals} currentPath={pathname} />
        <SidebarSection label="SAVING TOOLS" items={savingTools} currentPath={pathname} />
        <SidebarSection label="ACCOUNT" items={account} currentPath={pathname} />
      </div>
    </aside>
  );
};

export default SideBar;
