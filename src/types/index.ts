export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
};

export type Value = {
  title: string;
  description: string;
};
