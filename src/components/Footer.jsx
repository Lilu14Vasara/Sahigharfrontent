import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Footer Info */}
        <div>
          <div className="text-2xl font-bold">Sahi<span className="text-yellow-500">Ghar</span></div>
          <p className="mt-2 text-gray-400">
            The all-in-one property management solution connecting landlords, tenants, and maintenance staff.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">f</a>
            <a href="#" className="text-gray-400 hover:text-white">t</a>
            <a href="#" className="text-gray-400 hover:text-white">in</a>
            <a href="#" className="text-gray-400 hover:text-white">ig</a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Knowledge Base</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">GDPR Compliance</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2025 SahiGhar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
