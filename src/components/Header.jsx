import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>contact App</h1>
        <a href="https://github.com/MAGNET-CODE">MAGNET-CODE</a>
    </div>
  )
}

export default Header