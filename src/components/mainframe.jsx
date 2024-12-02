import StringGenerator2 from "./ppart7";

const Iframe = (props) => {
  const url = StringGenerator2()

  return (
    <>
      {props.videoURL ? <iframe
        src={props.videoURL + url}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={styles.video}
      ></iframe> : <p style={styles.errtext}>Error Rendering The Video</p>}

    </>
  )
}

const styles = {
  errtext: {
    color: "red",
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

export default Iframe