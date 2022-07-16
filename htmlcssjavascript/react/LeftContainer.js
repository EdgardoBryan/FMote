const LeftContainer = (props) => {
  const changeState = (e) => {
    props.setStage(props.stage + 1);
  };

  if (props.stage === 1) {
    return (
      <div className="left-container">
        <div className="stage-2-inner">
          <h2> Whats Your Budget?</h2>
          <button className="next-button button">2k</button>
          <button className="next-button button">5k</button>
          <button className="next-button button">No Limit</button>
          <button
            className="next-button stage-two-next-button"
            onClick={changeState}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  if (props.stage === 2) {
    return (
      <div className="left-container">
        <div className="inner-left-container">
          <h2> Anything else we should know?</h2>
          <input type="email"></input>
          <button className="next-button" onClick={changeState}>
            Next
          </button>
        </div>
      </div>
    );
  }

  if (props.stage === 3) {
    return (
      <div className="left-container">
        <h2 className="thank-you"> Thank You!</h2>
      </div>
    );
  }

  return (
    <div className="left-container">
      <div className="inner-left-container">
        <h2> Apply to work with our agency</h2>
        <input type="email" placeholder="Whats Your email?"></input>
        <button className="next-button" onClick={changeState}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LeftContainer;
