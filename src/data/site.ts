import auraAsset from "@/assets/hyundai-aura-training-car.png.asset.json";
import ignisAsset from "@/assets/maruti-ignis-training-car.png.asset.json";
import celerioAsset from "@/assets/celerio-training-car.png.asset.json";
import justdialAwardAsset from "@/assets/justdial-users-choice-2025.png.asset.json";

export const site = {
  name: "KARGIL DRIVING SCHOOL",
  brand: { line1: "KARGIL", line2: "DRIVING SCHOOL" },
  address: "C-26, Radhey Enclave, Sri Ganganagar, Rajasthan",
  addressLines: ["C-26, Radhey Enclave,", "Sri Ganganagar, Rajasthan"],
  phone: "9414246464",
  phoneHref: "tel:9414246464",
  whatsappHref: "https://wa.me/919414246464",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("C-26, Radhey Enclave, Sri Ganganagar, Rajasthan"),
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("C-26, Radhey Enclave, Sri Ganganagar, Rajasthan") +
    "&output=embed",
  justdialUrl:
    "https://www.justdial.com/Sri-Ganganagar-Rajasthan/KARGIL-DRIVING-POINT-Jawahar-Nagar/9999PX154-X154-150505180001-A2S2_BZDET",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Training", href: "#training" },
  { label: "Our Cars", href: "#our-cars" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "KARGIL DRIVING SCHOOL",
  headline: ["LEARN TO DRIVE.", "DRIVE WITH CONFIDENCE."],
  supporting:
    "Professional driving training in Sri Ganganagar with experienced instruction, practical road experience and well-maintained cars.",
  image: auraAsset.url,
};

export const stats = [
  { value: "30+", label: "Years of Driving School Experience", count: 30, suffix: "+" },
  { value: "ROAD + HIGHWAY", label: "Practical Driving Experience" },
  { value: "WELL-MAINTAINED", label: "Training Vehicles" },
  { value: "SAFE & CONFIDENT", label: "Driving Approach" },
];

export const whyUs = [
  {
    icon: "CalendarDays",
    title: "30+ YEARS OF DRIVING TRAINING",
    text: "Three decades of trusted experience helping learners become confident, safe and responsible drivers.",
    featured: true,
    image: justdialAwardAsset.url,
  },
  {
    icon: "Award",
    title: "30+ YEARS OF EXPERIENCE",
    text: "Nearly three decades of teaching learners in Sri Ganganagar how to handle a car calmly and correctly.",
  },
  {
    icon: "Route",
    title: "ROAD & HIGHWAY TRAINING",
    text: "Training goes beyond basic vehicle control — you gain practical confidence on real city roads and highways.",
  },
  {
    icon: "UserCheck",
    title: "EXPERIENCED INSTRUCTION",
    text: "Patient, practical and confidence-building guidance paced to suit every learner.",
  },
  {
    icon: "Car",
    title: "WELL-MAINTAINED CARS",
    text: "Training vehicles are kept clean, comfortable and reliable so every lesson feels effortless.",
  },
  {
    icon: "ShieldCheck",
    title: "SAFETY-FIRST APPROACH",
    text: "Responsible driving, road awareness, traffic understanding and safe habits come first.",
  },
  {
    icon: "Trophy",
    title: "FOUNDER OF SRI GANGANAGAR'S FIRST DRIVING SCHOOL",
    text: "Built on the legacy of Sri Ganganagar's first driving school.",
  },
  {
    icon: "Users",
    title: "MALE & FEMALE DRIVING TUTORS",
    text: "Choose a male or female tutor for a comfortable and personalized learning experience.",
  },
];

export const training = [
  {
    icon: "Gauge",
    title: "BEGINNER TRAINING",
    text: "Learn the fundamentals of vehicle control, steering, braking, acceleration and basic road awareness.",
  },
  {
    icon: "Building2",
    title: "CITY DRIVING",
    text: "Confidently handle traffic, turns, intersections, parking and everyday road conditions.",
  },
  {
    icon: "Milestone",
    title: "HIGHWAY DRIVING",
    text: "Build confidence at higher speeds with lane discipline, safe overtaking and highway awareness.",
  },
  {
    icon: "SquareParking",
    title: "PARKING & CONTROL",
    text: "Practise reverse parking, parallel parking, turning, reversing and precise vehicle control.",
  },
  {
    icon: "TrafficCone",
    title: "ROAD SAFETY",
    text: "Understand traffic awareness, defensive driving principles and responsible road behaviour.",
  },
  {
    icon: "Sparkles",
    title: "CONFIDENCE BUILDING",
    text: "Progressive training that helps nervous or first-time learners get comfortable behind the wheel.",
  },
];

export const fleet = [
  { name: "Hyundai Aura", image: auraAsset.url, tag: "TRAINING VEHICLE", badge: null },
  { name: "Maruti Suzuki Ignis", image: ignisAsset.url, tag: "TRAINING VEHICLE", badge: null },
  {
    name: "Maruti Suzuki Celerio Automatic",
    image: celerioAsset.url,
    tag: "TRAINING VEHICLE",
    badge: "AUTOMATIC TRAINING AVAILABLE",
  },
];

export const steps = [
  { no: "01", title: "BOOK YOUR CLASS", text: "Call or WhatsApp us to discuss your requirements." },
  { no: "02", title: "MEET YOUR INSTRUCTOR", text: "Start your training with practical guidance." },
  {
    no: "03",
    title: "LEARN ON REAL ROADS",
    text: "Build confidence through practical driving experience.",
  },
  {
    no: "04",
    title: "DRIVE WITH CONFIDENCE",
    text: "Develop the skills and awareness needed to become a safer, more confident driver.",
  },
];

/**
 * Review themes summarised from the school's public Justdial listing.
 * These are themes, not quoted reviews, and carry no names or ratings.
 */
export const reviewThemes = [
  "Experienced trainers",
  "Friendly and polite staff",
  "Clean and hygienic cars",
  "Well-serviced vehicles",
  "Trustworthy instruction",
  "Reasonable pricing",
  "Confidence-building training",
  "Good highway and parking experience",
];

export const about = {
  heading: "ABOUT KARGIL DRIVING SCHOOL",
  copy: "With more than 30 years of experience in driving education, Kargil Driving School focuses on helping learners develop real-world driving confidence. From basic vehicle control to road, traffic, parking and highway experience, our approach is centered around practical learning, safety and patient instruction.",
  points: [
    "30+ years of experience",
    "Practical road training",
    "Highway experience",
    "Well-maintained training cars",
    "Confidence-focused instruction",
    "Safety-conscious learning",
  ],
  image: ignisAsset.url,
};
