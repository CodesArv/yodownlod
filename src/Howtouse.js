import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "./asset/3d-cute-anime-chibi-style-boy-character-isolated-on-transparent-background-children-day-generative-ai-png.png";

function Howtouse() {
  return (
    <Container>
      <Row>
        <h1 className="hhh text-center my-3 py-5">
          how to use <span className="spd">yo downloader</span>
        </h1>
        <Col md={6} className="text-center">
          <img src={img} className="img-fluid boy" />
        </Col>
        <Col md={6}>
          <div className="wrap1 ">
            <span className="step"> Step 1: </span>
            <span className="use">
              Open the Youtube app on your phone or visit the Youtube.com
              website.
            </span>
            <br />
            <hr />
            <span className="step"> Step 2: </span>
            <span className="use">
              Navigate to the video you want to download and tap the Share
              button and keep tapping the Copy Link option.
            </span>
            <br />
            <hr />
            <span className="step"> Step 3: </span>
            <span className="use">
              Go to the Yo.download website, paste the copied Youtube link in
              the input box and press the Download button
            </span>
            <br />
            <hr />
            <span className="step"> Step 4: </span>
            <span className="use">
              Select the MP3 or MP4 format and press the Download button to
              download the file to your device.
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Howtouse;
