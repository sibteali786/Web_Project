const Community = () => {
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "#e5e5e5",
        borderRadius: "10px",
        marginRight: "15px",
      }}
    >
      <h1 className="display-3 text-center">
        Join our Community of Mentors and Other Students to collaborate and
        innovate!
      </h1>
      <div className="text mb-5 text-center">
        Additional copy/components go here!
      </div>
      <div
        className="text-center"
        style={{ marginTop: "-20px", paddingBottom: "20px" }}
      >
        <button
          className="btn btn-lg btn-outline-light "
          style={{ marginRight: "15px" }}
        >
          Skip for Now
        </button>
        <button className="btn btn-lg btn-outline-light">
          Join Facebook group
        </button>
      </div>
    </div>
  );
};

export default Community;
