import React, { useState } from 'react';
import s from './ReferFriends.module.scss';
import { FAQItem } from '@/types';

const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [faq, setFaq] = React.useState(items);

  const toggle = (idx: number) => {
    setFaq(faq => faq.map((item, i) => (i === idx ? item.toggle() : item)));
  };

  return (
    <section className={s.faq}>
      <h3>FAQ</h3>
      <div className={s.faqList}>
        {faq.map((item, idx) => (
          <div className={s.faqItem} key={idx}>
            <button
              className={`${s.faqQ} ${item.expanded ? s.open : ''}`}
              onClick={() => toggle(idx)}
              aria-expanded={item.expanded}
            >
              {item.question}
              <span className={s.arrow}>
                <img src="/icons/arrow.svg" alt="Arrow" />
              </span>
            </button>
            <div
              className={`${s.faqAWrapper} ${item.expanded ? s.open : ''}`}
              aria-hidden={!item.expanded}
            >
              <div className={s.faqA}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
