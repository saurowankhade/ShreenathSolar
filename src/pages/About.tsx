import { Award, Users, Target } from 'lucide-react';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-justify text-white">
          <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">About ShreenathSolar</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Shreenath Solar, established in 2023, is the latest venture of Shreenath Electrical and Engineers Contractor, a company with over 25 years of expertise in the electrical contracting industry. Building on the legacy of quality and timely services, Shreenath Solar focuses on harnessing the power of renewable energy to pave the way for a sustainable future. 
          </p>
          <p className="text-xl max-w-3xl mx-auto"> With our deep-rooted experience in turnkey electrical solutions, material procurement, and infrastructure projects, we are now bringing the same commitment and precision to the solar energy sector. Our mission is to provide efficient, reliable, and cost-effective solar solutions to individuals, businesses, and government organizations.

          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate the world's transition to sustainable energy through affordable solar solutions while providing exceptional service and maintaining the highest standards of quality and safety.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted and respected solar energy company, recognized for our innovation, quality, and commitment to environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind ShreenathSolar's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://shreenathelesolar.vercel.app/img/ramdas%20gadge.png"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Ramdas Gadge</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              {/* <p className="text-gray-500 text-sm">
                20+ years of experience in renewable energy
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://shreenathelesolar.vercel.app/img/satyajit%20gadge.png"
                alt="Technical Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Satyajit Gadge</h3>
              <p className="text-gray-600 mb-2">Operations Manager</p>
              {/* <p className="text-gray-500 text-sm">
                15+ years of solar installation expertise
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://shreenathelesolar.vercel.app/img/mayuresh%20gadge.png"
                alt="Operations Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mayuresh Gadge</h3>
              <p className="text-gray-600 mb-2">Technical Director</p>
              {/* <p className="text-gray-500 text-sm">
                12+ years of project management
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and satisfaction above all else.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project we undertake.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to provide better solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;