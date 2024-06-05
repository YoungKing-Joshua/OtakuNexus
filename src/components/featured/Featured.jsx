import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{/* <b>Hey, lama dev here!</b> Discover my stories and creative ideas. */}
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src='/nnmi.jpg' alt='' fill className={styles.image} />
					<div className={styles.textOverlay}>
						<h1 className={styles.postTitle}>Top Moments From JJK Season 2</h1>
						<p className={styles.postDesc}>
							Undoubtedly, Jujutsu Kaisen (JJK) has proven to be one of the most highly anticipated
							anime releases of 2023. From intense confrontations to moments of sheer brilliance,
							Season 2 has undeniably lived up to its promises.
						</p>
						<Link href='/posts/top-moments-from-jjk-season-2'>
							<button className={styles.button}>Read More</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
