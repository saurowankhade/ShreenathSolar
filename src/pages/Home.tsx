import React, { useState, useEffect } from 'react';
import { ArrowRight, Sun, Battery, BarChart3, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Solar Installation ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powering Your Future<br />With Solar Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transform your energy consumption with our cutting-edge solar solutions. 
            Save money while saving the planet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ShreenathSolar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in solar solutions with our experienced team and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Installation</h3>
              <p className="text-gray-600">
                Our certified technicians ensure perfect installation with attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Battery className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Maximum Efficiency</h3>
              <p className="text-gray-600">
                Get the most out of your solar investment with high-efficiency panels.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">25-Year Warranty</h3>
              <p className="text-gray-600">
                Peace of mind with our comprehensive warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your solar installation project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-yellow-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-gray-600">Installations Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">10+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;