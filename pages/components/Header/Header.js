//Root imports
import { useState } from "react";
import Image from "next/image";
//Custom imports
import styles from "./Header.module.css";

function Header({
    isOpen,
    isFeaturesOpen,
    isCompaniesOpen,
    setOpen,
    setFeaturesOpen,
    setCompaniesOpen,
    disableMenus,
}) {
    return (
        <header
            className={styles.header}
            onClick={(event) =>
                event.target.nodeName !== "LI" ? disableMenus() : ""
            }
        >
            <Image
                src="logo.svg"
                alt="Logo de grupo"
                width={80}
                height={25}
            ></Image>
            <Image
                className={styles.header__menu}
                src="icon-menu.svg"
                alt="Hamburger icon"
                width={32}
                height={16}
                onClick={() => setOpen(!isOpen)}
            ></Image>
            <div
                className={`${styles.xs_sidenavbar} ${
                    isOpen ? styles.active : ""
                }`}
            >
                <Image
                    className={styles.icon_close_menu}
                    src="/icon-close-menu.svg"
                    alt=""
                    width={25}
                    height={25}
                    onClick={() => setOpen(!isOpen)}
                ></Image>
                <nav className={styles.header__navbar}>
                    <ul className={styles.header__main__navbar}>
                        <li
                            id="features_row"
                            className={`${styles.dropdown} ${
                                isFeaturesOpen ? styles.inverted : ""
                            }`}
                            onClick={(event) => {
                                if (event.target.id === "features_row") {
                                    setFeaturesOpen(!isFeaturesOpen);
                                    setCompaniesOpen(false);
                                }
                            }}
                        >
                            Features
                            <ul
                                className={
                                    isFeaturesOpen
                                        ? styles.submenu_open
                                        : styles.submenu
                                }
                            >
                                <a href="#todo">
                                    <li id="todo">
                                        <Image
                                            src="/icon-todo.svg"
                                            alt=""
                                            width={18}
                                            height={20}
                                        ></Image>
                                        Todo List
                                    </li>
                                </a>
                                <a href="#calendar">
                                    <li>
                                        <Image
                                            src="/icon-calendar.svg"
                                            alt=""
                                            width={18}
                                            height={20}
                                        ></Image>
                                        Calendar
                                    </li>
                                </a>
                                <a href="#reminders">
                                    <li>
                                        <Image
                                            src="/icon-reminders.svg"
                                            alt=""
                                            width={18}
                                            height={20}
                                        ></Image>
                                        Reminders
                                    </li>
                                </a>
                                <a href="#planning">
                                    <li>
                                        <Image
                                            src="/icon-planning.svg"
                                            alt=""
                                            width={18}
                                            height={20}
                                        ></Image>
                                        Planning
                                    </li>
                                </a>
                            </ul>
                        </li>
                        <li
                            id="company_row"
                            className={`${styles.dropdown} ${
                                isCompaniesOpen ? styles.inverted : ""
                            }`}
                            onClick={(event) => {
                                if (event.target.id === "company_row") {
                                    setCompaniesOpen(!isCompaniesOpen);
                                    // setFeaturesOpen(false);
                                }
                            }}
                        >
                            Company
                            <ul
                                className={`${
                                    isCompaniesOpen
                                        ? styles.submenu_open
                                        : styles.submenu
                                } ${styles.company_modal}`}
                            >
                                <a href="#history">
                                    <li>History</li>
                                </a>
                                <a href="#team">
                                    <li>Our Team</li>
                                </a>
                                <a href="#blog">
                                    <li>Blog</li>
                                </a>
                            </ul>
                        </li>
                        <a href="#careers">
                            <li>Careers</li>
                        </a>
                        <a href="#about">
                            <li>About</li>
                        </a>
                    </ul>
                </nav>
                <div className={styles.header__buttons}>
                    <button className="clean_button">Login</button>
                    <button className="semi_clean_button">Register</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
