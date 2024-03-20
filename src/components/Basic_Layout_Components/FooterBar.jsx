// import "bootstrap-icons/font/bootstrap-icons.css";
import './FooterBar.css'

export function FooterBar() {
  return (
    <>
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2024 υγεία, Inc</span>
        </div>

    <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <button className="btn btn-danger">
          <a href="https://www.youtube.com" className="text-white"><i className="bi bi-youtube h6"
            aria-label="youtube"></i></a></button>&nbsp;
        <button className="btn btn-primary">
          <a href="https://www.twitter.com" className="text-white"><i className="bi bi-twitter h6"
            aria-label="twitter"></i></a></button>&nbsp;
        <button className="btn btn-success">
          <a href="https://www.whatsapp.com/" className="text-white">
            <i className="bi bi-whatsapp h6" aria-label="whatsapp"></i></a></button>&nbsp;
        <button className="btn btn-warning">
          <a href="https://www.instagram.com/" className="text-white"><i className="bi bi-instagram h6"
            aria-label="instagram"></i></a>
        </button>
        </div>
      </footer>
    </div>
    </>
  );
}


// export default FooterBar

// export function NavBar() {
//   return (
//       <>
//           <Navbar bg="dark" data-bs-theme="dark">
//               <Container className='ms-1'>
//                   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                   <Nav className="me-auto">
//                       {/*The links do not go anywhere current */}
//                       <Nav.Link href="#home">Healthy Recipes</Nav.Link>
//                       <Nav.Link href="#features">Exercise Assistance</Nav.Link>
//                   </Nav>
//               </Container>
//               <Container style={{justifyContent: 'end'}}>
//                   {/*The form current does nothing nor does*/}
//                   <Form inline>
//                       <Row>
//                           <Col xs="auto" >
//                               <Form.Control
//                                   type="text"
//                                   placeholder="Search"
//                                   className=" mr-sm-2"
//                               />
//                           </Col>
//                           <Col xs="auto">
//                               <Button type="submit">Submit</Button>
//                           </Col>
//                       </Row>
//                   </Form>
//               </Container>
//           </Navbar>
//       </>
//   );
// }
