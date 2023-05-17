import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef, useState } from "react";
import axios from "axios";
import { youtube_parser } from "./Utils";

function Header() {
  const inputUrlref = useRef();
  const [result, setresult] = useState(null);

  const handlesubmit = (e) => {
    // e.preventdefault()
    console.log(inputUrlref.current.value);
    const youtubeId = youtube_parser(inputUrlref.current.value);
    console.log(youtubeId);
  

    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: "youtubeId" },
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };
    axios(Option)
      .then((res) => setresult(res.data))
      .catch((err) => console.log(err));

    inputUrlref.current.value = "";
  };

  return (
    <Container>
      <Row className="text-center">
        <Col md={12}>
          <h1 className="text">
            Download <br />
            Youtube & Instagram videos
          </h1>

          <p className="ptext">
            Convert and download Youtube videos in MP3, MP4, 3GP for free
          </p>
          <form className="style-search " onSubmit={handlesubmit}>
            <input
              ref={inputUrlref}
              type="text"
              placeholder="enter link here"
            />
            <button type="submit">Download</button>
            {/* <div className="start">
              {setresult ? (
                <a href={setresult} target="blank" rel="noreferrer">
                  START DownloadING
                </a>
              ) : (
                ""
              )}
            </div> */}
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
