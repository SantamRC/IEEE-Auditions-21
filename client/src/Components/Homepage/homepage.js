import React,{useRef,useEffect} from 'react'
import './homepage.css'

export default function Homepage() {
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle='white';
        ctx.font='30px Verdana';
        ctx.fillText('IEEE',0,30)
      }

    useEffect(() => {
    
        const canvas = canvasRef.current
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        const context = canvas.getContext('2d')
        
        //Our draw come here
        draw(context)
      }, [draw])

    return (
        <div id="bg">
            <canvas ref={canvasRef}></canvas>
            <h1>Homepage</h1>
        </div>
    )
}




