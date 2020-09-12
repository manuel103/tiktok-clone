import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
        url="https://v77.tiktokcdn.com/58660ee22ecde5efa436dbb58fae9018/5f5d20b5/video/tos/useast2a/tos-useast2a-ve-0068c002/d77b5e5d8d704e62a02e8b405ee6fb68/?a=1233&br=3848&bt=1924&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009121325300101890722185911DAFE&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M21peHdmcXN5dzMzNDczM0ApZ2hkaDdpOTtlNzg2OWg8M2dkY3FjMHJiZF9fLS1fMTZzc2MxYjFhNC9hLi0tLjYzNTY6Yw%3D%3D&vl=&vr=" 
        channel="emmanuel"
        description="This is a description"
        song="Folklore by Taytay"
        likes={589}
        messages={467}
        shares={789}
        />
        <Video 
        url="https://v77.tiktokcdn.com/f76191e619b721f867fa4b5c1f26624a/5f5d5a65/video/tos/useast2a/tos-useast2a-pve-0068/7d4b06154e874b43aac5f4cf662ec6dd/?a=1233&br=3854&bt=1927&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009121731340101880321680217158E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amR4dDpqc253djMzZjczM0ApNGdmZjs3OWQ2NzdoZjw1Z2dqY3MzYTRsbF9fLS00MTZzc2BgYTFfXjQ2Xl4uY2FjLi06Yw%3D%3D&vl=&vr=" 
        channel="derullo"
        description="This is a description"
        song="Savage love by JD"
        likes={769}
        messages={139}
        shares={280}
        />
        
      </div>
    </div>
  );
}

export default App;
