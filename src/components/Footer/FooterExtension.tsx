import React from 'react';
import s from './Footer.module.scss';

export class FooterExtension extends React.PureComponent {
  private extensions = ['Chrome Extension', 'Safari Extension', 'Firefox Extension'];

  render() {
    return (
      <div className={s.column}>
        <div className={s.title}>Get the extension</div>
        <ul className={s.list}>
          {this.extensions.map(ext => (
            <li key={ext}>{ext}</li>
          ))}
        </ul>
      </div>
    );
  }
}
