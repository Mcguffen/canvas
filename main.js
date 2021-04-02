var x = document.getElementById('x')
var context = x.getContext('2d')

// context.fillStyle = 'red'
// context.fillRect(0, 0, 100, 100)
// context.strokeStyle = 'blue'
// context.strokeRect(0, 0, 100, 100)

// drawCircle(150,150,10)
// 画圆
function drawCircle(x, y, radius){
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()
}

// 划线
function drawLine(x1, y1, x2, y2){
    context.beginPath()
    context.strokeStyle = 'black'
    context.lineWidth = 5
    context.moveTo(x1, y1) // 起点
    context.lineTo(x2,y2) // 终点
    context.stroke() //
    context.closePath() // 结束
}

var painting = false
var lastPoint = {
    x: undefined,
    y: undefined
}
// 按下鼠标
x.onmousedown = function(a){
    painting = true
    var x = a.clientX
    var y = a.clientY
    lastPoint = {
        "x": x,
        "y": y
    }
    drawCircle(x,y,1)
    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
    lastPoint = newPoint
}

// 动鼠标
x.onmousemove = function(a){
    if(painting){
        var x = a.clientX
        var y = a.clientY
        var newPoint = {
            "x": x,
            "y": y
        }
        drawCircle(x,y,1)
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
    }else{

    }
}

// 鼠标松开
x.onmouseup = function(z){
    painting = false
}