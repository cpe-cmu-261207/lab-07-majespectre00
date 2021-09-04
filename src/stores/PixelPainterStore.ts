import {Store} from 'pullstate'

const colorPool =  ["#000000","#804000","#FE0000","FE6A00","#FFD800","#00FF01","#FFFFFF","#01FFFF","#0094FE","#0026FF","#B100FE","#FF006E"]
type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] ,
  selectedColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor: '#000000'
})
export const SelectCliked = (color:string)=>{
  PixelPainterStore.update( s=>{
    s.selectedColor = color;
  })
}
export const cellCliked = (x:number, y:number)=>{
    PixelPainterStore.update( s=> {
      s.canvas[y][x] = s.selectedColor
    })
  }
export const clearbtnCallback = () =>{
  PixelPainterStore.update( s => {
    s.canvas = createEmptyCanvas()
  })
}

const createRandomCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push(colorPool[Math.floor(Math.random()*colorPool.length)])
    }
  }
  return output
}
export const randomCallback = () =>{
  PixelPainterStore.update( s => {
    s.canvas = createRandomCanvas()
  })
}