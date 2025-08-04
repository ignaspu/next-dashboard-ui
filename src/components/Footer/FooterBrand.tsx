import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';

export class FooterBrand extends React.PureComponent {
  render() {
    return (
      <div className={s.left}>
        <div>
          <Image src="/images/white_logo.svg" alt="Ratepunk" width={120} height={32} />
        </div>
        <div className={s.rating}>
          <span className={s.ratingText}>Excellent</span>
          <Image src="/images/rating.svg" alt="Ratepunk" width={278} height={32} />
        </div>
      </div>
    );
  }
}
