import React from 'react';
import { Sun, Building2, Wrench, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solar solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Sun className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Residential Solar Installation</h2>
              <p className="text-gray-600 mb-6">
                Transform your home into a sustainable energy powerhouse with our custom residential solar solutions. We handle everything from design to installation.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Custom system design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Professional installation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  25-year warranty
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Smart monitoring system
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Building2 className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Commercial Solar Solutions</h2>
              <p className="text-gray-600 mb-6">
                Reduce operating costs and increase property value with our commercial solar installations. Perfect for businesses of all sizes.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  ROI analysis
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Custom commercial designs
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Project management
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Performance monitoring
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Maintenance & Repair</h2>
              <p className="text-gray-600 mb-6">
                Keep your solar system running at peak efficiency with our comprehensive maintenance and repair services.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Regular maintenance
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Emergency repairs
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  System upgrades
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <LineChart className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Energy Consulting</h2>
              <p className="text-gray-600 mb-6">
                Get expert advice on energy efficiency and solar solutions tailored to your specific needs.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Energy audits
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Feasibility studies
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Financial analysis
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                  Custom recommendations
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-yellow-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;