import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import emptyHeartImg from "./assets/emptyHeart.png";
import heartImg from "./assets/heart.png";
import linkImg from "./assets/link.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function App() {
  const [images, setImages] = useState(
    () => JSON.parse(localStorage.getItem("images")) || []
  );
  const [like, setLike] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDateStr, setStartDateStr] = useState("");
  const [endDateStr, setEndDateStr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  const fetchImagesDefault = async () => {
    const { data: imgs } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=bbkSglcrskxOTKlFsmm1354NxeHRetmw6Ec2GbCw&count=5`
    );
    console.log("fetchImagesDefault");
    console.log(imgs);
    setImages(imgs);
    setIsLoading(false);
  };

  const API = `https://api.nasa.gov/planetary/apod?api_key=bbkSglcrskxOTKlFsmm1354NxeHRetmw6Ec2GbCw&start_date=${startDateStr}&end_date=${endDateStr}`;
  const fetchImagesWithDate = async () => {
    // setIsLoading(true);
    const { data: imgs } = await axios.get(API);
    console.log("fetchImagesWithDate");
    console.log(imgs);
    setImages(imgs);

    setStartDate(null);
    setEndDate(null);
    setIsLoading(false);
  };

  const onSubmit = (e) => {
    if (startDateStr !== "" && endDateStr !== "") {
      // null이랑 "" 은 같지 않다.
      setIsLoading(true);
      localStorage.clear();
      e.preventDefault();

      console.log("onSubmit");

      console.log(startDateStr);
      console.log(endDateStr);
      fetchImagesWithDate();
    }
    // } else {
    //   console.log(startDateStr);
    //   console.log(endDateStr);
    //   console.log("else else");

    //   setText("pls enter the dates");
    // }
  };

  localStorage.setItem("images", JSON.stringify(images));

  const toggleLike = (e) => {
    const title = e.target.dataset.value;
    images.map((image) =>
      title === image.title ? (image.like = !image.like) : ""
    );

    setLike(!like);
  };

  const copyUrl = () => {
    toast.success("Copied!");
  };

  const handleStartDate = (date) => {
    console.log("##### START: " + date);
    setStartDate(date);
    console.log(startDate);
    console.log("type of startDate" + typeof startDate);
    const dateStr = moment(date).format().substring(0, 10);
    console.log(typeof dateStr);
    setStartDateStr(dateStr);
    console.log("startDateStr : " + startDateStr);
    console.log("type of startDateStr" + typeof startDateStr);
  };

  const handleEndDate = (date) => {
    console.log("###### END: " + date);
    setEndDate(date);
    console.log("endDate : " + endDate);
    console.log("type of endDate : " + typeof endDate);
    const dateStr = moment(date).format().substring(0, 10);
    console.log(typeof dateStr);
    setEndDateStr(dateStr);
    console.log("endDateStr : " + endDateStr);
  };

  useEffect(() => {
    console.log("USE EFFECT!!!!!!!!");
    console.log("startDateStr : " + startDateStr);
    console.log("endDateStr :  " + endDateStr);
    console.log("API : " + API);
    if (images.length === 0) {
      fetchImagesDefault(); // 초기에는 보여줄 image 가 없으니까 그냥 5장 가져와서 보여줌.
    } else {
      setIsLoading(false);
    }
    setStartDateStr(startDateStr);
    setEndDateStr(endDateStr);
  }, []);

  return (
    <div className="container">
      <div className="title-form-wrapper">
        <div className="title-wrapper">
          <h2>spaceStagram</h2>
          <h4>Brought to you by NASA's Astronomy Photo of the Day</h4>
        </div>
        <div className="form-wrapper">
          <form onSubmit={onSubmit}>
            <div className="calendar-container">
              <div className="calendar-box">
                <div>
                  <div className="start-date">start date</div>
                  <div>
                    <DatePicker
                      placeholder="yyyy-MM-dd"
                      selected={startDate}
                      dateFormat="yyyy-MM-dd" // 날짜 형식
                      onChange={handleStartDate}
                      maxDate={new Date()}
                    />
                  </div>
                </div>
              </div>
              <div className="calendar-box">
                <div className="end-date">end date</div>
                <div>
                  <DatePicker
                    selected={endDate}
                    dateFormat="yyyy-MM-dd" // 날짜 형식
                    onChange={handleEndDate}
                    maxDate={new Date()}
                  />
                </div>
              </div>
            </div>
            <button>submit</button>
            <span id="error">{text}</span>
          </form>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div className="loading-wrapper">
            <div className="loading">
              <span>loading...</span>
            </div>
          </div>
        ) : (
          <div className="image-content-wrapper">
            {images.map((image) => (
              <div>
                <div className="image-wrapper">
                  <img
                    className="image"
                    key={image.url}
                    src={image.url}
                    alt={image.title}
                  />
                </div>
                <div className="content-wrapper">
                  <div className="heart-link">
                    <div className="heart">
                      <img
                        data-value={image.title}
                        src={image.like ? heartImg : emptyHeartImg}
                        className={image.like ? "heart" : "emptyHeart"}
                        onClick={toggleLike}
                        alt="heart"
                      />
                    </div>
                    <CopyToClipboard text={image.url}>
                      <div className="copy-url-wrapper" onClick={copyUrl}>
                        <img
                          src={linkImg}
                          className="copy-url-link"
                          alt="link"
                        />
                        <p>link</p>
                      </div>
                    </CopyToClipboard>
                  </div>
                  <div className="title-date">
                    {image.title} - {image.date}
                  </div>
                  <div className="explanation">
                    <p>{image.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
