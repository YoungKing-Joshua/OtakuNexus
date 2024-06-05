"use client";

import Image from "next/image";
import styles from "./singlePage.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const SinglePage = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch post data");
        const postData = await res.json();
        setData(postData);
        setTitle(postData.title);
        setDesc(postData.desc);
        setCatSlug(postData.catSlug);
        setImg(postData.img);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [slug]);

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/posts/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          catSlug,
        }),
      });
      if (res.status === 200) {
        router.reload();
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      if (res.status === 204) {
        router.push("/"); // Redirect to home or another appropriate page
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

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={!isAuthor}
              className={styles.input}
            />
          </h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
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
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={desc}
            onChange={setDesc}
            readOnly={!isAuthor}
            placeholder="Tell your story..."
          />
          {isAuthor && (
            <>
              <button className={styles.updateButton} onClick={handleUpdate}>
                Update Post
              </button>
              <button className={styles.deleteButton} onClick={handleDelete}>
                Delete Post
              </button>
            </>
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
