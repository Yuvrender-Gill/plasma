import Login from '../components/Login';
import NavbarCustom from '../components/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tl_background from '../assets/bg.jpg';
import './Home.css'

function Profile() {
  return (
    <Container fluid className="main-area-container" style={{backgroundImage: `url(${tl_background})`}}>
        <NavbarCustom/>
        <Row className="justify-content-md-center">
            <Col xs lg="2">
                Profile
            </Col>
        </Row>
    </Container>
   
  );
}

export default Profile;