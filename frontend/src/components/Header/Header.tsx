import HeaderProps from "../../types/header";
import '../../assets/styles/header.modulemin.css';

export default function Header({ handleAddress, inputRef, error }: HeaderProps) {
    return (
        <header className="b-header">
            <h1 className="b-header__title">IP Address Tracker</h1>
            <form className="b-header__form" action="" onSubmit={handleAddress}>
                <input
                    ref={inputRef}
                    className="b-header__input"
                    type="text"
                    placeholder="Search for any IP address or domain"
                    aria-label="IP Address"
                />
            <button className="b-header__button" type="submit">
            <i className="b-header__button__icon" aria-label="Search IP Address"></i>
            </button>
            </form>
            {error && <p className="b-header__error">{error}</p>}
        </header>
    );
}
