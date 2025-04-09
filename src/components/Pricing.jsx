import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Affordable Pricing Plans</h2>
        <p className="text-center text-gray-600 mb-8">
          Choose the plan that fits your needs. SahiGhar offers flexible and affordable pricing for everyone.
        </p>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for small landlords and tenants</p>
            <div className="text-3xl font-bold text-yellow-500 mb-4">$19/month</div>
            <ul className="text-gray-600 mb-4">
              <li>Access to all basic features</li>
              <li>5 properties management</li>
              <li>Email support</li>
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">Choose Plan</button>
          </div>

          <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-4">Ideal for medium-sized property managers</p>
            <div className="text-3xl font-bold text-yellow-500 mb-4">$49/month</div>
            <ul className="text-gray-600 mb-4">
              <li>All basic features + advanced features</li>
              <li>Unlimited properties management</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">Choose Plan</button>
          </div>

          <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-4">For large property management companies</p>
            <div className="text-3xl font-bold text-yellow-500 mb-4">$99/month</div>
            <ul className="text-gray-600 mb-4">
              <li>All features included</li>
              <li>Unlimited properties management</li>
              <li>24/7 support + custom solutions</li>
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
