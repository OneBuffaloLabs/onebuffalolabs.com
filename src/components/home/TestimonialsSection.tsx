'use client';

import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DUMMY DATA ---
const testimonials = [
  {
    quote:
      "One Buffalo Labs didn't just build us a website; they built us a future. Their AI integration has revolutionized our workflow, and the results speak for themselves. An absolute game-changer.",
    name: 'Jessica Miller',
    title: 'CEO, Queen City Goods',
    rating: 5,
  },
  {
    quote:
      "The level of detail and commitment to our project was outstanding. The team delivered a stunning mobile app that has received rave reviews from our users. We couldn't be happier.",
    name: 'David Chen',
    title: 'CTO, Nickel City Bank',
    rating: 5,
  },
  {
    quote:
      'Our organic traffic has skyrocketed since partnering with One Buffalo Labs. Their SEO strategy was data-driven, transparent, and incredibly effective. They are true experts in their field.',
    name: 'Sarah Rodriguez',
    title: 'Marketing Director, Buffalo Legal',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id='testimonials' className='w-full bg-gray-50 py-16 px-8 overflow-hidden'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-12'>
          What Our <span className='text-[var(--obl-blue)]'>Clients Say.</span>
        </h2>

        <div className='relative h-96 md:h-80 lg:h-72'>
          {/* Carousel Wrapper */}
          <div className='relative w-full h-full'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='absolute w-full h-full transition-opacity duration-500 ease-in-out'
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}>
                {/* --- CARD LAYOUT CORRECTED --- */}
                <div className='relative flex flex-col justify-center items-center h-full bg-white rounded-lg p-8 sm:p-10 border border-gray-200 shadow-lg overflow-hidden'>
                  {/* Decorative Quote Icon in the background */}
                  <Quote className='text-gray-200 absolute top-6 left-6' size={50} />

                  {/* Main content container is centered with horizontal padding to prevent overlap */}
                  <div className='relative z-10 text-center px-8 sm:px-12'>
                    <p className='text-xl italic text-gray-800 leading-relaxed'>
                      "{testimonial.quote}"
                    </p>

                    {/* Client info is centered */}
                    <div className='mt-6'>
                      <h4 className='text-lg font-bold text-gray-900'>{testimonial.name}</h4>
                      <p className='text-gray-500'>{testimonial.title}</p>
                      <div className='flex justify-center mt-2'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='text-[var(--obl-red)]'
                            fill='currentColor'
                            size={20}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className='flex justify-center gap-4 mt-8'>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className='p-3 rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Previous testimonial'>
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === testimonials.length - 1}
            className='p-3 rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Next testimonial'>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
