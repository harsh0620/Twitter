import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
    <div className="widgets__input">
      <SearchIcon className="widgets__searchIcon" />
      <input placeholder="Search Twitter" type="text" />
    </div>

    <div className="widgets__widgetContainer">
      <h2>What's happening</h2>

      <TwitterTweetEmbed tweetId={"1316240378085793792"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="haxpl0rer"
        options={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/harshchandravanshi"}
        options={{ text: "#reactjs is awesome", via: "harshchandravanshi" }}
      />
    </div>
  </div>
  );
}

export default Widgets;
