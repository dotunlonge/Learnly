// Footer.tsx
/**
 * Represents the Footer component of the Learnly application.
 * 
 * This component serves as the footer for the Learnly application, offering navigation to key sections
 * of the site, contact information, and social media links. It's designed to provide users with
 * additional resources and channels for engagement or support. The footer is styled using Bootstrap
 * for a consistent and responsive layout across devices.
 *
 * @component
 * @example
 * return <Footer />
 */
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-5 container-fluid">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left py-5">
          {/* Section for Learnly introduction and mission statement */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Learnly</h5>
            <p>Learnly empowers learners worldwide with access to an expansive library of online courses covering various subjects. Join our community to start your journey towards knowledge and skill development today.</p>
          </div>

          {/* Navigation links to different course categories */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Courses</h5>
            <p>
              <Link href="/web-development"  className="text-dark" style={{ textDecoration: 'none' }}>Web Development </Link>
            </p>
            <p>
              <Link href="/data-science"  className="text-dark" style={{ textDecoration: 'none' }}>Data Science </Link>
            </p>
            <p>
              <Link href="/cyber-security"  className="text-dark" style={{ textDecoration: 'none' }}>Cyber Security </Link>
            </p>
          </div>

          {/* Useful links for users */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful links</h5>
            <p>
              <Link href="/your-account"  className="text-dark" style={{ textDecoration: 'none' }}>Your Account </Link>
            </p>
            <p>
              <Link href="/become-an-instructor"  className="text-dark" style={{ textDecoration: 'none' }}>Become an Instructor </Link>
            </p>
            <p>
              <Link href="/help"  className="text-dark" style={{ textDecoration: 'none' }}>Help </Link>
            </p>
          </div>

          {/* Contact information section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
        <hr/>
        {/* Copyright and social media links */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-left text-md-left">© {new Date().getFullYear()} Learnly</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <Link href="https://facebook.com" className="btn-floating btn-sm text-dark" style={{ fontSize: '1.2rem' }}><FaFacebookF /></Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://twitter.com" className="btn-floating btn-sm text-dark" style={{ fontSize: '1.2rem' }}><FaTwitter /></Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://plus.google.com" className="btn-floating btn-sm text-dark" style={{ fontSize: '1.2rem' }}><FaGooglePlusG /></Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://linkedin.com" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}><FaLinkedinIn /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
