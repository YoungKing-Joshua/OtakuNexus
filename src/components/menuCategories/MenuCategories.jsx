import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
	return (
		<div className={styles.categoryList}>
			<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>
				Anime Reviews
			</Link>
			<Link href='/blog' className={`${styles.categoryItem} ${styles.fashion}`}>
				News & Updates
			</Link>
			<Link href='/blog' className={`${styles.categoryItem} ${styles.food}`}>
				Anime Culture
			</Link>
			<Link href='/blog' className={`${styles.categoryItem} ${styles.travel}`}>
				Lists & Rankings
			</Link>
			<Link href='/blog' className={`${styles.categoryItem} ${styles.culture}`}>
				Fan Creations
			</Link>
			<Link href='/blog' className={`${styles.categoryItem} ${styles.coding}`}>
				Character Analysis
			</Link>
		</div>
	);
};

export default MenuCategories;
