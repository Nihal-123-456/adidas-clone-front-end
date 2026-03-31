// footerData.ts

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerData: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Football Jerseys", href: "/products/football-jerseys" },
      { label: "Running Shoes", href: "/products/running-shoes" },
      { label: "Training Gear", href: "/products/training-gear" },
      { label: "Basketball", href: "/products/basketball" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "Outlets", href: "/products/outlet" },
      { label: "New Arrivals", href: "/products/new-arrivals" },
      { label: "Best Sellers", href: "/products/best-sellers" }
    ]
  },
  {
    title: "Sports",
    links: [
      { label: "Football", href: "/sports/football" },
      { label: "Running", href: "/sports/running" },
      { label: "Basketball", href: "/sports/basketball" },
      { label: "Training", href: "/sports/training" },
      { label: "Golf", href: "/sports/golf" },
      { label: "Tennis", href: "/sports/tennis" },
      { label: "Swimming", href: "/sports/swimming" }
    ]
  },
  {
    title: "Collection",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Affiliates", href: "/affiliates" },
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "/help" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Order Tracking", href: "/order-tracking" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Product Care", href: "/product-care" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Company Info",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Affiliates", href: "/affiliates" },
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  }
];