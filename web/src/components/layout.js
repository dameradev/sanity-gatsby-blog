import React from "react";
import { Link } from "gatsby";
import Header from "./header";

import "../styles/layout.css";
import "./layout.scss";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  footer,
}) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    {console.log(footer)}

    <div className="content">{children}</div>
    <footer className="footer">
      <div className="footerWrapper">
        <div>
          <h3>{footer.about}</h3>
          <p>{footer.aboutDescription}</p>
        </div>
        <div>
          <h3>{footer.contact}</h3>
          <ul>
            {footer.contactDescription.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul>
            {footer.quickLinks.map((el) => (
              <li key={el.text}>
                <Link to={el.link}>{el.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="siteInfo">
        {console.log(footer)}
        Copyright &copy; {new Date().getFullYear()},{" "}
        <span>Budapest Agency</span>
      </div> */}
    </footer>
  
  </>
  
);

export default Layout;
