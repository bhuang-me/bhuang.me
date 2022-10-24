import React, { useRef, useEffect } from 'react'

const TimelineEdge = () => {
  const canvasRef = useRef(null)
  const parentRef = useRef(null)

  var hover = false,
    id
  var _i, _b

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 1000
    const context = canvas.getContext('2d')

    const rects = Array.from({ length: 100 }).map((_, index) => {
      return {
        x: index * 10,
        y: context.canvas.height / 2,
        width: 3,
        height: 15,
      }
    })

    for (let i = 0; i < 100; i++) {
      context.rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height)
      context.fillStyle = 'blue'
      context.fill()
    }

    canvas.addEventListener('mousemove', e => {
      var r = canvas.getBoundingClientRect(),
        x = e.clientX - r.left,
        y = e.clientY - r.top,
        i = 0,
        r

      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 100; i++) {
        // if (
        //   x >= rects[i].x &&
        //   x <= rects[i].x + rects[i].width &&
        //   y >= rects[i].y &&
        //   y <= rects[i].y + rects[i].height
        // ) {
        //   console.log('AHHH')
        //   // The mouse honestly hits the rect
        //   hover = true
        //   id = i
        //   break
        // }

        context.beginPath()
        context.rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height)
        context.fillStyle = context.isPointInPath(x, y) ? 'yellow' : 'blue'
        context.fill()
      }
    })
  }, [])

  return (
    <div style={{ width: '100%' }} ref={parentRef}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default TimelineEdge
