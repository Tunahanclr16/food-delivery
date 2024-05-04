import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Address: 123 Restaurant St.</p>
            <p>Phone: 555-123-4567</p>
            <p>Email: info@restaurant.com</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 10am - 10pm</p>
            <p>Saturday - Sunday: 12pm - 12am</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p>Subscribe to our newsletter for updates</p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-600 py-2 px-6 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
