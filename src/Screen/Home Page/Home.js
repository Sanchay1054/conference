import react, {useState} from 'react';
import styles from '../../Styles/Home.module.css';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbar_logo}>KONGU CONFERENCE</div>
                <div>
                    <button className={styles.navbar_toggle} onClick={toggleMenu}>
                    ☰
                    </button>
                    <ul className={isOpen ? styles.navbar_menu_open : styles.navbar_menu} >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            Hello World!
        </div>
    )
}

export default Home;