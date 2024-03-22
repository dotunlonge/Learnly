// components/home/navbar.tsx
import React, { useState, useCallback } from "react";
import Link from "next/link";

/**
 * Navigation bar for the Learnly platform.
 * It features a responsive design that adapts to screen size changes and
 * includes interactive dropdown menus for course categories.
 *
 * @returns {React.ReactElement} The rendered navigation bar component.
 */
const Navbar: React.FC = () => {
  // State for managing the dropdown open state.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State for managing the collapse state of the navbar.
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  /**
   * Toggles the state of the dropdown open state.
   */
  const handleToggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
  }, []);

  /**
   * Toggles the collapse state of the navigation bar.
   */
  const handleToggleNavCollapse = useCallback(() => {
    setIsNavCollapsed((prevState) => !prevState);
  }, []);

  /**
   * Sets the dropdown to open when the mouse enters the dropdown area.
   */
  const handleMouseEnterDropdown = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  /**
   * Sets the dropdown to close when the mouse leaves the dropdown area.
   */
  const handleMouseLeaveDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`z-index-2 position-fixed container-fluid navbar navbar-expand-lg navbar-light bg-white isLargeScreen`}
    >
      <div className={`container`}>
        <Link className="navbar-brand" href="#">
          Learnly
        </Link>
        {/* Adjusted button to toggle the navbar collapse state */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNavCollapse}
          aria-controls="navbarNavDropdown"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          {isNavCollapsed ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="toggler-icon-x">X</span>
          )}
        </button>
        {/* Adjusted div to show/hide based on isNavCollapsed state */}
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item dropdown mega-dropdown ${isDropdownOpen ? "show" : ""}`}
            >
              {/* Prevent default to stop link navigation */}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                onClick={handleToggleDropdown}
                onMouseEnter={handleMouseEnterDropdown}
                aria-expanded={isDropdownOpen}
              >
                Courses
              </Link>
              <div
                className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12">
                      <h6 className="dropdown-header">Technology</h6>
                      <Link className="dropdown-item" href="#">
                        Web Development
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Data Science
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Cyber Security
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="mailto:rep@learnly.com">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search courses"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
