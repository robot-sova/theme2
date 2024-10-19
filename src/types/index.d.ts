export type FeatureItem = {
  enable: boolean;
  icon?: string; // Optional string for icon path
  image?: string; // Optional string for image path
  title: string;
  description: string;
};

export type Features = {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    enable: boolean;
    title: string;
    button: Button;
  };
  list: FeatureItem[];
};

export type Testimonials = {
  title: string;
  subtitle: string;
  list: TabItem[];
};

export type TabItem = {
  tab_button: TabButton;
  tab_content: TabContent[];
};

export type TabButton = {
  icon: string;
  title: string;
};

export type TabContent = {
  title: string;
  image: string;
  description: string;
};

export type Client = {
  image: string;
  alt: string;
};

export type Clients = {
  enable: boolean;
  title: string;
  list: Client[];
};

export type AboutSection = {
  enable: boolean;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  list?: string[]; // Optional list of items
  video?: {
    enable: boolean;
    link: string;
  };
};

export type About = AboutSection[];

type PricingItem = {
  type: string; // "monthly" or "yearly"
  image: string;
  title_prefix: string;
  title: string;
  plan_prefix: string;
  plan: string;
  price: string;
  price_suffix: string;
  button: Button;
  list: string[];
};

export type HomeBannerType = {
  title: string;
  buttons: Button[];
  benefits: string[];
};

export type Statistic = {
  title: string;
  description: string;
};

export type AboutBanner = {
  enable: boolean;
  title: string;
  image: string;
  description: string;
  buttons: Button[];
  statistics: Statistic[];
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
  style?: string; // Optional style string for the button (e.g., "btn-primary")
};

export type WhyJoinUsItem = {
  icon: string;
  title: string;
  description: string;
};

export type WhyJoinUs = {
  enable: boolean;
  title: string;
  subtitle: string;
  list: WhyJoinUsItem[];
};

export type Rating = {
  icon: string;
};

export type ClientFeedback = {
  enable: boolean;
  title: string;
  subtitle: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
  image: string;
  quote: string;
  author: string;
  designation: string;
  rating: Rating[];
};

export type TeamMember = {
  name: string;
  designation: string;
  image: string;
  socials: { name: string; link: string }[];
};

export type Team = {
  enable: boolean;
  title: string;
  subtitle: string;
  members: TeamMember[];
};

export type Icon = {
  value: string; // Font Awesome icon name (e.g., "FaCircleCheck")
  style?: string; // Optional style string for the icon (e.g., "text-primary")
};

export type RowValue = {
  value: string; // String value for basic text content
  title?: string;
  icon?: Icon;
  button?: Button;
};

export type Row = {
  title: string;
  basic: RowValue;
  standard: RowValue;
  executive: RowValue;
};

export type Plan = {
  title?: string; // Optional title for the plan (used for Basic Plan)
  price?: string; // Optional price string (used for Basic and Standard plans)
};

export type PricingCompareType = {
  enable: boolean;
  title: string;
  subtitle: string;
  columns: Plan[];
  rows: Row[];
};

export type image = {
  src: string;
  position: string;
};

export type Gallery = {
  enable: boolean;
  title: string;
  subtitle: string;
  images: image[];
};

export type Job = {
  title: string;
  location: string;
  hours: string;
  short_description: string;
  categories: string[];
  link: string;
};

export type Stat = {
  count: string;
  rating?: number;
  rating_description: string;
  source: string;
  image: string;
  alt: string;
};

export type AboutUs = {
  enable: boolean;
  title: string;
  subtitle: string;
  description: string;
  button: Button;
  stats: Stat[];
};

// Features Page
// ---------------------------------------------

export type FeaturesBannerType = {
  enable: boolean;
  title: string;
  subtitle: string;
  description: string;
  stats: { title: string; value: string, suffix: string }[];
  leads: {
    title: string;
    value: string;
    description: string;
  };
  graph: {
    title: string;
    value: string;
  };
  team_members: TeamMember[];
};

export type FeaturesContentBlock = {
  image: string;
  enable: boolean;
  title: string;
  subtitle: string;
  description: string;
  list: string[];
};

export type Integrations = {
  image: string;
  enable: boolean;
  title: string;
  subtitle: string;
  description: string;
  button: Button;
};
