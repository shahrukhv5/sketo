
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-400">
              Your go-to platform for learning and upskilling. We provide
              world-class training programs for professionals and students.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href="mailto:info@company.com"
                  className="hover:text-gray-300"
                >
                  info@company.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Phone:</span>{" "}
                <a href="tel:+123456789" className="hover:text-gray-300">
                  +1 234 567 89
                </a>
              </li>
              <li>
                <span className="text-gray-400">Address:</span> 123 Business
                St., Suite 101, NY, USA
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gray-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
