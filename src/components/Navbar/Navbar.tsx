import './Navbar.css';
import Card from "../Card/Card";
import { useRef, useEffect } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { FaGear, FaClipboardList, FaChartSimple } from "react-icons/fa6";

const navbarItems = [
  { icon: <RiDashboardFill size={25} className="navbar-icon" />, label: "Dashboard", navlink: "/dashboard" },
  { icon: <FaChartSimple size={25} />, label: "Scorecard", navlink: "/scorecard" },
  { icon: <FaClipboardList size={25} />, label: "Journal", navlink: "/journal" },
  { icon: <FaGear size={25} />, label: "Settings", navlink: "/settings" },
];

const Navbar = () => {
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      const infoDiv = document.createElement("div");
      infoDiv.style.position = "fixed";
      infoDiv.style.bottom = "10px";
      infoDiv.style.left = "10px";
      infoDiv.style.background = "rgba(0, 0, 0, 0.7)";
      infoDiv.style.color = "white";
      infoDiv.style.padding = "8px 12px";
      infoDiv.style.borderRadius = "6px";
      infoDiv.style.zIndex = "9999";
      infoDiv.style.fontSize = "14px";
      infoDiv.textContent = `Navbar: ${width}px × ${height}px`;
      // document.body.appendChild(infoDiv);
    }
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <Card width="110px" className="navbar-logo-display">
        <h1 className="navbar-logo">Kitaab</h1>
      </Card>
      <div className="navbar-spacing"></div>
      <Card width="110px">
        <ul className="navbar-list">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className={`navbar-item ${
                location.pathname === item.navlink ? "active" : ""
              }`}
            >
              <Link to={item.navlink} className="navbar-link">
                {item.icon}
                <p className="navbar-label">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </nav>
  );
};

export default Navbar;
