import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 hover:bg-y">Powerful Features</h2>
        <p className="text-center text-gray-600 mb-8">
          SahiGhar offers everything you need to manage properties efficiently.
        </p>

        {/* Features List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rent Payment Portal</h3>
            <p className="text-gray-600">Secure online payment processing with automatic reminders and complete transaction history.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance Requests</h3>
            <p className="text-gray-600">Submit, track, and resolve maintenance issues with our streamlined ticket system.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Management</h3>
            <p className="text-gray-600">Store and share important documents securely, including leases and contracts.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Communication Hub</h3>
            <p className="text-gray-600">Built-in messaging system to keep all parties connected and informed.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Track property performance, expenses, and occupancy rates with visual reports.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:bg-yellow-200">
            <div className="text-4xl text-yellow-500 mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Responsive</h3>
            <p className="text-gray-600">Access the platform from any device, anywhere, anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
