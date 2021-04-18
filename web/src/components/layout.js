import React from "react";
import { Link } from "gatsby";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

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
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div>
          <h3>{footer.about}</h3>
          <hr></hr>
          <p>{footer.aboutDescription}</p>
        </div>
        <div>
          <h3>{footer.contact}</h3>
          <hr></hr>
          <ul>
            {footer.contactDescription.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <hr></hr>
          <ul>
            {footer.quickLinks.map((el) => (
              <li key={el.text}>
                <Link to={el.link}>{el.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className={styles.siteInfo}>
        {console.log(footer)}
        Copyright &copy; {new Date().getFullYear()},{" "}
        <span>Budapest Agency</span>
      </div> */}
    </footer>
  </>
);

export default Layout;
