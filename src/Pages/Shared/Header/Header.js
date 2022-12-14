import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }


    return (
        <section>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="info" variant="danger">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                                
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-2 mt-2'>{user?.displayName}</span> 
                                        <Button className='me-2' variant="dark" onClick={handleLogOut}>Log out</Button>
                                    </> 
                                        :
                                    <>
                                        <Link to='/login' className='me-2 text-dark'>Login</Link>
                                        <Link to='/register' className='text-dark'>Register</Link>
                                    </>    
                            }
                                
                        </>
                        <Link to='/profile'>
                                
                            {
                                user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>          
                                :      
                                <HiUserCircle></HiUserCircle>
                        }  
                       
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>   
                    </div>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default Header;