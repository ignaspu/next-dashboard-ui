import React, { useState } from 'react';
import s from './ReferFriends.module.scss';
import { HowItWorksStep } from '@/types';

const HowItWorks: React.FC<{ steps: HowItWorksStep[] }> = ({ steps }) => (
  <section className={s.howItWorks}>
    <h3 className={s.howTitle}>How it works?</h3>
    <div className={s.stepsRow}>
      {steps.map((step, i) => (
        <div className={s.step} key={i}>
          <div className={s.stepIconWrapper}>
            <img src={step.icon} alt={step.title} className={s.stepIcon} />
          </div>
          <div>
            <div className={s.stepTitle}>{step.title}</div>
            <div className={s.stepDesc}>{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
