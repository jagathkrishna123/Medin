// src/assets/assets.js

import { Brain, FlaskConical, HeartPulse, Baby } from "lucide-react";
import { TbDental } from "react-icons/tb";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { GiCaduceus } from "react-icons/gi";
import { FaUserInjured } from "react-icons/fa";
import { FaUserMd, FaVirus, FaSpa } from 'react-icons/fa';
 

export const departmentsData = [
  {
    id: 1,
    name: "Psychiatry",
    icon: Brain,
    description1:
      "We provide a comprehensive continuum of mental health and substance abuse services that include both inpatient an ambulatory services with varying levels of intensity.",
    description2:
      "The treatment programs are designed to meet the needs of dual diagnosis.",
  },

  {
    id: 2,
    name: "Laboratory",
    icon: FlaskConical,
    description1:
      "Our laboratory offers a wide range of analytical services using state-of-the-art equipment to provide accurate and timely results for diagnostic purposes.",
    description2:
      "We ensure high standards of quality control and precision in every test conducted.",
  },

  {
    id: 3,
    name: "Dental Medicine",
    icon: TbDental,
    description1:
      "Comprehensive dental care services ranging from preventive checkups to advanced restorative and cosmetic dentistry to keep your smile healthy.",
    description2:
      "Our specialists use the latest technology to ensure comfortable and effective treatments.",
  },

  {
    id: 4,
    name: "Cardiology",
    icon: HeartPulse,
    description1:
      "Expert cardiology services including diagnostic testing, continuous monitoring, and specialized treatment plans for various heart conditions.",
    description2:
      "Dedicated to preventing and managing cardiovascular diseases with personalized care.",
  },

  {
    id: 5,
    name: "Gynecology",
    icon: MdOutlinePregnantWoman,
    description1:
      "Comprehensive women's health services covering routine exams, family planning, and specialized treatments for gynecological disorders.",
    description2:
      "Providing compassionate care at every stage of a woman's life.",
  },

  {
    id: 6,
    name: "Medicine",
    icon: GiCaduceus,
    description1:
      "General and specialized internal medicine focusing on the diagnosis, treatment, and prevention of adult diseases and conditions.",
    description2:
      "Our approach integrates comprehensive medical evaluations and coordinated care.",
  },

  {
    id: 7,
    name: "Traumatology",
    icon: FaUserInjured,
    description1:
      "Specialized care for acute injuries and trauma, offering emergency interventions, reconstructive surgeries, and rehabilitation programs.",
    description2:
      "Our trauma center is fully equipped to handle severe and life-threatening conditions.",
  },

  {
    id: 8,
    name: "Pediatrics",
    icon: Baby,
    description1:
      "Dedicated medical care for infants, children, and adolescents, focusing on physical, emotional, and social health from birth to young adulthood.",
    description2:
      "We provide immunizations, routine check-ups, and specialized treatments for childhood illnesses.",
  },
];


export const featuresData = [
  {
    id: 1,
    number: "01.",
    title: "Patient-Centred",
    description:
      "While our team brings important experience and knowledge, we know that each patient is the expert in their own life.",
  },

  {
    id: 2,
    number: "02.",
    title: "Comprehensive",
    description:
      "We offer comprehensive health care focusing on the whole person, at all ages and stages of life.",
  },

  {
    id: 3,
    number: "03.",
    title: "Patient-Centred",
    description:
      "We have flexible hours and are open on certain evenings and during the weekend, to accommodate your schedule.",
  },
];




export const servicesData = [
  {
    id: 1,
    icon: FaUserMd,
    title: 'Primary Care Physicia',
    description: 'MedAll Centre provides the following healthcare services:',
    items: [
      'Complete Family Health Care',
      'EKG',
      'X-Ray',
      'Ultrasound',
      'Acute and Chronic Care',
      'Well Woman\'s Exam'
    ]
  },
  {
    id: 2,
    icon: FaVirus,
    title: 'Allergy and Immunology',
    description: 'You should feel your best no matter the season.',
    items: [
      'Allergy and Immunology Conditions',
      'Testing for Allergy and Immunology',
      'Allergy and Immunology Treatments',
      'Asthma Care',
      'Dermatology',
      'Pediatric Allergy and Immunology'
    ]
  },
  {
    id: 3,
    icon: FaSpa,
    title: 'Holistic Wellness',
    description: 'A lifestyle of holistic wellness rewards you with enhanced health',
    items: [
      'Weight loss',
      'Therapeutic Medical Massage',
      'Holistic Skin Care',
      'K-laser Pain Management',
      'Ayurveda & Detoxification',
      'Hormone Replacement Therapy'
    ]
  }
];

export const specialistsData = [
  {
    id: 1,
    name: 'Dr. William Gardner',
    title: 'Psychiatrist',
    image: 'https://plus.unsplash.com/premium_photo-1681996498864-67cb1b51a1c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    schedule: [
      { days: 'Mon-Thu', time: '08:00 - 20:00' },
      { days: 'Friday', time: '07:00 - 22:00' },
      { days: 'Saturday', time: '08:00 - 18:00' }
    ]
  },
  {
    id: 2,
    name: 'Dr. Robert Rush',
    title: 'Psychiatrist',
    image: 'https://images.pexels.com/photos/8376221/pexels-photo-8376221.jpeg',
    schedule: [
      { days: 'Mon-Thu', time: '08:00 - 20:00' },
      { days: 'Friday', time: '07:00 - 22:00' },
      { days: 'Saturday', time: '08:00 - 18:00' }
    ]
  },
  {
    id: 3,
    name: 'Dr. Terri Williams',
    title: 'Psychiatrist',
    image: 'https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    schedule: [
      { days: 'Mon-Thu', time: '08:00 - 20:00' },
      { days: 'Friday', time: '07:00 - 22:00' },
      { days: 'Saturday', time: '08:00 - 18:00' }
    ]
  },
  {
    id: 4,
    name: 'Dr. John Doe',
    title: 'Psychiatrist',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    schedule: [
      { days: 'Mon-Thu', time: '08:00 - 20:00' },
      { days: 'Friday', time: '07:00 - 22:00' },
      { days: 'Saturday', time: '08:00 - 18:00' }
    ]
  },
  {
    id: 5,
    name: 'Dr. Sarah Smith',
    title: 'Psychiatrist',
    image: 'https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    schedule: [
      { days: 'Mon-Thu', time: '08:00 - 20:00' },
      { days: 'Friday', time: '07:00 - 22:00' },
      { days: 'Saturday', time: '08:00 - 18:00' }
    ]
  },
  {
  id: 6,
  name: 'Dr. Emily Carter',
  title: 'Cardiologist',
  image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
  schedule: [
    { days: 'Mon-Thu', time: '09:00 - 18:00' },
    { days: 'Friday', time: '08:00 - 20:00' },
    { days: 'Saturday', time: '09:00 - 16:00' }
  ]
},
{
  id: 7,
  name: 'Dr. Michael Lee',
  title: 'Neurologist',
  image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
  schedule: [
    { days: 'Mon-Thu', time: '10:00 - 19:00' },
    { days: 'Friday', time: '08:00 - 18:00' },
    { days: 'Saturday', time: '09:00 - 15:00' }
  ]
},
{
  id: 8,
  name: 'Dr. Olivia Brown',
  title: 'Pediatrician',
  image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
  schedule: [
    { days: 'Mon-Thu', time: '08:00 - 17:00' },
    { days: 'Friday', time: '08:00 - 19:00' },
    { days: 'Saturday', time: '10:00 - 14:00' }
  ]
},
{
  id: 9,
  name: 'Dr. James Wilson',
  title: 'Dermatologist',
  image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg',
  schedule: [
    { days: 'Mon-Thu', time: '09:00 - 20:00' },
    { days: 'Friday', time: '08:00 - 21:00' },
    { days: 'Saturday', time: '09:00 - 17:00' }
  ]
},
{
  id: 10,
  name: 'Dr. Sophia Martinez',
  title: 'Orthopedic Surgeon',
  image: 'https://images.pexels.com/photos/5998476/pexels-photo-5998476.jpeg',
  schedule: [
    { days: 'Mon-Thu', time: '07:00 - 18:00' },
    { days: 'Friday', time: '08:00 - 20:00' },
    { days: 'Saturday', time: '09:00 - 13:00' }
  ]
}
];

export const clinicEventsData = [
  {
    id: 1,
    title: 'Rice and obesity: Is there a link?',
    description: 'After controlling for a wide range of factors, the team found that the results remained significant.',
    date: '5 march, 2019',
    image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Blood test may predict cardiovascular disease',
    description: 'New research suggests that a simple blood test, which doctors currently use to diagnose heart attacks, may.',
    date: '22 february, 2019',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'What to know about pimples on the arms',
    description: 'Many things, including infections and blocked pores, can cause a person to develop pimples on the arms.',
    date: '17 january, 2019',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'The benefits of a plant-based diet for heart health',
    description: 'A new study highlights the significant benefits of adopting a plant-based diet for reducing cardiovascular risks.',
    date: '10 december, 2018',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'How sleep affects your immune system',
    description: 'Adequate sleep plays a crucial role in maintaining a healthy immune system, according to recent medical findings.',
    date: '3 november, 2018',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export const footerBlogPosts = [
  {
    id: 1,
    title: 'Medications & Oral Health',
    date: 'September 26, 2018',
    image:
      'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg'
  },
  {
    id: 2,
    title: 'Smile For Your Health!',
    date: 'August 22, 2018',
    image:
      'https://images.pexels.com/photos/6627567/pexels-photo-6627567.jpeg'
  },
  {
    id: 3,
    title: 'Tooth Fairy Traditions...',
    date: 'July 25, 2018',
    image:
      'https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg'
  }
];


export const testimonials = [
  {
    text: "Am very impressed with you all as well as being highly proficient is absolutely adorable. I feel so relaxed in her capable hands and hope to be her patient for a very long time! You are a fantastic team and I feel very privileged to come to you all!!!",
    name: "Wilmer Stevenson",
    role: "Creative manager",
  },
  {
    text: "The service was exceptional from start to finish. Everyone was caring, professional, and made me feel comfortable throughout the experience.",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    text: "I truly appreciate the attention and dedication of the entire team. The environment is welcoming and the care provided is outstanding.",
    name: "David Miller",
    role: "Business Owner",
  },
];



export const faqData = [
  {
    id: 1,
    question: "1. How do I make an appointment?",
    answer:
      "If you would like to make an appointment with one of our practitioners, please contact our reception staff. Alternatively, you may book your appointments online. Every effort will be made to accommodate your preferred time and choice of practitioner.",
    isOpen: true,
  },
  {
    id: 2,
    question: "2. How do I get a copy of my records to another provider?",
    answer:
      "You can request a copy of your medical records by filling out a medical records release form at our clinic or through our online patient portal. Once approved, the records can be securely transferred to your chosen healthcare provider.",
    isOpen: false,
  },
  {
    id: 3,
    question: "3. Is there a charge for copies of my medical record?",
    answer:
      "In most cases, a small administrative fee may apply for printed copies of medical records. Electronic copies are often provided free of charge. Please contact our support team for detailed pricing information.",
    isOpen: false,
  },
  {
    id: 4,
    question:
      "4. How do I assure that my designated person has access to my medical records?",
    answer:
      "You can authorize another person to access your medical records by completing a patient authorization form. This allows us to securely share information with the individual you designate while protecting your privacy.",
    isOpen: false,
  },
];


export const heroContent = [
  {
    title: "Full Medical Care",
    subtitle: "Advanced healthcare solutions with compassionate specialists",
    button: "Explore Services",
  },
  {
    title: "Trusted Medical Experts",
    subtitle: "Professional doctors dedicated to your health and wellness",
    button: "Meet Our Team",
  },
  {
    title: "Modern Clinical Services",
    subtitle: "Providing quality treatment with advanced medical technology",
    button: "Book Appointment",
  },
];