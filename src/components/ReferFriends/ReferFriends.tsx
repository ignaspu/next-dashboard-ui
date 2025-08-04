import React, { useState } from 'react';
import s from './ReferFriends.module.scss';
import { FAQItem, HowItWorksStep, ReferralInfo } from '@/types';
import ReferralCard from './ReferralCard';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';

const referralInfo = new ReferralInfo(
  'Get up to $15 for every friend you refer to RatePunk!',
  "When someone signs up with your unique referral link, both you and your friend will receive $5 in your RatePunk wallets. If your friend subscribes to RatePunk, you'll get an additional $10 that will be added to your wallet balance.",
  'Enter your email address'
);

const howItWorksSteps = [
  new HowItWorksStep(
    '/icons/Link.svg',
    'Share your link',
    'Invite your friends to join RatePunk using your personal referral link.'
  ),
  new HowItWorksStep(
    '/icons/Gift.svg',
    'Earn $5 each',
    "You'll both receive $5 when your friend signs up for RatePunk using your referral link."
  ),
  new HowItWorksStep(
    '/icons/Cost.svg',
    'Earn $10 rewards',
    "If your friend becomes a paid subscriber to RatePunk, you'll get an extra $10 reward."
  ),
];

const faqData = [
  new FAQItem(
    'Very long question name?',
    'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.',
    false
  ),
  new FAQItem(
    'Very long question name?',
    'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.',
    true
  ),
  new FAQItem(
    'Very long question name?',
    'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.',
    false
  ),
  new FAQItem(
    'Very long question name?',
    'Lorem ipsum dolor sit amet consectetur. Blandit hac semper cras at tellus aliquam sit. Massa justo nullam ut auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras. Venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.',
    false
  ),
];

const ReferFriends: React.FC = () => (
  <div className={s.mainContent}>
    <h1 className={s.pageTitle}>Refer Friends and Get Real Rewards</h1>
    <ReferralCard info={referralInfo} />
    <HowItWorks steps={howItWorksSteps} />
    <FAQ items={faqData} />
  </div>
);

export default ReferFriends;
