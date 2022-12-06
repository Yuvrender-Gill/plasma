import Login from '../components/Login';
import NavbarCustom from '../components/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tl_background from '../assets/bg.jpg';
import './Home.css';

function Home() {
  return (
    <Container fluid className="main-area-container gap-3" style={{backgroundImage: `url(${tl_background})`}} >
        
        <Row className="justify-content-md-center">
        <NavbarCustom/>
        </Row>
        
        <Row className="p-4 title-text justify-content-md-center" padding={2}>
            Plasma Labs
        </Row>
        <Row className="p-4 justify-content-md-center" padding={2}>
            <Col xs lg="2">
                <Login/>
            </Col>
        </Row>
        <Row className="p-2 one-liner justify-content-md-center">
            Discover in-person esports watch parties near you
        </Row>
          
        
    </Container>
   
  );
}

export default Home;