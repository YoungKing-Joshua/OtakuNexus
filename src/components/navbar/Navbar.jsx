import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Image src='/logo.png' alt='Otaku Nexus' width={50} height={50} className={styles.logoImage} />
			<div className={styles.logo}>Otaku Nexus</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href='/' className={styles.link}>
					Home
				</Link>
				<Link href='/' className={styles.link}>
					Contact
				</Link>
				<Link href='/' className={styles.link}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
