import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Use() {
  return (
    <Container fluid>
      <Row className="my-5 justify-content-evenly">
        <Col md={5}>
          <div className="wrap ">
            <h1 className="heading">Free Youtube Video Downloader</h1>
            <p className="pp">
              unlimited Youtube video downloader. You can easily download
              thousands of Youtube videos in high quality formats like 360p,
              720p (HD), 1080p (Full HD). We provide the fastest and most
              convenient way to download Youtube videos you will ever know. You
              can save videos and songs to your computer or mobile phone for
              offline viewing.
            </p>
          </div>
        </Col>
        <Col md={5}>
          <div className="wrap ">
            <h1 className="heading"> YO Downloader is <br/>100% Safe and Clean</h1>
            <p className="pp">
              With the rising awareness of device security, people attach great
              importance to personal data. The service is totally clean with no
              virus under intense supervision based on security database.
              video without viruses.
              safe to download any video without viruses. Enjoy our secure & free service.
              <br/>
              enjoy the service
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Use;
