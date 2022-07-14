const RightImage = ({stage}) =>{
  const Img_Url = [
    "https://assets.codepen.io/6060109/form-stage-1.png",
    "https://assets.codepen.io/6060109/form-stage-2.png",
     "https://assets.codepen.io/6060109/form-stage-3.png",
     "https://assets.codepen.io/6060109/form-stage-4.png "
        ]
  return (
 
    <div className="right-image-container">
      <img src={Img_Url[stage]} alt="lady"></img>
     </div> 
  
  )
}

export default RightImage