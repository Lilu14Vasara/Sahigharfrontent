import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            SahiGhar is transforming the property management landscape. Our platform connects landlords, tenants, and maintenance staff 
            in a seamless, transparent, and efficient way. We aim to simplify property management for everyone involved, offering tools 
            and features that make it easy to manage properties, pay rent, submit maintenance requests, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At SahiGhar, our mission is to create a unified ecosystem for property management, making it easier for landlords 
              to manage their properties, tenants to pay rent seamlessly, and maintenance staff to complete tasks efficiently.
            </p>
          </div>

          {/* Our Vision */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to empower property managers and tenants by providing them with an integrated platform that enables 
              smooth and transparent communication, efficient property management, and easy accessibility.
            </p>
          </div>

          {/* Our Values */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600">
              We believe in honesty, transparency, and customer satisfaction. We are committed to providing top-quality service 
              and building long-lasting relationships with our clients.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose SahiGhar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-200 ">
              <div className="text-4xl text-yellow-500 mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ease of Use</h3>
              <p className="text-gray-600">Our platform is simple to use and requires no technical expertise. Both landlords and tenants can easily navigate and use the features.</p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-200">
              <div className="text-4xl text-yellow-500 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast and Reliable</h3>
              <p className="text-gray-600">SahiGhar ensures fast transactions, quick maintenance requests, and immediate notifications so everything stays on track.</p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-200">
              <div className="text-4xl text-yellow-500 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure and Private</h3>
              <p className="text-gray-600">We prioritize security, ensuring that your data is encrypted and protected. Your privacy is our responsibility.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
          <p className="text-gray-600 mb-8">Our team consists of experienced professionals dedicated to improving property management for everyone.</p>
          <div className="flex justify-center gap-8">
            {/* Team Member 1 */}
            <div className="team-member text-center">
              <img src="https://via.placeholder.com/120" alt="Team Member" className="rounded-full mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-gray-800">Vasara Lilu</h4>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="team-member text-center">
              <img src="https://via.placeholder.com/120" alt="Team Member" className="rounded-full mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-gray-800">jhain kritika</h4>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member text-center">
              <img src="https://via.placeholder.com/120" alt="Team Member" className="rounded-full mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-gray-800">k.v ahir</h4>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
