import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><span className='yo'> Yo✌️</span><span className='DD'>Downloader</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='insta'>Instagram</Nav.Link>
            <Nav.Link href="#link" className='youtube'>Youtube</Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;