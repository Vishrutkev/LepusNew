// Premium Transam Carriers - Professional Mock Data

export const companyInfo = {
  name: "Transam Carriers Inc",
  tagline: "Here for the Long Haul",
  subtitle: "Premium Team Service, proudly delivering across Canada and the United States",
  description: "A full-service LTL, Truckload, and logistics provider with a strong focus on premium Team Service, delivering across Canada and the United States since 2006",
  phone: "+1 (416) 907-8101",
  email: "info@transamcarriers.com",
  emergencyLine: "+1 (416) 907-8101",
  address: "205 Doney Crescent, Concord ON L4K 1P6, Canada",
  establishedYear: "2006",
  hours: "Monday - Friday 08:00 - 18:00"
};

export const heroImages = {
  primary: "https://images.unsplash.com/photo-1577075473292-5f62dfae5522?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cnVja3xlbnwwfHx8Ymx1ZXwxNzUzMjM3NjY0fDA&ixlib=rb-4.1.0&q=85",
  secondary: "https://images.unsplash.com/photo-1585541571714-01aa54eaf7c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHx0cnVja3xlbnwwfHx8Ymx1ZXwxNzUzMjM3NjY0fDA&ixlib=rb-4.1.0&q=85",
  logistics: "https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3N8ZW58MHx8fGJsdWV8MTc1MzIzNzY3MHww&ixlib=rb-4.1.0&q=85",
  team: "https://images.unsplash.com/photo-1602750766769-8db8d49cc369?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx0cnVja3xlbnwwfHx8Ymx1ZXwxNzUzMjM3NjY0fDA&ixlib=rb-4.1.0&q=85",
  fleet: "https://images.unsplash.com/photo-1566449781267-88f21cc4af19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3N8ZW58MHx8fGJsdWV8MTc1MzIzNzY3MHww&ixlib=rb-4.1.0&q=85"
};

export const statistics = [
  {
    id: 1,
    number: 125000,
    display: "125K+",
    label: "Loads Delivered Annually",
    icon: "Truck",
    suffix: "+"
  },
  {
    id: 2,
    number: 99.92,
    display: "99.92%",
    label: "On-Time Delivery Rate",
    icon: "Clock",
    suffix: "%",
    precision: 2
  },
  {
    id: 3,
    number: 1850,
    display: "1,850+",
    label: "Active Corporate Clients",
    icon: "Users",
    suffix: "+"
  },
  {
    id: 4,
    number: 24,
    display: "24/7",
    label: "Customer Support Coverage",
    icon: "Headphones",
    suffix: "/7"
  },
  {
    id: 5,
    number: 3200,
    display: "3,200+",
    label: "Professional Drivers",
    icon: "Shield",
    suffix: "+"
  },
  {
    id: 6,
    number: 0.05,
    display: "<0.05%",
    label: "Claims Ratio",
    icon: "Award",
    suffix: "%",
    precision: 2
  }
];

export const partners = [
  {
    id: 1,
    name: "FGF Brands",
    description: "North America's leading food and beverage manufacturer",
    logo: "/api/placeholder/160/80",
    partnership_duration: "7+ years",
    category: "Food & Beverage",
    loads_per_year: "12,000+"
  },
  {
    id: 2,
    name: "Saputo Inc.",
    description: "Global leader in dairy products and ingredients",
    logo: "/api/placeholder/160/80", 
    partnership_duration: "5+ years",
    category: "Dairy & Food",
    loads_per_year: "8,500+"
  },
  {
    id: 3,
    name: "Maple Leaf Foods",
    description: "Premium protein and prepared foods company",
    logo: "/api/placeholder/160/80",
    partnership_duration: "4+ years",
    category: "Protein & Foods",
    loads_per_year: "6,800+"
  },
  {
    id: 4,
    name: "McCain Foods",
    description: "World's largest manufacturer of frozen potato products",
    logo: "/api/placeholder/160/80",
    partnership_duration: "6+ years",
    category: "Frozen Foods",
    loads_per_year: "9,200+"
  }
];

export const services = [
  {
    id: 1,
    title: "Full Truckload (FTL)",
    shortDescription: "Dedicated transportation for large shipments with priority handling and direct routing.",
    fullDescription: "Our Full Truckload services provide dedicated transportation solutions for large shipments requiring priority handling. With direct routing and no intermediate stops, your cargo reaches its destination faster and more securely than traditional shipping methods.",
    icon: "Truck",
    features: [
      "Direct routing with no stops",
      "Priority handling and loading",
      "Real-time GPS tracking",
      "Expedited delivery options",
      "Temperature-controlled trailers",
      "Dedicated customer support"
    ],
    benefits: [
      "Faster transit times",
      "Enhanced cargo security",
      "Reduced handling damage",
      "Flexible scheduling",
      "Cost-effective for large shipments"
    ],
    industries: ["Manufacturing", "Retail", "Automotive", "Food & Beverage"]
  },
  {
    id: 2,
    title: "Less Than Truckload (LTL)",
    shortDescription: "Cost-effective shipping for smaller freight with consolidated routing and flexible scheduling.",
    fullDescription: "Our LTL services offer cost-effective solutions for smaller freight shipments. Through our advanced consolidation network, we optimize routes and reduce costs while maintaining reliable delivery schedules.",
    icon: "Package",
    features: [
      "Consolidated routing optimization",
      "Flexible scheduling options",
      "Multi-stop delivery capability",
      "Competitive pricing structure",
      "Advanced tracking system",
      "Freight classification expertise"
    ],
    benefits: [
      "Reduced shipping costs",
      "Environmentally friendly",
      "Flexible shipment sizes",
      "Reliable delivery windows",
      "Professional handling"
    ],
    industries: ["E-commerce", "Small Business", "Healthcare", "Technology"]
  },
  {
    id: 3,
    title: "Cross-Border Solutions",
    shortDescription: "Seamless Canada-USA freight movement with customs expertise and border compliance.",
    fullDescription: "Our cross-border expertise ensures smooth freight movement between Canada and the USA. We handle all customs documentation, border compliance, and regulatory requirements to keep your shipments moving efficiently across international boundaries.",
    icon: "Globe",
    features: [
      "Customs documentation management",
      "Border compliance expertise",
      "FAST-approved drivers",
      "C-TPAT certified processes",
      "Bonded carrier services",
      "Duty and tax optimization"
    ],
    benefits: [
      "Faster border crossings",
      "Reduced compliance risks",
      "Expert customs handling",
      "Cost optimization",
      "Regulatory compliance"
    ],
    industries: ["Manufacturing", "Automotive", "Food & Beverage", "Retail"]
  },
  {
    id: 4,
    title: "Supply Chain Solutions",
    shortDescription: "End-to-end logistics management with warehousing, distribution, and inventory optimization.",
    fullDescription: "Comprehensive supply chain management services that go beyond transportation. We provide warehousing, distribution, inventory management, and logistics consulting to optimize your entire supply chain.",
    icon: "Warehouse",
    features: [
      "Warehousing and distribution",
      "Inventory management systems",
      "Order fulfillment services",
      "Supply chain optimization",
      "Technology integration",
      "Performance analytics"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved efficiency",
      "Scalable solutions",
      "Better inventory control",
      "Enhanced visibility"
    ],
    industries: ["E-commerce", "Retail", "Manufacturing", "Healthcare"]
  },
  {
    id: 5,
    title: "Expedited Services",
    shortDescription: "Time-critical shipping solutions for urgent deliveries and emergency logistics needs.",
    fullDescription: "When time is critical, our expedited services ensure your urgent shipments reach their destination quickly and safely. Our dedicated team and priority routing guarantee faster delivery times for time-sensitive cargo.",
    icon: "Zap",
    features: [
      "Same-day and overnight delivery",
      "Priority routing and handling",
      "Dedicated dispatch team",
      "Real-time status updates",
      "Emergency logistics support",
      "Direct delivery options"
    ],
    benefits: [
      "Fastest transit times",
      "Critical shipment priority",
      "Reduced downtime costs",
      "Emergency response capability",
      "Flexible timing options"
    ],
    industries: ["Healthcare", "Manufacturing", "Automotive", "Technology"]
  },
  {
    id: 6,
    title: "Temperature Controlled",
    shortDescription: "Specialized refrigerated transportation for temperature-sensitive goods and perishables.",
    fullDescription: "Our temperature-controlled logistics ensure the integrity of your temperature-sensitive products. From frozen foods to pharmaceuticals, we maintain precise temperature control throughout the entire transportation process.",
    icon: "Thermometer",
    features: [
      "Precise temperature monitoring",
      "Multi-temperature trailers",
      "Cold chain validation",
      "Temperature logging systems",
      "Specialized equipment",
      "Compliance documentation"
    ],
    benefits: [
      "Product integrity protection",
      "Regulatory compliance",
      "Reduced spoilage",
      "Quality assurance",
      "Extended shelf life"
    ],
    industries: ["Food & Beverage", "Pharmaceuticals", "Healthcare", "Agriculture"]
  }
];

export const aboutContent = {
  vision: "To revolutionize North American logistics by becoming the most trusted, innovative, and reliable transportation partner, setting new standards for excellence in supply chain solutions.",
  mission: "We deliver exceptional logistics and transportation services through cutting-edge technology, strategic partnerships, and our constellation of experienced professionals, ensuring every shipment reaches its destination with the speed and reliability of the stars.",
  values: [
    {
      title: "Swift & Reliable",
      description: "Like the Lepus constellation that has guided travelers for millennia, we ensure your cargo reaches its destination with unmatched speed, precision, and dependability.",
      icon: "Zap"
    },
    {
      title: "Safety First", 
      description: "Safety is our top priority. With industry-leading safety protocols and continuous driver training, we maintain one of the lowest accident rates in North America.",
      icon: "Shield"
    },
    {
      title: "Innovation & Technology",
      description: "We leverage the latest logistics technology, AI-powered route optimization, and real-time tracking to deliver superior service and transparency.",
      icon: "Cpu"
    },
    {
      title: "Customer-Centric",
      description: "Every decision we make is focused on exceeding customer expectations, building lasting partnerships, and driving mutual success.",
      icon: "Heart"
    }
  ],
  story: "Founded in 2018 with a vision to transform North American logistics, Lepus Group takes its name from the swift rabbit constellation that has guided travelers across the night sky for centuries. Just as ancient mariners relied on Lepus for navigation, today's businesses rely on us to navigate the complex landscape of modern logistics. Our founding team, comprised of industry veterans with over 100 combined years of experience, recognized the need for a transportation company that could combine traditional reliability with cutting-edge innovation. Starting with a modest fleet of 25 trucks, we've grown to become one of North America's most trusted logistics providers, handling over 125,000 loads annually while maintaining an industry-leading on-time delivery rate of 99.92%.",
  milestones: [
    { year: "2018", event: "Company founded with 25 trucks and a vision", achievement: "First 1,000 loads delivered" },
    { year: "2019", event: "Cross-border expansion into USA market", achievement: "10,000+ loads milestone" },
    { year: "2020", event: "Technology platform launch and COVID response", achievement: "Essential services recognition" },
    { year: "2021", event: "Fleet expansion to 500+ trucks", achievement: "50,000+ annual loads" },
    { year: "2022", event: "Temperature-controlled division launched", achievement: "99%+ on-time delivery achieved" },
    { year: "2023", event: "AI-powered route optimization implementation", achievement: "100,000+ annual loads" },
    { year: "2024", event: "Sustainability initiative and carbon reduction program", achievement: "125,000+ annual loads" }
  ]
};

export const contactInfo = {
  headquarters: {
    title: "Corporate Headquarters",
    address: "2500 Logistics Parkway, Suite 200",
    city: "Chicago, IL 60601",
    phone: companyInfo.phone,
    email: companyInfo.email,
    hours: "Monday - Friday: 7:00 AM - 7:00 PM CST"
  },
  operations: {
    title: "24/7 Operations Center", 
    address: "3800 Distribution Boulevard",
    city: "Dallas, TX 75201",
    phone: "+1 (888) 537-8748",
    email: "dispatch@lepusgroup.com",
    hours: "24/7 Dispatch & Customer Support"
  },
  emergency: {
    title: "Emergency Services",
    phone: companyInfo.emergencyLine,
    email: "emergency@lepusgroup.com",
    description: "Round-the-clock emergency logistics support for critical shipments and urgent situations."
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Chen",
    title: "VP of Supply Chain Operations",
    company: "FGF Brands",
    content: "Lepus Group has been instrumental in revolutionizing our supply chain efficiency. Their commitment to on-time delivery and proactive communication has helped us maintain our competitive edge in the food industry. The technology platform provides unprecedented visibility into our shipments.",
    rating: 5,
    shipments: "12,000+ annual loads",
    partnership: "7 years"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Director of Logistics", 
    company: "Saputo Inc.",
    content: "Working with Lepus Group feels like having an extension of our own logistics team. Their expertise in temperature-controlled transportation and cross-border operations has been crucial for our dairy supply chain. The 99.92% on-time delivery rate speaks for itself.",
    rating: 5,
    shipments: "8,500+ annual loads",
    partnership: "5 years"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    title: "Supply Chain Director",
    company: "Maple Leaf Foods",
    content: "The team at Lepus Group understands the complexities of food logistics better than anyone. Their safety-first approach and advanced tracking capabilities give us complete confidence in every shipment. They've helped us reduce transportation costs by 15% while improving service levels.",
    rating: 5,
    shipments: "6,800+ annual loads",
    partnership: "4 years"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Operations Manager",
    company: "McCain Foods",
    content: "Lepus Group's cross-border expertise has been invaluable for our North American operations. Their FAST-approved drivers and customs knowledge ensure our frozen products move seamlessly between Canada and the USA. Outstanding service and reliability.",
    rating: 5,
    shipments: "9,200+ annual loads",
    partnership: "6 years"
  }
];

export const awards = [
  {
    id: 1,
    title: "Carrier of the Year",
    organization: "Canadian Trucking Alliance",
    year: "2024",
    category: "Safety Excellence"
  },
  {
    id: 2,
    title: "Top 100 For-Hire Carriers",
    organization: "Transport Topics",
    year: "2023",
    category: "Growth & Innovation"
  },
  {
    id: 3,
    title: "Best Logistics Provider",
    organization: "Supply Chain Canada",
    year: "2023",
    category: "Customer Service"
  },
  {
    id: 4,
    title: "Safety Award",
    organization: "American Trucking Associations",
    year: "2024",
    category: "Accident Prevention"
  }
];

export const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" }
];