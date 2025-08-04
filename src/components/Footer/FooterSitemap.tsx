import React from 'react';
import s from './Footer.module.scss';

export class FooterSitemap extends React.PureComponent {
  private links = ['Flight Deals', 'Hotels', 'Extension', 'Press', 'Blog', 'Reviews'];

  render() {
    return (
      <div className={s.column}>
        <div className={s.title}>Sitemap</div>
        <ul className={s.list}>
          {this.links.map(link => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
    );
  }
}
