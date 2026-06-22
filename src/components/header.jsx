const Header = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">Pokemon Battle App</h1>
            <nav className="app-nav" aria-label="Main navigation">
                <ul className="app-nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;