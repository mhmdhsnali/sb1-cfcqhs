import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useState } from 'react';

const bannerImages = [
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1920&h=600',
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1920&h=600',
  'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80&w=1920&h=600'
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {bannerImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="mb-4 text-5xl font-bold">وجبات صحية موصلة لبيتك</h1>
              <p className="mb-8 text-xl">خطط غذائية مخصصة لنمط حياتك</p>
              <button className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600">
                ابدأ رحلتك الصحية
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
      >
        <ChevronRight size={24} />
      </button>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  );
}