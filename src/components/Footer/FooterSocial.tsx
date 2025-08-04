import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';

type SocialLink = {
  name: string;
  icon: string;
};

export class FooterSocial extends React.PureComponent {
  private socials: SocialLink[] = [
    { name: 'Facebook', icon: '/icons/facebook.svg' },
    { name: 'Instagram', icon: '/icons/instagram.svg' },
    { name: 'YouTube', icon: '/icons/youtube.svg' },
  ];

  render() {
    return (
      <div className={s.column}>
        <div className={s.title}>Follow us</div>
        <ul className={s.socialList}>
          {this.socials.map(social => (
            <li key={social.name}>
              <span className={s.icon}>
                <Image src={social.icon} alt={social.name} width={24} height={24} />
              </span>
              {social.name}
            </li>
          ))}
        </ul>
        <div className={`${s.title} ${s.contactTitle}`}>Contact us</div>
        <div className={s.email}>hi@ratepunk.com</div>
      </div>
    );
  }
}
