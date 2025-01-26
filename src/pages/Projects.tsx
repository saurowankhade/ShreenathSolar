import { ArrowRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Green Valley Residences",
      type: "Residential",
      description: "A 50-home community solar installation project",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "250kW",
        savings: "40%",
        completion: "2023"
      }
    },
    {
      title: "Sunrise Shopping Mall",
      type: "Commercial",
      description: "Large-scale commercial solar installation",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "500kW",
        savings: "60%",
        completion: "2023"
      }
    },
    {
      title: "Tech Park Solar Farm",
      type: "Industrial",
      description: "Industrial park renewable energy project",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "1MW",
        savings: "75%",
        completion: "2022"
      }
    },
    {
      title: "Riverside Apartments",
      type: "Residential",
      description: "Multi-family residential solar installation",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        capacity: "150kW",
        savings: "35%",
        completion: "2023"
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-1 rounded-full">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-yellow-500">
                        {project.stats.capacity}
                      </div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-yellow-500">
                        {project.stats.savings}
                      </div>
                      <div className="text-sm text-gray-600">Energy Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-yellow-500">
                        {project.stats.completion}
                      </div>
                      <div className="text-sm text-gray-600">Completion</div>
                    </div>
                  </div>

                  <button className="inline-flex items-center text-yellow-500 hover:text-yellow-600">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">100+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">5MW+</div>
              <p className="text-gray-600">Total Capacity Installed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50%</div>
              <p className="text-gray-600">Average Energy Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;