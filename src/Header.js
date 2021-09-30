import { Navbar, Nav, Container } from 'react-bootstrap';
import user from './images/user.png';

import { Link } from 'react-router-dom';
function Header() {
    return (
        
        
        
        <div className="bxtr"  >
            
            <Navbar bg="red" variant="red">
            
            
                <Container>
                   
                    <Nav className="me-auto navigation_bar" >
                        <Link to="/Home" >Home</Link>
                        <Link to="/Benifits" >Benifits</Link>
                        <Link to="/AboutUs" >About Us</Link>
                        <Link to="/Terms" >Terms and Conditions</Link>
                        <Link to="/Contact" >ContactUs</Link>
                        <Link to="/Privacy" >Privacy Policy</Link>
                        <Link to="/feed" >Feedback</Link>

                        <button className="btsearch">Search</button>
                        

                    </Nav>
                    <Link to="#" className="f90-logout-button" id="bar"><img src={user} width="60px" height="60px" margin-top="5px" border-radius="5px" /></Link>
                   
                </Container>

            </Navbar>

        </div>
    )

}

export default Header