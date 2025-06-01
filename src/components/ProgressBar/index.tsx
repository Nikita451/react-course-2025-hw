import { useEffect, useState } from "react";
import styles from "./progress.style.module.scss";

export function ProgressBar() {
  const [width, changeWidth] = useState<number>(0);

  useEffect(() => {
    function onScroll() {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeightWithScroll = window.innerHeight;
      // число пикселей, которое нужно проскролить до низа
      const pxForScroll = documentHeight - windowHeightWithScroll;
      changeWidth((window.scrollY / pxForScroll) * window.innerWidth);
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.processWrapper}>
      <div className={styles.progress} style={{ width: `${width}px` }} />
    </div>
  );
}
