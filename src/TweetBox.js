import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Harsh Chandravanshi",
      username: "haxpl0rer",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/jQ1slisVd9dtXrQqvd1PRk7To5DajkErOJTn14qLndpItZAb6DjGTK4sNbRj-gtZ0BFR0IWPwxW-GaAiqQ2p3AnT3WjxB6VGXcJ5nAhIs19QJollaI0JZELOisb432y7xC6gx2S8iQ=w2400",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/jQ1slisVd9dtXrQqvd1PRk7To5DajkErOJTn14qLndpItZAb6DjGTK4sNbRj-gtZ0BFR0IWPwxW-GaAiqQ2p3AnT3WjxB6VGXcJ5nAhIs19QJollaI0JZELOisb432y7xC6gx2S8iQ=w2400" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;