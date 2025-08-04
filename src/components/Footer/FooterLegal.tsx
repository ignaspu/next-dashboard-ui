import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';

export class FooterLegal extends React.PureComponent {
  render() {
    return (
      <div className={s.legal}>
        <div className={s.copyright}>© 2025 RatePunk. All Rights Reserved.</div>
        <div className={s.right}>
          <a href="#" className={s.link}>
            Privacy Policy
          </a>
          <a href="#" className={s.link}>
            Terms & Conditions
          </a>
        </div>
      </div>
    );
  }
}
