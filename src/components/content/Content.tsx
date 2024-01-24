import styles from "./Content.module.css";

function Content() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Learn to code by <br /> watching others
        </h1>

        <p>
          See how experienced developers solve problems in real-time. <br />
          Watching scripted tutorials is great, but understanding how <br />
          developers think is invaluable.
        </p>
      </div>
    </>
  );
}

export default Content;
