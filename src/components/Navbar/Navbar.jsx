import './Navbar.css'


const Navbar = ()=>{
    return(
        <nav className="navbar">
            <h3 className="brand">KYIRA XI</h3>
            <div className="menu">
                <a href="#" className="menu_items">Home</a>
                <a href="#" className="menu_items">About</a>
                <a href="#" className="menu_items">Contact</a>
                <a href="#" className="menu_items">Gallery</a>
            </div>
        </nav>
    )

}

export default Navbar
