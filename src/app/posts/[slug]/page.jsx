"use client";

import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SinglePage = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch post data");
        const postData = await res.json();
        setData(postData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [slug]);

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      if (res.status === 204) {
        router.push("/"); 
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (status === "loading" || !data) {
    return <div>Loading...</div>;
  }

  const isAuthor = session?.user?.email === data.userEmail;
  const createdDate = data?.createdAt.substring(0, 10);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{createdDate}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          {isAuthor && (
            <button className={styles.deleteButton} onClick={handleDelete}>
              Delete Post
            </button>
          )}
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
