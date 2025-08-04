import React, { useState } from 'react';
import s from './ReferFriends.module.scss';
import { ReferralInfo } from '@/types';

const ReferralCard: React.FC<{ info: ReferralInfo }> = ({ info }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'success' | 'error' | 'idle'>('idle');
  const [helperMsg, setHelperMsg] = useState('');

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleGetLink = async () => {
    if (!email) {
      setHelperMsg('Email address is required.');
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setHelperMsg('Invalid email format.');
      setStatus('error');
      return;
    }

    try {
      const resp = await fetch('/api/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await resp.json();

      if (!resp.ok || !data.success) {
        throw new Error(data.message || 'Failed to send invitation');
      }

      setStatus('success');
      setHelperMsg(data.message);
    } catch (err) {
      setStatus('error');
      setHelperMsg('Error sending link, please try again.');
    }
  };

  return (
    <div className={s.referralCard}>
      <img src="images/image.png" alt="Image" className={s.image} />
      <h2 className={s.subTitle}>{info.title}</h2>
      <p className={s.desc}>{info.description}</p>
      <div className={s.linkRow}>
        <div
          className={s.linkInfo}
          style={status === 'error' ? { border: '1px solid #ff6969' } : {}}
        >
          <div className={s.linkLabel}>Email address</div>
          <input
            type="email"
            className={s.linkValue}
            placeholder="Enter your email address"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setStatus('idle');
              setHelperMsg('');
            }}
          />
        </div>
        <button className={s.copyBtn} onClick={handleGetLink}>
          Get Link
        </button>
      </div>
      {status !== 'idle' && (
        <div className={status === 'success' ? s.successMsg : s.errorMsg}>{helperMsg}</div>
      )}
    </div>
  );
};

export default ReferralCard;
