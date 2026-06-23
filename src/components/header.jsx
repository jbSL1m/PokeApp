// This component renders the top bar of the page (the site header)
const Header = () => {
    return (
        // <header> is an HTML landmark element — it tells browsers and screen readers
        // that this section is the top of the page
        <header className="app-header">

            {/* The main title of the app */}
            <h1 className="app-title">Pokemon Battle App</h1>

            {/* <nav> wraps navigation links. aria-label gives screen readers a name
                for this group of links so they can describe it to the user */}
            <nav className="app-nav" aria-label="Main navigation">

                {/* <ul> is an unordered list. Each <li> is one nav link */}
                <ul className="app-nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Makes this component available to import in other files
export default Header;
