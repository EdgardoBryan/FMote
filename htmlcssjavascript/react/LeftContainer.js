const LeftContainer = (props) => {
    const changeState = (e) => {
      props.setStage(props.stage + 1);
    };
  
    return (
      <div className="left-container">
        <div className="inner-left-container">
          <h2> Apply to work with our agency</h2>
          <input type="email" placeholder="Whats Your email?"></input>
          <button class="next-button" onClick={changeState}>
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default LeftContainer;
  