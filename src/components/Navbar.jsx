import React, { Fragment, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../public/images/mainLogo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const mobile_view = useRef();

  function menu(e) {
    e.target.classList.toggle(styles["is_active"]);
    mobile_view.current.classList.toggle(styles["is_active"]);
  }

  return (
    <Fragment>
      <nav className={`${styles.container} mt-5`}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={logo} alt="" />
          </div>

          <div className={styles.content}>
            <a href="/">Home</a>
            <a href="#">About Us</a>
            <a href="/events">Events</a>
            <a href="/upcomingEvents">Upcoming</a>
            <a href="#">Resources</a>
          </div>
          <a href="/signup" className={styles.joinus}>
            Join Us
          </a>
          <div className={styles.search_space}>
            <AiOutlineSearch size="25" color="black" />
            <input
              type="search"
              placeholder="Search...."
              className={styles.search}
            />
          </div>
          <button className={`${styles.hamburger}`} onClick={menu}>
            <div className={styles.bar}></div>
          </button>
        </div>
      </nav>
      <nav className={styles.mobile_view} ref={mobile_view}>
      <a href="/">Home</a>
            <a href="#">About Us</a>
            <a href="/events">Events</a>
            <a href="/upcomingEvents">Upcoming</a>
            <a href="#">Resources</a>
        <a href="/signup" className={styles.joinus_a}>
          Join Us
        </a>
        <div className={styles.search_space_a}>
        <AiOutlineSearch size="25" color="black" />
          <input
            type="search"
            placeholder="Search...."
            className={styles.search}
          />
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
