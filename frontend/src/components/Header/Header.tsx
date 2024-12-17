import HeaderProps from "../../types/header";
import styles from './header.module.scss';

export default function Header({ handleAddress, inputRef, error }: HeaderProps) {
    return (
        <header className={styles['b-header']}>
            <h1 className={styles['b-header__title']}>IP Address Tracker</h1>
            <form className={styles['b-header__form']} action="" onSubmit={handleAddress}>
                <input
                    ref={inputRef}
                    className={styles['b-header__input']}
                    type="text"
                    placeholder="Search for any IP address or domain"
                    aria-label="IP Address"
                />
                <button className={styles['b-header__button']} type="submit">
                    <span
                        className={styles['b-header__button__icon']}
                        role="button"
                        aria-label="Search IP Address"
                    ></span>
                </button>
            </form>
            {error && <p className={styles['b-header__error']}>{error}</p>}
        </header>
    );
}
