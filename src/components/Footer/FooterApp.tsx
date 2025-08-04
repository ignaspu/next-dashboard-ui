import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';

export class FooterApp extends React.PureComponent {
  render() {
    return (
      <div className={s.column}>
        <div className={s.title}>Get the app</div>
        <div className={s.qrWrap}>
          <Image src="/images/qr-code.png" alt="QR code" width={140} height={140} />
        </div>
        <div className={s.appButtons}>
          <Image src="/images/applestore.svg" alt="App Store" width={180} height={43} />
          <Image src="/images/googleplay.svg" alt="Google Play" width={180} height={43} />
        </div>
      </div>
    );
  }
}
