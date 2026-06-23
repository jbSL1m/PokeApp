// This component renders the bottom bar of the page (the site footer)
const Footer = () => {
    return (
        // <footer> is an HTML landmark element that marks the bottom section of the page
        <footer>
            {/* &copy; is an HTML entity that displays the © copyright symbol.
                This line shows the year, app name, version, and author */}
            <h3>&copy; 2026 Pokemon Battle App Version 1.0 Developed by Johnny Belmonte</h3>
        </footer>
    );
};

// Makes this component available to import in other files
export default Footer;
