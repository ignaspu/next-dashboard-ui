export class HowItWorksStep {
  icon: string;
  title: string;
  description: string;

  constructor(icon: string, title: string, description: string) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

export class ReferralInfo {
  title: string;
  description: string;
  link: string;

  constructor(title: string, description: string, link: string) {
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

export class FAQItem {
  question: string;
  answer: string;
  expanded: boolean;

  constructor(question: string, answer: string = '', expanded: boolean = false) {
    this.question = question;
    this.answer = answer;
    this.expanded = expanded;
  }

  toggle(): FAQItem {
    return new FAQItem(this.question, this.answer, !this.expanded);
  }
}

export interface SidebarIcon {
  src: string;
  width?: number;
  height?: number;
}
export interface SidebarSubItem {
  text: string;
  href: string;
  icon: SidebarIcon;
}
export interface SidebarItemData {
  text: string;
  href: string;
  icon: SidebarIcon;
  subItem?: SidebarSubItem[];
}

export type Data = {
  success: boolean;
  message: string;
};
