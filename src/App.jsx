import Sillycomponent from "./components/part5.jsx";
import Iframe from "./components/mainframe";
const App = () => {
  const videoURL = "https://www.youtube.com/embed/"; // Replace with your YouTube video link

  return (
    <div style={styles.container}>
      <Sillycomponent />
      <h1 style={styles.text}>
        {`Music makes coding feel seamless. It's the rhythm in the background, a
        groove while I build. But sometimes… maybe, just maybe, I get carried
        away. That's why I end up committing things I shouldn't. 
        Anyway, you should find footage of my room here.`}.
      </h1>
      <div style={styles.videoContainer}>
     <Iframe videoUrl={videoURL}></Iframe> 
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    color: "#00FF00", // Green color for the text
    fontFamily: "'Roboto Mono', monospace", // Google Font for minimalist look
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: "0",
    padding: "20px",
  },
  text: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    maxWidth: "80%",
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  video: {
    width: "80%",
    height: "45vh",
  },
};

export default App;
