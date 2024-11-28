import Image from "next/image";
import styles from "./headercard.module.css";

function HeaderCard({ item }) {
  const { type, text, image } = item || {};
  return (
    <div className={`${styles.headerCard}`}>
      {type === "text" ? (
        <p className={styles.headerName}>{text}</p>
      ) : (
        <Image
          alt="apex lawn"
          src={image}
          width={129}
          height={84}
          style={{
            position: "relative",
            top: "-2px",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}

export default HeaderCard;
