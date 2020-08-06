// import Avatar from "../components/avatar";
import DateFormater from "@components/post/date-formater";
// import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "@styles/PostPreview.module.css";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  index,
}) {
  return (
    <div className={styles.container}>
      <div>
        <h4>{`0${index + 1}`}</h4>
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p>{author.name}</p> <DateFormater dateString={date} />
      </div>
      <p>{excerpt}</p>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <button className={styles.button}>Read More</button>
      </Link>
    </div>
  );
}
