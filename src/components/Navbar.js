import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import logoLight from '../img/logonav12333.png';
import logoDark from '../img/darkimage.png';
import { HiMoon, HiSun } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  // Theme state synced with localStorage and system preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchQuery), 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Reset UI states on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setActiveSubMenu(null);
    setMobileDropdown(null);
    setMobileSubMenu(null);
    setSearchQuery('');
  }, [location.pathname]);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    {
      label: 'Trainings',
      to: '/it-trainings',
      key: 'Trainings',
      submenu: [
        { to: '/it-trainings/web-development', label: 'Web Development' },
        { to: '/it-trainings/cyber-security', label: 'CyberSecurity' },
        { to: '/it-trainings/data-science', label: 'Data Science' },
        { to: '/it-trainings/hardware-networking', label: 'Hardware Networking' },
        { to: '/it-trainings/android-app-development', label: 'Android App Development' },
        { to: '/it-trainings/aiml', label: 'AI & Machine Learning' },
        { to: '/it-trainings/digital-marketing', label: 'Digital Marketing' },
        { to: '/it-trainings/devops', label: 'DevOps' },
        { to: '/it-trainings/certificate', label: 'Certificate Validation' },
      ],
    },
    {
      label: 'Services',
      to: '/services',
      key: 'Services',
      submenu: [
        {
          to: '/services/cyber-security-services',
          label: 'Cyber Security Services',
          submenu: [
            { to: '/services/cyber-security-services/it-infra', label: 'IT Infra' },
            { to: '/services/cyber-security-services/email-security', label: 'Email Security' },
            { to: '/services/cyber-security-services/end-point-security', label: 'End-Point Security' },
            { to: '/services/cyber-security-services/cyber-security-manage-services', label: 'Cyber Security Manage Service' },
            { to: '/services/cyber-security-services/dlp', label: 'Data Loss Prevention (DLP)' },
            { to: '/services/cyber-security-services/red-teaming', label: 'Red Teaming' },
          ],
        },

         {
          to: '/services/network-services',
          label: 'Network Services',
          submenu: [
            { to: '/services/network-services/next-gen-firewall', label: 'Next Gen FireWall' },
            { to: '/services/network-services/swith-router', label: 'Swith And Router' },
            { to: '/services/network-services/ddos', label: ' Distributed Denial of Service' },
            { to: '/services/network-services/network-security-ms', label: 'Network Security manage Service' },
          ],
        },
        {
          to: '/services/vulnerability-assessment-and-penetration-testing',
          label: 'VAPT',
          submenu: [
            { to: '/services/vulnerability-assessment-and-penetration-testing/web', label: 'Web Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/mobile', label: 'Mobile Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/network', label: 'Network Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/api', label: 'API Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/cloud', label: 'Cloud Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/wireless', label: 'Wireless Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/thick', label: 'Thick Client Security' },
            { to: '/services/vulnerability-assessment-and-penetration-testing/source-code-review', label: 'Source Code Review Security' },    
          ],
        },
        {
          to: '/services/cloud-services',
          label: 'Cloud Services',
          submenu: [
            { to: '/services/cloud-services/waf', label: 'WAF' },
            { to: '/services/cloud-services/casb', label: 'CASB' },
            { to: '/services/cloud-services/ztna', label: 'ZTNA' },
            { to: '/services/cloud-services/sase', label: 'SASE' },
          ],
        },
        {
          to: '/services/cyber-security-awarness-training',
          label: 'Cyber Security Awareness & Trainings',
          submenu: [
            { to: '/services/cyber-security-awarness-training/awarness-training', label: 'Awarness Training' },
            { to: '/services/cyber-security-awarness-training/phishing-simulization', label: 'Phishing Simulization' },
          ],
        },
        {
          to: '/services/governance-risk-counsalting',
          label: 'Governance Risk & Counsalting (GRC)',
          submenu: [
            { to: '/services/governance-risk-counsalting/iso-readiness', label: 'ISO Readiness' },
            { to: '/services/governance-risk-counsalting/config-review', label: 'Config Review' },
            { to: '/services/governance-risk-counsalting/manage-service', label: 'Manage Service' },
            { to: '/services/governance-risk-counsalting/gap-assessment-compliance', label: 'Gap Assessment As Per Compliance' },
            { to: '/services/governance-risk-counsalting/vcisco-service', label: 'V-CISO As Service' },   
          ],
        },
      ],
    },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  const searchItems = [
    { label: 'Cyber Security Services', to: '/services/cyber-security-services' },
    { label: 'Network Services', to: '/services/network-services' },
    { label: 'VAPT', to: '/services/vulnerability-assessment-and-penetration-testing' },
    { label: 'Cloud Services', to: '/services/cloud-services' },
    { label: 'Cyber Security Awareness & Trainings', to: '/services/cyber-security-awarness-training' },
    { label: 'Governance Risk & Counsalting (GRC)', to: '/services/governance-risk-counsalting' },
  ];

  const filteredSearchResults = debouncedSearch
    ? searchItems.filter(item =>
        item.label.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : [];


  // Separate timers for dropdown and submenu close delays
  const [closeDropdownTimeout, setCloseDropdownTimeout] = useState(null);
  const [closeSubMenuTimeout, setCloseSubMenuTimeout] = useState(null);

  return (
<nav
  className="fixed top-0 left-0 w-full z-50 text-gray-900 dark:text-white shadow-md transition-all duration-500 
    bg-gradient-to-r from-[#d3eafd] to-[#f1daff] 
    dark:from-[#0b1120] dark:to-[#1f1f2e] 
    backdrop-blur-md bg-opacity-70 dark:bg-opacity-80"
>


  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logoLight}
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 object-contain cursor-pointer ml-2 sm:ml-4 md:ml-6 transform scale-125 block dark:hidden"
        />
        <img
          src={logoDark}
          alt="Logo"
          className="h-10 sm:h-12 md:h-14 object-contain cursor-pointer ml-2 sm:ml-4 md:ml-6 transform scale-125 hidden dark:block"
        />
      </Link>
    </div>

    <div className="hidden md:flex gap-6 items-center">
      {navLinks.map((link) => (
        <div
          key={link.label}
          className="relative group"
          onMouseEnter={() => {
            if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
            setOpenDropdown(link.key || link.label);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => {
              setOpenDropdown(null);
              setActiveSubMenu(null);
            }, 1500);
            setCloseDropdownTimeout(timeout);
          }}
        >
          {link.submenu ? (
            <>
              <Link
                to={link.to}
                className="flex items-center gap-1 font-semibold hover:text-white hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors px-2 py-1 rounded"
              >
                {link.label}
                <ChevronDown size={14} />
              </Link>
              {openDropdown === (link.key || link.label) && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded shadow-lg w-64 z-50">
                  {link.submenu.map((sub) => (
                    <div
                      key={sub.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (closeSubMenuTimeout) clearTimeout(closeSubMenuTimeout);
                        setActiveSubMenu(sub.label);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setActiveSubMenu(null);
                        }, 1500);
                        setCloseSubMenuTimeout(timeout);
                      }}
                    >
                      {sub.submenu ? (
                        <>
                          <div className="flex justify-between items-center hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white cursor-default">
                            <NavLink
                              to={sub.to}
                              onClick={() => setOpenDropdown(null)}
                              className={({ isActive }) =>
                                "px-4 py-2 flex-grow font-semibold " +
                                (isActive ? "bg-blue-500 text-white font-bold" : "")
                              }
                            >
                              {sub.label}
                            </NavLink>
                            <div className="px-4 py-2">
                              <ChevronRight size={14} />
                            </div>
                          </div>
                          {activeSubMenu === sub.label && (
                            <div className="absolute top-0 left-full w-56 bg-white dark:bg-[#1e293b] text-black dark:text-white shadow-md z-50">
                              {sub.submenu.map((subSub) => (
                                <NavLink
                                  key={subSub.to}
                                  to={subSub.to}
                                  onClick={() => setOpenDropdown(null)}
                                  className={({ isActive }) =>
                                    "block px-4 py-2 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors" +
                                    (isActive ? " bg-blue-500 text-white font-bold" : "")
                                  }
                                >
                                  {subSub.label}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={sub.to}
                          onClick={() => setOpenDropdown(null)}
                          className={({ isActive }) =>
                            "block px-4 py-2 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors" +
                            (isActive ? " bg-blue-500 text-white font-bold" : "")
                          }
                        >
                          {sub.label}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                "font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded" +
                (isActive ? " underline underline-offset-4" : "")
              }
            >
              {link.label}
            </NavLink>
          )}
        </div>
      ))}

      {/* Desktop Search */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Services..."
          className="rounded px-3 py-1 bg-white dark:bg-[#1e293b] text-black dark:text-white border dark:border-gray-600 transition"
        />
        {filteredSearchResults.length > 0 && (
          <ul className="absolute top-full left-0 bg-white dark:bg-[#1e293b] text-black dark:text-white w-64 mt-1 shadow-lg rounded z-50">
            {filteredSearchResults.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setSearchQuery('')}
                  className={({ isActive }) =>
                    "block px-4 py-2 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-colors" +
                    (isActive ? " bg-blue-500 text-white font-bold" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {/* ✅ Dark Mode Toggle Button */}
        <button
  onClick={toggleTheme}
  aria-label="Toggle Dark Mode"
  className="ml-4 p-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-inner hover:scale-105 transition-transform"
>
  {theme === 'dark' ? (
    <HiSun className="text-yellow-400 text-lg" />
  ) : (
    <HiMoon className="text-gray-800 text-lg" />
  )}
</button>

      </div>
    </div>

{/* Mobile Toggle */}
<button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
  {menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
</div>

{/* Mobile Menu */}
{menuOpen && (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="md:hidden px-4 pb-4 pt-2 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117] text-black dark:text-white space-y-4 rounded-b-lg shadow-lg"
  >

    {/* 🌙 Dark Mode Toggle */}
    <div className="flex justify-end">
      <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="ml-4 p-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-inner hover:scale-105 transition-transform"
            >
              {theme === 'dark' ? (
                <HiSun className="text-yellow-400 text-lg" />
              ) : (
                <HiMoon className="text-gray-800 text-lg" />
              )}
            </button>
    </div>

    {/* Mobile Search */}
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Services..."
        className="w-full rounded px-3 py-2 text-black dark:text-white dark:bg-gray-800 border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#17A4E0]"
      />
      {filteredSearchResults.length > 0 && (
        <ul className="absolute top-full left-0 bg-white dark:bg-[#1f2937] text-black dark:text-white w-full mt-1 shadow-lg rounded z-50 max-h-60 overflow-auto">
          {filteredSearchResults.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => {
                  setSearchQuery('');
                  setMenuOpen(false);
                }}
                className={({ isActive }) =>
                  "block px-4 py-2 transition hover:bg-[#17A4E0] hover:text-white dark:hover:bg-[#155A8A]" +
                  (isActive ? " bg-[#17A4E0] text-white" : "")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Existing menu links */}
    {navLinks.map((link) => (
      <div key={link.label}>
        {link.submenu ? (
          <>
            <div className="w-full flex justify-between items-center py-2 font-semibold">
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  "flex-grow transition" +
                  (isActive ? " font-bold text-[#17A4E0]" : "")
                }
              >
                {link.label}
              </NavLink>
              <button
                onClick={() =>
                  mobileDropdown === link.label
                    ? setMobileDropdown(null)
                    : setMobileDropdown(link.label)
                }
                aria-label="Toggle submenu"
                className="pl-2"
              >
                {mobileDropdown === link.label ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>

            {mobileDropdown === link.label && (
              <div className="pl-4 space-y-1">
                {link.submenu.map((sub) => (
                  <div key={sub.label}>
                    {sub.submenu ? (
                      <>
                        <div className="flex justify-between items-center">
                          <NavLink
                            to={sub.to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                              "block py-1 font-semibold flex-grow transition" +
                              (isActive ? " text-[#17A4E0] font-bold" : "")
                            }
                          >
                            {sub.label}
                          </NavLink>
                          <button
                            onClick={() =>
                              mobileSubMenu === sub.label
                                ? setMobileSubMenu(null)
                                : setMobileSubMenu(sub.label)
                            }
                            className="pl-2"
                            aria-label="Toggle Submenu"
                          >
                            {mobileSubMenu === sub.label ? (
                              <ChevronUp size={18} />
                            ) : (
                              <ChevronRight size={18} />
                            )}
                          </button>
                        </div>
                        {mobileSubMenu === sub.label && (
                          <div className="pl-4 space-y-1">
                            {sub.submenu.map((subSub) => (
                              <NavLink
                                key={subSub.to}
                                to={subSub.to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                  "block py-1 transition" +
                                  (isActive ? " font-bold text-[#17A4E0]" : "")
                                }
                              >
                                {subSub.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={sub.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          "block py-1 transition" +
                          (isActive ? " font-bold text-[#17A4E0]" : "")
                        }
                      >
                        {sub.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <NavLink
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              "block py-2 transition" +
              (isActive ? " font-bold text-[#17A4E0]" : "")
            }
          >
            {link.label}
          </NavLink>
        )}
      </div>
    ))}
  </motion.div>
)}
</nav>
  );
};

export default Navbar;
