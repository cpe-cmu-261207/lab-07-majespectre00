import { clearbtnCallback, randomCallback } from "../stores/PixelPainterStore"

const Utility = () => {
  const handleClick = () => {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=DeeckPeeck");
  };
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick ={()=>clearbtnCallback()}>Clear</button>
      <button className="w-36" onClick ={()=>randomCallback()}>Random color</button>
      <button className="w-36" onClick ={()=>handleClick()}>Play Tetris</button>
    </div>
  )
}

export default Utility