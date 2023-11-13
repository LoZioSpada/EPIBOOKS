import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap';
import ThemeContext from '../../contexts/theme';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import styles from "./style.module.scss"
import cn from 'classnames'
import { MoonFill, SunFill } from 'react-bootstrap-icons';



export default function NavBar({ searchQuery, setSearchQuery }) {
    const { dark, setDark } = useContext(ThemeContext)

    return (
        <>
            <Navbar
                className='px-5'
                bg={dark ? 'dark' : 'light'}
                data-bs-theme={dark ? "dark" : "light"}
            >
                <Link to='/' className={cn(styles.navLink)}>
                    <Navbar.Brand>EPIBOOKS</Navbar.Brand>
                </Link>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link to='/' className={cn(styles.navLink)}>
                            <div className={cn('nav-link')}>Home</div>
                        </Link>
                        <Link to='/404' className={cn(styles.navLink)}>
                            <div className={cn('nav-link')}>About</div>
                        </Link>
                        <Link to='/404' className={cn(styles.navLink)}>
                            <div className={cn('nav-link')}>Browse</div>
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
                <Button
                    variant={dark ? "light" : "dark"}
                    onClick={() => setDark(!dark)}
                >
                    {dark ? <SunFill size={22} color='yellow' /> : <MoonFill size={22} color='yellow' />}
                </Button>
            </Navbar>
        </>
    );
}