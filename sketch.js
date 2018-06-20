// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	stroke(0, 0, 255);
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke(51);
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke(255, 204, 0);
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(-20, 76, 55, 90);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(0,80);
	textSize(fontSizeA);
	text("M. Corp", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(75);
	textSize(fontSizeNorm);
	text("May Lin", padXmin+bleedPadW, padYmax*0.55);
	fill(0, 0, 255); // note color values - try to improve with cymk-style colors
	text("CEO of alpha", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(160, 103, 140, 151); // note 4th value is alpha (transparency)
	text("P: 0912345678", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(0, 70, 105);
	text("E: maymay1130726@yahoo.com.tw", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(0, 402, 473, 721);
	text("W: may.com", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));
   fill("lightred");
    ellipse(400, 120, 55, 130);
    fill ("lightblue");
    ellipse(500, 120, 55, 130);
    fill("lightred");
    ellipse(400, 240, 55, 70);
    fill ("lightgreen");
    ellipse(500,240, 55, 70);


	
}

function draw() {


}