import styles from "../../../styles/PreviewContainer.module.css";

export default function PreviewContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
