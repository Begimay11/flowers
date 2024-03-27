const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source
          src="https://cdn.pixabay.com/vimeo/226632884/thunderstorm-10745.mp4?width=640&hash=ae291f3d9b28a143bd74515c0073807ef2c39837"
          type="video/mp4"
        />
      </video>
      <div className="content"></div>
    </div>
  );
};

export default VideoBackground;
