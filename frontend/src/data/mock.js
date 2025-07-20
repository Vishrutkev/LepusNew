// Mock data for Lepus Group logistics website

export const companyInfo = {
  name: "Lepus Group",
  tagline: "Swift as the constellation, reliable as the stars",
  description: "Leading transportation and brokerage solutions across North America",
  phone: "+1 (555) 123-4567",
  email: "info@lepusgroup.com",
  address: "1234 Logistics Way, Suite 100, Chicago, IL 60601"
};

export const statistics = [
  {
    id: 1,
    number: "75,000+",
    label: "Loads Delivered",
    icon: "Truck"
  },
  {
    id: 2,
    number: "99.8%",
    label: "On-Time Delivery",
    icon: "Clock"
  },
  {
    id: 3,
    number: "850+",
    label: "Satisfied Clients",
    icon: "Users"
  },
  {
    id: 4,
    number: "24/7",
    label: "Customer Support",
    icon: "Headphones"
  }
];

export const partners = [
  {
    id: 1,
    name: "FGF Brands",
    description: "Leading food and beverage manufacturer",
    logo: "/api/placeholder/120/60",
    partnership_duration: "5+ years"
  },
  {
    id: 2,
    name: "Saputo",
    description: "Dairy products and ingredients leader",
    logo: "/api/placeholder/120/60", 
    partnership_duration: "3+ years"
  }
];

export const services = [
  {
    id: 1,
    title: "Full Truckload (FTL)",
    description: "Dedicated transportation for large shipments with priority handling and direct routing.",
    icon: "Truck",
    features: ["Direct routing", "Priority handling", "Real-time tracking", "Expedited options"]
  },
  {
    id: 2,
    title: "Less Than Truckload (LTL)",
    description: "Cost-effective shipping for smaller freight with consolidated routing and flexible scheduling.",
    icon: "Package",
    features: ["Cost-effective", "Consolidated routing", "Flexible scheduling", "Multi-stop delivery"]
  },
  {
    id: 3,
    title: "Freight Brokerage",
    description: "Expert logistics coordination connecting shippers with reliable carriers across North America.",
    icon: "Network",
    features: ["Carrier network", "Rate optimization", "Load matching", "Compliance management"]
  },
  {
    id: 4,
    title: "Supply Chain Solutions",
    description: "End-to-end logistics management with warehousing, distribution, and inventory optimization.",
    icon: "Warehouse",
    features: ["Warehousing", "Distribution", "Inventory management", "Process optimization"]
  }
];

export const aboutContent = {
  vision: "To be North America's most trusted logistics partner, connecting businesses with swift, reliable, and innovative transportation solutions that drive growth and success.",
  mission: "We leverage cutting-edge technology, strategic partnerships, and our constellation of experienced professionals to deliver exceptional logistics services that exceed expectations and build lasting relationships.",
  values: [
    {
      title: "Speed & Reliability",
      description: "Like the swift Lepus constellation that guided ancient travelers, we ensure your cargo reaches its destination quickly and safely."
    },
    {
      title: "Trust & Transparency", 
      description: "We build lasting partnerships through honest communication, competitive pricing, and unwavering commitment to excellence."
    },
    {
      title: "Innovation & Technology",
      description: "Embracing the latest logistics technology to optimize routes, reduce costs, and provide real-time visibility throughout the supply chain."
    }
  ],
  story: "Founded with the vision of revolutionizing North American logistics, Lepus Group takes its name from the swift rabbit constellation. Just as Lepus has guided travelers across the night sky for centuries, we guide your freight across the continent with unmatched speed and precision. Our team of logistics experts combines decades of industry experience with innovative technology to deliver solutions that drive business success."
};

export const contactInfo = {
  headquarters: {
    title: "Headquarters",
    address: "1234 Logistics Way, Suite 100",
    city: "Chicago, IL 60601",
    phone: "+1 (555) 123-4567",
    email: "info@lepusgroup.com"
  },
  operations: {
    title: "Operations Center", 
    address: "5678 Distribution Blvd",
    city: "Dallas, TX 75201",
    phone: "+1 (555) 234-5678",
    email: "operations@lepusgroup.com"
  },
  hours: {
    office: "Monday - Friday: 8:00 AM - 6:00 PM CST",
    dispatch: "24/7 Dispatch & Customer Support",
    emergency: "Emergency Line: +1 (555) 911-LOAD"
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Logistics Manager",
    company: "FGF Brands",
    content: "Lepus Group has transformed our supply chain efficiency. Their swift delivery times and reliable service have helped us maintain our competitive edge in the food industry.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    title: "Operations Director", 
    company: "Saputo",
    content: "The team at Lepus Group understands our dairy logistics needs perfectly. Their 24/7 support and real-time tracking give us complete confidence in every shipment.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    title: "Supply Chain VP",
    company: "Regional Manufacturer",
    content: "Working with Lepus Group feels like having an extension of our own team. Their proactive communication and problem-solving approach is unmatched in the industry.",
    rating: 5
  }
];

export const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];