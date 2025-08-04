import React from 'react';
import s from './Footer.module.scss';
import { FooterSitemap } from './FooterSitemap';
import { FooterSocial } from './FooterSocial';
import { FooterExtension } from './FooterExtension';
import { FooterApp } from './FooterApp';
import { FooterBrand } from './FooterBrand';
import { FooterLegal } from './FooterLegal';

export class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={s.footer}>
        <div className={s.wrapper}>
          <div className={s.grid}>
            <FooterSitemap />
            <FooterSocial />
            <FooterExtension />
            <FooterApp />
          </div>
          <div className={s.bottom}>
            <FooterBrand />
            <FooterLegal />
          </div>
        </div>
      </footer>
    );
  }
}
