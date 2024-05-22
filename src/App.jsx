import VideoClassroom from "./VideoClassroom";

function App() {
  // const [videoCall, setVideoCall] = useState(true);
  // const rtcProps = {
  //   appId: "11abccb1c26c441fa55c3863798c134f",
  //   channel: "main", // your agora channel
  //   token:
  //     "007eJxTYPj0t8DGpazj10FtGw/VLb51FWzseVEzdLMMfhyO//9MgFGBwSTRIM3CxNLCyNQo0cQ00cwiMdk0Oc0oJRGIEk0tk9fkuaU1BDIyyFb1MzBCIYjPwpCbmJnHwAAAA+keQQ==", // use null or skip if using app in testing mode
  // };
  // const callbacks = {
  //   EndCall: () => setVideoCall(false),
  // };
  // return videoCall ? (
  //   <div style={{ display: "flex", width: "50vw", height: "50vh" }}>
  //     <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  //   </div>
  // ) : (
  //   <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  // );
  return (
    <>
      <div>
        <h1>video</h1>
        <VideoClassroom />;
      </div>
    </>
  );
}

export default App;
