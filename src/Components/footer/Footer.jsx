import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50/70 to-yellow-100/70 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        {/* Column 1 - Logo + Description */}
        <div>
          <img
            src="/svgs/brand-logos/logo-flowbee-secondary.svg"
            alt="Flowbee Logo"
            width={130}
            height={36}
            className="object-contain"
          />
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Offers & Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Need Help */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Need help?</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Track your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Follow Us */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flowbee.io All rights reserved.
      </div>
    </div>
  );
};
