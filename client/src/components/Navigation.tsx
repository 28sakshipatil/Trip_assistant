import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { FaGlobeAmericas, FaBars, FaUser, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.body.classList.toggle("dark-mode", newMode);
  };

  // Function to close mobile navbar when navigation link is clicked
  const closeMobileNav = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new (window as any).bootstrap.Collapse(
        navbarCollapse,
        {
          toggle: false,
        }
      );
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          zIndex: "1030",
        }}
      >
        <style>
          {`
          .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          .logo-container:hover {
            transform: scale(1.05);
          }
          .logo-icon {
            position: relative;
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
          }
          .logo-icon svg {
            transition: transform 0.3s ease;
          }
          .logo-container:hover .logo-icon svg {
            transform: rotate(5deg);
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          .logo-icon {
            animation: logoFloat 4s ease-in-out infinite;
          }
          .navbar-brand {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .navbar-nav .nav-link {
            color: #fff !important;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 0.8rem 1.3rem;
            border-radius: 12px;
            margin: 0 0.3rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            background: rgba(255,255,255,0.06);
            backdrop-filter: blur(10px);
            border: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
          .navbar-nav .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          .navbar-nav .nav-link:hover::before {
            left: 100%;
          }
          .navbar-nav .nav-link {
            animation: fadeInUp 0.6s ease-out;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .nav-item:nth-child(1) .nav-link { animation-delay: 0.1s; }
          .nav-item:nth-child(2) .nav-link { animation-delay: 0.2s; }
          .nav-item:nth-child(3) .nav-link { animation-delay: 0.3s; }
          .nav-item:nth-child(4) .nav-link { animation-delay: 0.4s; }
          .nav-item:nth-child(5) .nav-link { animation-delay: 0.5s; }
          .navbar-nav .nav-link.active,
          .navbar-nav .nav-link:focus,
          .navbar-nav .nav-link:hover {
            color: #2d3748 !important;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(255,215,0,0.3);
            transform: translateY(-2px);
            border: none;
          }
          .navbar-toggler {
            border: none;
            padding: 0.5rem;
            border-radius: 10px;
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.12);
          }
          .navbar-toggler:focus {
            box-shadow: 0 0 0 0.2rem rgba(255,255,255,0.25);
          }
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }
          .action-btn {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border: none;
            border-radius: 12px;
            padding: 0.6rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          }
          .action-btn:hover {
            background: rgba(255,255,255,0.25);
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-color: rgba(255,255,255,0.4);
          }
          .action-btn:active {
            transform: translateY(0) scale(0.95);
          }
          .profile-icon {
            width: 35px;
            height: 35px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: 2px solid rgba(255,255,255,0.3);
          }
          .dropdown-menu {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            padding: 0.5rem;
          }
          .dropdown-item {
            border-radius: 8px;
            margin: 0.2rem 0;
            transition: all 0.2s ease;
          }
          .dropdown-item:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            transform: translateX(5px);
          }
          @media (max-width: 991.98px) {
            .navbar-nav {
              background: rgba(255,255,255,0.08);
              backdrop-filter: blur(10px);
              border-radius: 15px;
              padding: 1rem;
              margin-top: 1rem;
              border: 1px solid rgba(255,255,255,0.12);
              animation: slideDown 0.3s ease-out;
              width: 100%;
            }
            .navbar-nav .nav-link {
              margin: 0.5rem 0;
              text-align: center;
              border-radius: 8px;
              padding: 0.8rem 1rem;
            }
            .navbar-brand {
              font-size: 1.3rem;
            }
            .logo-icon svg {
              width: 35px;
              height: 35px;
            }
            .action-btn {
              padding: 0.5rem;
              margin: 0.2rem;
            }
            .d-flex.align-items-center {
              gap: 0.5rem;
            }
          }
          @media (max-width: 576px) {
            .navbar-brand {
              font-size: 1rem;
            }
            .logo-icon svg {
              width: 28px;
              height: 28px;
            }
            .navbar-nav .nav-link {
              font-size: 0.95rem;
              padding: 0.6rem 0.7rem;
              margin: 0.3rem 0;
            }
            .action-btn {
              padding: 0.35rem;
              margin: 0.1rem;
            }
            .container-fluid {
              padding: 0 0.3rem;
            }
            .profile-icon {
              width: 30px;
              height: 30px;
            }
            .navbar-toggler {
              padding: 0.3rem;
            }
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          /* Mobile menu improvements */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background: rgba(255,255,255,0.04);
              backdrop-filter: blur(15px);
              border-radius: 0 0 15px 15px;
              margin-top: 0.5rem;
              border: 1px solid rgba(255,255,255,0.08);
              border-top: none;
            }
            .navbar-collapse.show {
              animation: mobileMenuSlide 0.3s ease-out;
            }
          }
          @keyframes mobileMenuSlide {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          /* Loading animation for navbar */
          .navbar {
            animation: navbarLoad 0.8s ease-out;
          }
          @keyframes navbarLoad {
            from {
              opacity: 0;
              transform: translateY(-100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style>

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="logo-container">
              <div className="logo-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#667eea" stopOpacity="1" />
                      <stop offset="100%" stopColor="#764ba2" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FFA500" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  {/* Map background */}
                  <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    rx="3"
                    fill="url(#gradient1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />

                  {/* Map grid lines */}
                  <path
                    d="M12 16h16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M12 20h16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M12 24h16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M16 12v16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M20 12v16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M24 12v16"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                  />

                  {/* Location pin */}
                  <circle cx="20" cy="18" r="2" fill="url(#gradient2)" />
                  <path
                    d="M20 20v6"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Compass rose */}
                  <circle
                    cx="28"
                    cy="12"
                    r="3"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M28 9v6M25 12h6"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />

                  {/* Route line */}
                  <path
                    d="M12 28c2-2 4-1 8-1s6-1 8 1"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* --- Nav Items --- */}
            <ul className="navbar-nav me-auto mb-3 mb-lg-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3 ps-3 ps-lg-0">
              <li className="nav-item">
               <Link className="nav-link" to="/trip-budget" onClick={closeMobileNav}>
                 <FaWallet className="me-2 d-lg-none" />
                     Budget Estimator
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMobileNav}>
                  <i className="fas fa-home me-2 d-lg-none"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" onClick={closeMobileNav}>
                  <i className="fas fa-info-circle me-2 d-lg-none"></i>About Us
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/find-friends"
                  onClick={closeMobileNav}
                >
                  <i className="fas fa-users me-2 d-lg-none"></i>Find Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/more-places"
                  onClick={closeMobileNav}
                >
                  <i className="fas fa-star me-2 d-lg-none"></i>Famous Places
                </Link>
              </li>

            <li className="nav-item">
               <Link className="nav-link" to="/currency" onClick={closeMobileNav}>
                 <FaWallet className="me-2 d-lg-none" />
                     Currency Converter
                </Link>
              </li>


<li className="nav-item">
               <Link className="nav-link" to="/packlist" onClick={closeMobileNav}>
                 <FaWallet className="me-2 d-lg-none" />
                    Smart Packing List
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/places"
                  onClick={closeMobileNav}
                >
                  <i className="fas fa-map-marker-alt me-2 d-lg-none"></i>Places
                </Link>
              </li>
            </ul>

            {/* --- Right Side Icons --- */}
            <div className="d-flex align-items-center flex-wrap">
              <button
                className="btn action-btn d-flex align-items-center me-2 me-lg-3"
                onClick={toggleDarkMode}
                title={
                  darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {darkMode ? (
                  <FaSun className="text-warning" size={18} />
                ) : (
                  <FaMoon className="text-light" size={18} />
                )}
              </button>

              <div className="dropdown">
                <button
                  className="btn action-btn d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="User Menu"
                >
                  <FaBars
                    className="text-light me-2 d-none d-lg-inline"
                    size={16}
                  />
                  <div className="rounded-circle d-flex align-items-center justify-content-center profile-icon">
                    <FaUser className="text-white" size={16} />
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item fw-bold"
                      onClick={() => {
                        closeMobileNav();
                        navigate("/auth", { state: { isLogin: false } });
                      }}
                    >
                      <i className="fas fa-user-plus me-2"></i>Sign up
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        closeMobileNav();
                        navigate("/auth", { state: { isLogin: true } });
                      }}
                    >
                      <i className="fas fa-sign-in-alt me-2"></i>Log in
                    </button>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/help"
                      onClick={closeMobileNav}
                    >
                      <i className="fas fa-question-circle me-2"></i>Help Centre
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
