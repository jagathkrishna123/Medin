import React, { useState, useEffect } from 'react';
import { TbFirstAidKit } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { LiaUserNurseSolid } from "react-icons/lia";
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { departmentsData, featuresData, servicesData, specialistsData, clinicEventsData, footerBlogPosts } from '../assets/assets';
import whyChooseUsImg from '../assets/why-choose-us.png';
import { BsCheckLg } from 'react-icons/bs';


const Landingpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventsIndex, setEventsIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialistsData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const eventsTimer = setInterval(() => {
      setEventsIndex((prevIndex) => (prevIndex + 1) % clinicEventsData.length);
    }, 5000);
    return () => clearInterval(eventsTimer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col font-poppins">
      {/* Top Bar */}
      <div className="bg-[#566077] text-gray-200 text-xs py-2.5 px-4 md:px-12 flex justify-between items-center">
        <div className="flex flex-wrap space-x-4 md:space-x-8">
          <div className="flex items-center space-x-2">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span className="hidden sm:inline">1560 Holden Street San Diego, CA 92139</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            <span>1-800-267-0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            <span>info@medera.net</span>
          </div>
        </div>
        <div className="hidden sm:flex space-x-2.5">
          {/* Facebook */}
          <a href="#" className="bg-white text-[#566077] p-1.5 rounded-full hover:bg-gray-200 transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          {/* Twitter */}
          <a href="#" className="bg-white text-[#566077] p-1.5 rounded-full hover:bg-gray-200 transition">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </a>
          {/* Google+ (Using a user/group icon as placeholder if strict G+ not available, but let's use standard path) */}
          <a href="#" className="bg-white text-[#566077] p-1.5 rounded-full hover:bg-gray-200 transition flex items-center justify-center">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.52 14.5c-.3 0-.6.1-.8.2-.8-.7-1.4-1.6-1.7-2.6.4-.3.7-.7.7-1.2 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 .5.3.9.7 1.2-.3 1-.9 1.9-1.7 2.6-.2-.1-.5-.2-.8-.2-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.3 0-.6-.1-.8.8-.6 1.8-.9 2.8-.9.9 0 1.9.3 2.7.9-.1.2-.1.5-.1.8 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z" /></svg>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#cd272d" />
            <path d="M4 11H8L10 6L14 17L16 11H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[26px] font-bold text-[#3a3a3a] tracking-tight">medera</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-8 text-[12px] font-bold text-gray-700 tracking-wider">
          <a href="#" className="hover:text-blue-500 transition">ABOUT US</a>
          <a href="#" className="hover:text-blue-500 transition">DEPARTMENTS</a>
          <a href="#" className="hover:text-blue-500 transition">SERVICES</a>
          <a href="#" className="hover:text-blue-500 transition">FAQ</a>
          <a href="#" className="hover:text-blue-500 transition">SPECIALISTS</a>
          <a href="#" className="hover:text-blue-500 transition">TESTIMONIALS</a>
          <a href="#" className="hover:text-blue-500 transition">EVENTS</a>
          <a href="#" className="hover:text-blue-500 transition">CONTACTS</a>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <button className="text-gray-600 hover:text-blue-500 transition mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button className="text-gray-600 hover:text-blue-500 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="flex-grow flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          minHeight: '600px'
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl px-4 -mt-8">
          <h2 className="text-[36px] md:text-[46px] text-white font-normal drop-shadow-sm leading-tight">
            We Provide
          </h2>
          <h1 className="text-[44px] md:text-[60px] text-white font-bold drop-shadow-md leading-tight mb-4">
            Full Medical Care!
          </h1>
          <p className="text-white text-[15px] md:text-[17px] font-medium drop-shadow-sm mb-10">
            Highest standards of customer service
          </p>
          <button className="bg-[#65769f] hover:bg-[#526081] text-white px-9 py-3.5 rounded-full text-sm font-semibold transition duration-300 flex items-center gap-2">
            Know more <span className="text-lg font-normal">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 border-b border-gray-100 pb-16">
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <TbFirstAidKit className='w-11 h-11 text-[#566077]' />
            </div>
            <div>
              <h3 className="text-[19px] font-bold text-[#444444] mb-2">24 Hour Emergency</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Open round the clock for convenience, quick and easy access
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <SlChemistry className='w-11 h-11 text-[#566077]' />
            </div>
            <div>
              <h3 className="text-[19px] font-bold text-[#444444] mb-2">Complete Lab Services</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Cost-efficient, comprehensive and clinical laboratory services
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 mt-1">
              <LiaUserNurseSolid className='w-11 h-11 text-[#566077]' />
            </div>
            <div>
              <h3 className="text-[19px] font-bold text-[#444444] mb-2">Medical Professionals</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Qualified and certified physicians for quality medical care
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#f9f9f9] py-20 px-4 md:px-12 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <h4 className="text-gray-600 font-semibold tracking-wide text-sm mb-3">
              25 Years of Medical Excellence
            </h4>
            <h2 className="text-[38px] md:text-[44px] font-bold text-[#444444] leading-tight mb-6">
              The Heart and Science <span className="text-[#566077]">of Medicine</span>
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
              We help your body restore itself by harnessing your own healing potential with
              a variety of techniques to combat areas of disease, injury or inflammation. This
              process involves a variety of techniques including a minimally invasive
              procedure conducted right in our clinic.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#566077] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-[15px]">Equipped for all stages of care, from prevention to rehabilitation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#566077] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-[15px]">Quality assessment program helps ensure smooth, effective operation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#566077] mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-[15px]">Prepared to treat a high volume of trauma patients 24/7</span>
              </li>
            </ul>

            <a href="#" className="inline-flex items-center text-[#566077] font-bold hover:text-[#424b61] transition">
              Booking a visit <span className="ml-2 text-xl leading-none">&rarr;</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative w-full">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Doctor consultation"
              className="w-full h-[400px] md:h-[480px] object-cover rounded-sm shadow-sm"
            />

            {/* Watch Video Button Overlaid */}
            <div className="absolute bottom-0 left-0 bg-[#65769f] hover:bg-[#526081] transition cursor-pointer flex items-center px-8 py-5">
              <span className="text-white font-semibold text-sm mr-4">Watch Video</span>
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#65769f] ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.16 4.16l11.68 5.84-11.68 5.84V4.16z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Departments Section------------------------------------------------------- */}
      <div className="bg-white py-24 px-4 md:px-12 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#3c4456] mb-4">
            Our Departments
          </h2>
          <div className="w-12 h-[2px] bg-[#566077] mx-auto mb-6"></div>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            MedEra Medical Center specializes in different medical services for the<br className="hidden md:block" />
            convenience of community:
          </p>
        </div>

        {/* Content Layout */}
        <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Grid (8 Departments) */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {departmentsData.map((dept, index) => {
              const isActive = index === 0; // Hardcoded first item as active

              return (
                <div
                  key={dept.id}
                  className={`flex flex-col items-center justify-center rounded-md p-8 transition-colors duration-300 cursor-pointer h-[200px] ${isActive ? 'bg-[#606b85]' : 'bg-[#f9f9f9] hover:bg-[#f0f0f0]'
                    }`}
                >
                  <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${isActive ? 'bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.2)]' : 'bg-white shadow-sm'
                    }`}>
                    <dept.icon className={`w-8 h-8 ${isActive ? 'text-[#606b85]' : 'text-[#b0b0b0]'}`} strokeWidth={1.5} />
                  </div>
                  <span className={`text-[15px] font-bold text-center ${isActive ? 'text-white' : 'text-[#444444]'}`}>
                    {dept.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Details Panel */}
          <div className="w-full lg:w-1/3 relative overflow-hidden pl-4 lg:pl-8 pt-8 lg:pt-0">
            {/* Watermark Text */}
            <div className="absolute top-[-20px] right-[-60px] text-[120px] font-bold text-[#f5f5f5] pointer-events-none select-none z-0">
              Psychiatry
            </div>

            {/* Detail Content */}
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[28px] font-bold text-[#444444] mb-6">
                {departmentsData[0].name}
              </h3>

              <div className="text-gray-500 text-[15px] leading-relaxed space-y-6 flex-grow">
                <p>{departmentsData[0].description1}</p>
                <p>{departmentsData[0].description2}</p>
              </div>

              {/* Pagination Controls */}
              <div className="flex gap-4 mt-12">
                <button className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center hover:bg-gray-200 transition text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center hover:bg-gray-200 transition text-[#606b85]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
     <section className="bg-[#f5f5f3] pt-6 overflow-hidden relative">
  
  {/* Watermark */}
  <div className="absolute top-[90px] left-1/2 -translate-x-1/2 text-[90px] font-extrabold text-white/80 whitespace-nowrap leading-none z-0 pointer-events-none select-none">
    Why Choose Us?
  </div>

  <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">

    {/* Left Image */}
    <div className="w-full lg:w-1/2 flex items-end justify-start self-stretch">
  <img
    src={whyChooseUsImg}
    alt="Doctors"
    className="w-[500px] sm:w-[600px] md:w-[760px] max-w-none object-bottom object-contain -ml-28 mt-auto"
  />
</div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 mt-10 lg:mt-0 py-6">

      <p className="text-[#5b6799] font-semibold tracking-[2px] text-[14px] uppercase mb-3">
        See the Difference
      </p>

      <h2 className="text-[36px] leading-none font-semibold text-[#444444] mb-14">
        Why Choose Us?
      </h2>

      <div className="flex flex-col gap-12">

        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start gap-7"
          >

            {/* Number Circle */}
            <div className="w-[82px] h-[82px] rounded-full bg-white cursor-pointer hover:bg-[#5C6895]  transition duration-300 flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-[28px] font-bold text-[#5b6799] hover:text-white transition duration-300">
                {feature.number}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1">

              <h3 className="text-[20px] font-bold text-[#2d3648] mb-3">
                {feature.title}
              </h3>

              <p className="text-[#7b7b7b] text-[16px] leading-[1.9] max-w-[520px]">
                {feature.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  </div>
</section>
<section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 px-4">
          <h4 className="text-[#65769f] font-semibold text-[13px] tracking-wide mb-2 capitalize">
            Meet the Team
          </h4>
          <h2 className="text-[34px] md:text-[36px] font-semibold text-[#444444] mb-4">
            Our Services
          </h2>
          <div className="w-12 h-[2px] bg-[#65769f] mx-auto mb-8"></div>
          
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
             return (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-200"
            >
              {/* Card Header Section */}
              <div className="flex items-center gap-4 mb-6">
                {/* Modern Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#5C6895] text-slate-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                   <Icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-sm mb-6 pb-6 border-b border-slate-50">
                {service.description}
              </p>

              {/* Services List */}
              <ul className="space-y-3.5">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                      <BsCheckLg className="w-3 h-3" />
                    </div>
                    <span className="text-slate-600 text-sm font-medium transition-colors duration-300 group-hover/item:text-slate-900">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
           );
          })}
        </div>
      </div>
    </section>

      {/* Patient Information Section */}
      <section className="flex flex-col lg:flex-row w-full bg-[#f9f9f9]">
        {/* Left Side - FAQ Content */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div className="w-full max-w-[700px] px-6 py-24 lg:pr-16 lg:pl-12 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#444444] mb-10">
              Patient Information
            </h2>
            
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  id: 1,
                  question: "1. How do I make an appointment?",
                  answer: "If you would like to make an appointment with one of our practitioners, please contact our reception staff. Alternatively you may book your appointments online. Every effort will be made to accommodate your preferred time and choice of practitioner.",
                  isOpen: true
                },
                {
                  id: 2,
                  question: "2. How do I get a copy of my records to another provider?",
                  isOpen: false
                },
                {
                  id: 3,
                  question: "3. Is there a charge for copies of my medical record?",
                  isOpen: false
                },
                {
                  id: 4,
                  question: "4. How do I assure that my person I designate has access to my medical records?",
                  isOpen: false
                }
              ].map((item) => (
                <div key={item.id} className="bg-white rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-gray-100/80 overflow-hidden">
                  <div className="flex justify-between items-center px-6 py-4.5 cursor-pointer hover:bg-gray-50 transition">
                    <span className={`text-[14.5px] font-bold ${item.isOpen ? 'text-[#444444]' : 'text-[#555555]'}`}>
                      {item.question}
                    </span>
                    {item.isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#65769f]" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#65769f]" strokeWidth={2.5} />
                    )}
                  </div>
                  {item.isOpen && (
                    <div className="px-6 pb-6 pt-1">
                      <p className="text-[#888888] text-[14px] leading-[1.7]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <button className="bg-[#65769f] hover:bg-[#526081] text-white px-7 py-3 rounded-full text-[13px] font-semibold transition duration-300 flex items-center gap-2 shadow-sm">
                Ask Question <span className="text-[16px] ml-1 font-normal">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 min-h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Nurse smiling at patient" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our Specialists Section */}
      <section className="py-24 bg-white w-full flex flex-col items-center overflow-hidden">
        <div className="text-center max-w-2xl mb-10 px-4">
          <h4 className="text-[#65769f] font-semibold text-[13px] tracking-wide mb-2 capitalize">
            Meet the Team
          </h4>
          <h2 className="text-[34px] md:text-[36px] font-semibold text-[#444444] mb-4">
            Our Specialists
          </h2>
          <div className="w-12 h-[2px] bg-[#65769f] mx-auto mb-8"></div>
          <p className="text-[#787878] text-[16px] leading-relaxed max-w-[550px] mx-auto">
            We offer highly specialised medical care, on one site, from some of the foremost national and international specialists in their fields of medicine.
          </p>
        </div>

        {/* Dropdown */}
       <div className="mb-14">
  <div className="relative w-[280px]">
    
    <select
      className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-[16px] font-medium text-slate-700 shadow-sm hover:border-slate-300 focus:outline-none transition-all duration-300 cursor-pointer"
    >
      <option>Psychiatrist</option>
      <option>Cardiology</option>
      <option>Dental Care</option>
      <option>Neurology</option>
      <option>Pediatrics</option>
    </select>

    {/* Arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
      <ChevronDown className="w-5 h-5 text-slate-400" />
    </div>

  </div>
</div>

        {/* Carousel */}
        <div className="w-full max-w-[1200px] overflow-hidden px-4">
          <div className="flex gap-6 items-stretch">
            {[...specialistsData, ...specialistsData, ...specialistsData].map((specialist, index) => (
              <div 
                key={index} 
               className="
  w-full
  sm:w-[calc(50%-12px)]
  lg:w-[calc(33.333%-16px)]
  flex-shrink-0
  bg-white
  border
  border-gray-100/80
  rounded-sm
  overflow-hidden
  group
  shadow-[0_2px_15px_rgba(0,0,0,0.03)]
  hover:shadow-lg
  transition-all
  duration-700
  ease-in-out
  flex
  flex-col
"
                style={{ transform: `translateX(calc(-${currentIndex} * (100% + 24px)))` }}
              >
                {/* Image */}
                <div className="h-[320px] w-full overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={specialist.image} 
                    alt={specialist.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col items-center pt-6 pb-6 bg-[#fafbfc] flex-grow">
                  <h3 className="text-[17px] font-bold text-[#444444] mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-[#65769f] text-[13px] mb-4">
                    {specialist.title}
                  </p>
                  
                  <div className="w-[85%] h-[1px] bg-gray-200 mb-4"></div>
                  
                  {/* Schedule */}
                  <div className="w-[85%] flex flex-col gap-2 mb-4">
                    {specialist.schedule.map((item, i) => (
                      <div key={i} className="flex justify-between text-[12px] text-[#666666]">
                        <span>{item.days}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-[85%] h-[1px] bg-gray-200 mb-5"></div>
                  
                  <button className="text-[#65769f] font-bold text-[12px] hover:text-[#526081] transition flex items-center gap-1">
                    Booking a visit <span className="font-normal ml-0.5">&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="w-full bg-[#fdfdfd] border-t border-gray-100 mt-20 flex justify-center overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full max-w-[1400px]">
          
          {/* Left Side - Faces Grid */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
            <div className="grid grid-cols-7 gap-[3px] w-full max-w-[600px] aspect-[7/4] bg-white p-[3px] shadow-[0_2px_15px_rgba(0,0,0,0.04)] rounded-sm">
              {Array.from({length: 28}).map((_, i) => (
                <div key={i} className="w-full h-full relative overflow-hidden bg-gray-100">
                  <img 
                    src={`https://i.pravatar.cc/200?img=${i + 15}`} 
                    alt={`Patient ${i+1}`}
                    className="w-full h-full object-cover filter hover:brightness-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="w-full lg:w-1/2 py-16 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden bg-transparent">
            {/* Subtle Pattern (Simulated dotted map) */}
            <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
            
            <div className="relative z-10 max-w-[500px]">
              {/* Quote Icon */}
              <div className="text-[#65769f] mb-6">
                <svg width="44" height="34" viewBox="0 0 44 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9 33.5H0L8.6 0H21.5L12.9 33.5ZM35.4 33.5H22.5L31.1 0H44L35.4 33.5Z" />
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-[17px] md:text-[19px] text-[#555555] font-serif italic leading-[1.8] mb-8">
                Am very impressed with you all as well as being highly proficient is absolutely adorable. I feel so relaxed in her capable hands and hope to be her patient for a very long time! You are a fantastic team and I feel very privileged to come to you all!!!
              </p>
              
              {/* Author */}
              <p className="text-[13px] text-gray-500 mb-12">
                - Wilmer Stevenson, <span className="text-[#65769f] font-medium">Creative manager</span>
              </p>
              
              {/* Pagination Controls */}
              <div className="flex gap-4">
                <button className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition text-gray-400 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition text-[#65769f] shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Events Section */}
      <section className="w-full py-24 bg-[#fafafa] flex flex-col items-center overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[36px] font-semibold text-[#444444] mb-5">
            Clinic Events
          </h2>
          <div className="w-[30px] h-[2px] bg-[#65769f] mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-[1200px] overflow-hidden px-4 mb-10">
          <div className="flex gap-6 items-stretch">
            {/* Render items */}
            {[...clinicEventsData, ...clinicEventsData].map((event, index) => (
              <div 
                key={index} 
               className="
  w-full
  sm:w-[calc(50%-12px)]
  lg:w-[calc(33.333%-16px)]
  flex-shrink-0
  bg-white
  shadow-[0_4px_20px_rgba(0,0,0,0.03)]
  hover:shadow-lg
  transition-all
  duration-700
  ease-in-out
  flex
  flex-col
  rounded-sm
  overflow-hidden
"
                style={{ transform: `translateX(calc(-${eventsIndex} * (100% + 24px)))` }}
              >
                {/* Image */}
                <div className="h-[220px] w-full overflow-hidden shrink-0">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col p-8 flex-grow">
                  <h3 className="text-[19px] font-bold text-[#444444] leading-snug mb-4">
                    {event.title}
                  </h3>
                  <p className="text-[#7b7b7b] text-[14.5px] leading-[1.7] mb-8 flex-grow font-light">
                    {event.description}
                  </p>
                  
                  {/* Date */}
                  <span className="text-[#65769f] text-[12.5px] font-bold tracking-wide">
                    {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {clinicEventsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setEventsIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === eventsIndex ? 'bg-[#65769f]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>
      {/* Stats & CTA Section ...............................................*/}
      <section className="relative w-full bg-[#292f3a] flex flex-col lg:flex-row overflow-hidden border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Side: Stats */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center py-24 px-8 lg:pl-[12%] lg:pr-12 gap-12 z-10 relative">
          
          {/* Stat 1 */}
          <div className="flex items-start gap-6">
            <div className="text-[#7283a9] font-bold leading-none flex items-start w-[120px]">
              <span className="text-[56px] md:text-[48px] tracking-tighter">150</span>
              <span className="text-[20px] md:text-[24px] mt-2 ml-1">K</span>
            </div>
            <div className="flex flex-col pt-3 flex-1">
              <h4 className="text-white font-bold text-[15px] mb-2 tracking-wide">Cured Patients</h4>
              <p className="text-gray-300 text-[13px] leading-[1.8] max-w-[280px]">
                For over 15 years, we have delighted our customers and provide them with the necessary services.
              </p>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="flex items-start gap-6">
            <div className="text-[#7283a9] font-bold leading-none flex items-start w-[120px]">
              <span className="text-[56px] md:text-[48px] tracking-tighter">100</span>
              <span className="text-[20px] md:text-[24px] mt-2 ml-1">%</span>
            </div>
            <div className="flex flex-col pt-3 flex-1">
              <h4 className="text-white font-bold text-[15px] mb-2 tracking-wide">Happy Clients</h4>
              <p className="text-gray-300 text-[13px] leading-[1.8] max-w-[280px]">
                Absolutely all our clients are ready to assure you of the high quality of our services.
              </p>
            </div>
          </div>
          
        </div>

        {/* Right Side: Image and CTA */}
        <div className="w-full lg:w-[55%] relative flex flex-col items-center justify-center text-center py-28 px-8 z-0 min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/5452210/pexels-photo-5452210.jpeg" 
              alt="Online Appointments" 
              className="w-full h-full object-cover object-[center_30%]"
            />
            {/* Gradient to blend with left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#292f3a] via-[#292f3a]/90 lg:via-[#292f3a]/70 to-[#292f3a]/20"></div>
            {/* Overall darkening overlay */}
            <div className="absolute inset-0 bg-[#161a22]/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-[480px]">
            <h2 className="text-[34px] md:text-[42px] font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Online Appointments<br/>and Prescriptions
            </h2>
            <p className="text-gray-200 text-[14px] mb-8 font-light tracking-wide">
              You can now book a limited amount of doctors' appointments online
            </p>
            <button className="bg-[#65769f] hover:bg-[#526081] text-white px-8 py-3.5 rounded-full text-[13px] font-bold transition duration-300 flex items-center gap-2 shadow-lg">
              Request an appointment <span className="text-[16px] font-normal">&rarr;</span>
            </button>
          </div>
        </div>
        </div>
        
      </section>
      {/* Contact Form Section */}
      <section className="relative w-full bg-white overflow-hidden pt-12 lg:pt-0">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-[35%] md:top-[25%] left-[-15%] md:left-[-5%] text-[80px] md:text-[120px] font-bold text-gray-200 opacity-80 whitespace-nowrap z-0 pointer-events-none select-none tracking-tighter">
          Looking for a Certified Doctor?
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 md:px-12">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[50%] flex justify-center items-end self-stretch relative order-2 lg:order-1">
  <img 
    src="https://websmirno.site/medin/html/medera-html/images/content/banner-callus.png" 
    alt="Doctor" 
    className="w-[350px] sm:w-[500px] md:w-[920px] max-w-none object-contain -mb-2"
  />
</div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center py-12 lg:py-28 lg:pl-16 order-1 lg:order-2 z-10">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#3c4456] mb-4 tracking-tight leading-tight">
              Looking for a <span className="text-[#65769f]">Certified Doctor?</span>
            </h2>
            <p className="text-[#7b7b7b] text-[14.5px] leading-[1.8] mb-10 max-w-[520px] font-light">
              We believe in providing the best possible care to all our existing patients and welcome new patients to sample.
            </p>

            <form className="w-full max-w-[560px] flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your name*" 
                className="w-full border border-gray-200 rounded-[4px] px-5 py-3.5 text-[14px] text-[#555555] placeholder:text-gray-400 focus:outline-none focus:border-[#65769f] transition-colors bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                required
              />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full sm:w-1/2 border border-gray-200 rounded-[4px] px-5 py-3.5 text-[14px] text-[#555555] placeholder:text-gray-400 focus:outline-none focus:border-[#65769f] transition-colors bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                />
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full sm:w-1/2 border border-gray-200 rounded-[4px] px-5 py-3.5 text-[14px] text-[#555555] placeholder:text-gray-400 focus:outline-none focus:border-[#65769f] transition-colors bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                  required
                />
              </div>

              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full border border-gray-200 rounded-[4px] px-5 py-3.5 text-[14px] text-[#555555] placeholder:text-gray-400 focus:outline-none focus:border-[#65769f] transition-colors resize-y bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
              ></textarea>

              <div className="mt-2">
                <button 
                  type="button" 
                  className="bg-[#65769f] hover:bg-[#526081] text-white px-8 py-3.5 rounded-full text-[13.5px] font-bold transition duration-300 flex items-center justify-center gap-2 shadow-md w-fit"
                >
                  Send request <span className="text-[16px] font-normal">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#fdfdfd] pt-20 flex flex-col font-poppins">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 pb-20">
          
          {/* Column 1: Branding & Newsletter */}
          <div className="flex flex-col w-full md:w-[35%]">
            <div className="flex items-center gap-2 mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#cd2b2b"/>
                <path d="M3 10h3l2.5-4 3.5 9 2.5-7 2 2h4" stroke="#1a3461" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[28px] font-bold text-[#3c4456] tracking-tight">medera</span>
            </div>
            
            <p className="text-gray-400 text-[13.5px] leading-[1.8] mb-6 max-w-[280px]">
              To receive email releases, simply provide us with your email below
            </p>
            
            <div className="flex items-center border border-gray-200 rounded-[4px] overflow-hidden bg-white px-4 py-3 mb-8 w-full max-w-[320px] shadow-sm">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full outline-none text-[13.5px] text-gray-600 placeholder:text-gray-300 bg-transparent"
              />
              <svg className="w-4 h-4 text-[#65769f] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            
            <div className="flex gap-3">
              {/* Facebook */}
              <button className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#65769f] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:bg-[#65769f] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </button>
              {/* Twitter */}
              <button className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#65769f] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:bg-[#65769f] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </button>
              {/* Google */}
              <button className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#65769f] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:bg-[#65769f] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </button>
              {/* Instagram */}
              <button className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[#65769f] shadow-[0_2px_15px_rgba(0,0,0,0.06)] hover:bg-[#65769f] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </button>
            </div>
          </div>
          
          {/* Column 2: Blog Posts */}
          <div className="flex flex-col w-full md:w-[30%]">
            <h3 className="text-[#3c4456] font-bold text-[19px] mb-8 relative">
              Blog Posts
              <div className="absolute -bottom-3 left-0 w-8 h-[2px] bg-[#65769f]"></div>
            </h3>
            
            <div className="flex flex-col gap-6 mt-2">
              {footerBlogPosts.map(post => (
                <div key={post.id} className="flex items-center gap-4 group">
                  <img src={post.image} alt={post.title} className="w-[54px] h-[54px] rounded-full object-cover shrink-0" />
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#444444] leading-tight group-hover:text-[#65769f] cursor-pointer transition-colors mb-1">
                      {post.title}
                    </h4>
                    <span className="text-[12.5px] text-gray-400 font-light">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Our Contacts */}
          <div className="flex flex-col w-full md:w-[35%]">
            <h3 className="text-[#3c4456] font-bold text-[19px] mb-8 relative">
              Our Contacts
              <div className="absolute -bottom-3 left-0 w-8 h-[2px] bg-[#65769f]"></div>
            </h3>
            
            <div className="flex flex-col gap-6 mt-2">
              
              <div className="flex items-start gap-4">
                <svg className="w-4 h-4 text-[#65769f] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-[13.5px] mb-3">1560 Holden Street San Diego, CA 92139</p>
                  <button className="bg-[#65769f] hover:bg-[#526081] text-white text-[12px] font-medium px-4 py-1.5 rounded-full transition-colors w-fit flex items-center gap-1.5 shadow-sm">
                    Get directions on the map <span className="text-[14px] font-normal">&rarr;</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-4 h-4 text-[#65769f] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-[#65769f] font-bold text-[13.5px]">
                  1-800-267-0000, 1-800-267-0001<br/>
                  <span className="text-gray-400 font-normal text-[13px] mt-1 block">(24/7 General inquiry)</span>
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <svg className="w-4 h-4 text-[#65769f] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-[#65769f] font-medium text-[14px]">info@medera.net</p>
              </div>
              
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="w-full bg-[#566077] py-5 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[12.5px] text-gray-300 gap-4">
          <div>
            Copyright © 2019 Medera &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-3">
            <span>For emergency cases</span>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white font-bold text-[15px]">1-800-267-0000</span>
          </div>
        </div>
      </footer>

    </div>
  );
};


export default Landingpage;
