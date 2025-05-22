export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  qualifications: string;
  experience: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}