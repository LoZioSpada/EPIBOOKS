import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import ThemeContext from '../contexts/theme';
import { useContext } from 'react';
import { Link } from 'react-router-dom'


export default function NavBar({ searchQuery, setSearchQuery }) {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className='px-5'>
            <Navbar
                className={theme === "light" ? "bg-light" : "bg-dark"}
                variant={theme}>
                <Navbar.Collapse>
                    <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/'>
                            <div className='nav-link'>Home</div>
                        </Link>
                        <Link to='/about'>
                            <div className='nav-link'>About</div>
                        </Link>
                        <Link to='/browe'>
                            <div className='nav-link'>Browse</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <Form.Group className='pe-5'>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </Form.Group>
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme}
                </button>
            </Navbar>
        </div>
    );
}