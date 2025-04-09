import React from 'react';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">Simplify Property Management with SahiGhar</h1>
          <p className="mt-4 text-lg">Connect landlords, tenants, and maintenance staff in one powerful platform. Streamline operations and improve communication.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400">Get Started</a>
            <a href="#" className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-white">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Powerful Features</h2>
          <p className="mt-2 text-gray-600">SahiGhar  offers everything you need to manage properties efficiently</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-yellow-200">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold mt-2">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gray-200 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Designed for Everyone</h2>
          <p className="mt-2 text-gray-600">SahiGhar serves the unique needs of all participants in the property management ecosystem</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {users.map((user, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-4">
              <img src={user.image} alt={user.title} className="mx-auto w-20 h-20 rounded-full" />
              <h3 className="text-xl font-bold mt-4">{user.title}</h3>
              <p className="mt-2 text-gray-400">{user.description}</p>
              <ul className="mt-4 text-left text-gray-300 space-y-1">
                {user.features.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2"><span><b>-</b></span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
         <br></br>
      {/* Call to Action Section */}
      <section className="py-10 bg-yellow-500 text-white text-center ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Transform Your Property Management?</h2>
          <p className="mt-4">Join thousands of property managers who are saving time and improving tenant satisfaction with PropConnect.</p>
          <a href="#" className="mt-6 inline-block bg-white text-yellow-400 px-6 py-3 rounded-lg hover:bg-gray-200">Start Your Free Trial</a>
        </div>
      </section>
      <br></br>
    </div>
  );
};

// Features Data
const features = [
  { icon: "💰", title: "Rent Payment Portal", description: "Secure online payment processing with automatic reminders and complete transaction history." },
  { icon: "🔧", title: "Maintenance Requests", description: "Submit, track, and resolve maintenance issues with our streamlined ticket system." },
  { icon: "📄", title: "Document Management", description: "Store and share important documents securely, including leases and contracts." },
  { icon: "💬", title: "Communication Hub", description: "Built-in messaging system to keep all parties connected and informed." },
  { icon: "📊", title: "Analytics Dashboard", description: "Track property performance, expenses, and occupancy rates with visual reports." },
  { icon: "📱", title: "Mobile Responsive", description: "Access the platform from any device, anywhere, anytime." },
];

// User Types Data
const users = [
  {
    image: "/api/placeholder/120/120",
    title: "For Landlords",
    description: "Take control of your properties and streamline operations",
    features: ["Collect rent payments automatically", "Track maintenance and expenses", "Manage multiple properties efficiently", "Access comprehensive analytics"],
  },
  {
    image: "/api/placeholder/120/120",
    title: "For Tenants",
    description: "Enjoy a hassle-free renting experience",
    features: ["Pay rent online securely", "Submit maintenance requests easily", "Access important documents anytime", "Communicate directly with landlords"],
  },
  {
    image: "/api/placeholder/120/120",
    title: "For Maintenance Staff",
    description: "Efficiently manage and resolve service requests",
    features: ["Receive real-time maintenance alerts", "Track job progress and updates", "Manage schedules effectively", "Upload proof of completion"],
  },
];

export default Homepage;