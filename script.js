const canvasPoints = [];

function drawPoint(event) {
	var cv = document.getElementById("plotCanvas");
	var ctx = cv.getContext("2d");

	let x = event.clientX - cv.getBoundingClientRect().left;
	let y = event.clientY - cv.getBoundingClientRect().top;
	
	ctx.beginPath();
	ctx.arc(x, y, 5, 0, 2*Math.PI);
	ctx.stroke();

	//store point in list for bézier curve
	canvasPoints.push([x,y]);

	// if enough points: draw bézier curve
	l = canvasPoints.length;
	if (l >= 3 && (l -1) % 2 == 0) {
		//moveTo(canvasPoints[0][0], canvasPoints[0][1]);
		//bezierCurveTo() for cubic Bézier curves
		ctx.quadraticCurveTo(canvasPoints[l-2][0], canvasPoints[l-2][1], canvasPoints[l-3][0], canvasPoints[l-3][1]);
		ctx.stroke();
	}
}