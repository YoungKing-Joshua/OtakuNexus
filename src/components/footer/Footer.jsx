import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src='/logo.png' alt='lama blog' width={50} height={50} />
					<h1 className={styles.logoText}>Otaku Nexus</h1>
				</div>
				<p className={styles.desc}>
					Dive into the heart of anime with the latest reviews, epic battles, and in-depth character
					analyses. Join us at Otaku Nexus, where every fan finds their ultimate anime sanctuary!
				</p>
				<div className={styles.icons}>
					<Image src='/facebook.png' alt='' width={18} height={18} />
					<Image src='/instagram.png' alt='' width={18} height={18} />
					<Image src='/tiktok.png' alt='' width={18} height={18} />
					<Image src='/youtube.png' alt='' width={18} height={18} />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/'>Homepage</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>About</Link>
					<Link href='/'>Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/'>Anime Reviews</Link>
					<Link href='/'>News & Updates</Link>
					<Link href='/'>Anime Culture</Link>
					<Link href='/'>Fan Creations</Link>
					<Link href='/'>Character Analysis</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href='/'>Facebook</Link>
					<Link href='/'>Instagram</Link>
					<Link href='/'>Tiktok</Link>
					<Link href='/'>Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
