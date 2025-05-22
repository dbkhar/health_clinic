import { Doctor, Service, Testimonial, BlogPost } from '../types';

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    qualifications: "MD, FACC",
    experience: "15+ years",
    description: "Dr. Johnson specializes in cardiovascular health and preventive cardiology with a focus on holistic heart care."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    imageUrl: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    qualifications: "MD, PhD",
    experience: "12+ years",
    description: "Dr. Chen is an expert in neurological disorders with specialized training in stroke prevention and treatment."
  },
  {
    id: 3,
    name: "Dr. Lisa Rodriguez",
    specialty: "Pediatrics",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    qualifications: "MD, FAAP",
    experience: "10+ years",
    description: "Dr. Rodriguez provides compassionate care for children of all ages with a special interest in developmental pediatrics."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Family Medicine",
    imageUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    qualifications: "MD, AAFP",
    experience: "18+ years",
    description: "Dr. Wilson focuses on preventive care and managing chronic conditions for patients of all ages."
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Preventive Care",
    description: "Comprehensive health screenings and preventive services to maintain optimal health and detect issues early.",
    icon: "Heart"
  },
  {
    id: 2,
    title: "Specialty Consultations",
    description: "Expert consultations across multiple specialties including cardiology, neurology, pediatrics, and more.",
    icon: "Stethoscope"
  },
  {
    id: 3,
    title: "Diagnostic Testing",
    description: "Advanced diagnostic services including laboratory tests, imaging, and specialized screenings.",
    icon: "Microscope"
  },
  {
    id: 4,
    title: "Chronic Disease Management",
    description: "Personalized care plans for patients with chronic conditions to improve quality of life.",
    icon: "ActivitySquare"
  },
  {
    id: 5,
    title: "Telemedicine",
    description: "Virtual consultations for convenient access to healthcare from the comfort of your home.",
    icon: "Video"
  },
  {
    id: 6,
    title: "Wellness Programs",
    description: "Customized wellness programs focusing on nutrition, exercise, and mental health.",
    icon: "HeartPulse"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Smith",
    comment: "Dr. Johnson's expertise in cardiology helped me recover quickly after my heart surgery. The entire staff was supportive throughout my treatment.",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Torres",
    comment: "Dr. Rodriguez has been amazing with my children. She takes the time to listen and explain everything thoroughly. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    comment: "The telemedicine service was convenient and efficient. Dr. Wilson addressed all my concerns without me having to leave home.",
    rating: 4
  },
  {
    id: 4,
    name: "Sophia Kim",
    comment: "The wellness program has transformed my approach to health. I've seen significant improvements in my overall wellbeing.",
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Heart Health: Prevention Tips",
    excerpt: "Learn the essential steps to maintain a healthy heart and prevent cardiovascular disease.",
    date: "June 15, 2025",
    imageUrl: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "The Importance of Childhood Vaccinations",
    excerpt: "Why vaccinations are crucial for your child's health and the community at large.",
    date: "June 10, 2025",
    imageUrl: "https://images.pexels.com/photos/5863365/pexels-photo-5863365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Managing Stress in a Fast-Paced World",
    excerpt: "Effective strategies to handle stress and maintain mental wellbeing in today's hectic environment.",
    date: "June 5, 2025",
    imageUrl: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];