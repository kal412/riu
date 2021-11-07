import { useEffect } from "react";
import { useState } from "react";
import "../styles/loadingBar.css";

const LoadingBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="loading-bar">
      <div className="loading-bar-wrapper">
        <div
          className="loading-bar-style"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
