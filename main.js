var canvas =new fabric.Canvas("myCanvas")
// Create canvas variable

//Set initial positions for ball and hole images.
ball_x=0
ball_y=0
block_image_width = 5;
block_image_height = 5;
hole_x=890
hole_y=381
function load_img(){
fabric.Image.fromURL("golf-h.png",function (img){
holeobject=img
holeobject.scaleToWidth(50)
holeobject.scaleToHeight(50)
holeobject.set({
top:hole_y,
left:hole_x
});
canvas.add(holeobject);
});
new_image();
}

function new_image()
{
fabric.Image.fromURL("ball.png",function (img){
ballobject=img
ballobject.scaleToWidth(50)
ballobject.scaleToHeight(50)
ballobject.set({
top:ball_y,
left:ball_x
});
canvas.add(ballobject);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ballobject)
	console.log("YOU HAVE HIT THE GOAL!!")
	document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!!"
	document.getElementById("myCanvas").style.borderColor="red"	
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	 function  up (){
         if (ball_y>=5) {
           ball_y=ball_y-block_image_height
           console.log("block_image_height= "+block_image_height)
           console.log("when up arrow key is pressed, x= "+ball_x+" , y= "+ball_y)
           canvas.remove(ballobject)
           new_image()  
         }
     }
     function  down (){
        if (ball_y<=450) {
          ball_y=ball_y+block_image_height
          console.log("block_image_height= "+block_image_height)
          console.log("when down arrow key is pressed, x= "+ball_x+" , y= "+ball_y)
          canvas.remove(ball_bject)
          new_image()  
        }
    }
    function  right (){
        if (ball_x<=1050) {
          ball_x=ball_x+block_image_width
          console.log("block_image_width= "+block_image_width)
          console.log("when right arrow key is pressed, x= "+ball_x+" , y= "+ball_y)
          canvas.remove(ballobject)
          new_image()  
        }
    }
    function  left (){
        if (ball_x>=5) {
          ball_x=ball_x-block_image_width
          console.log("block_image_width= "+block_image_width)
          console.log("when left arrow key is pressed, x= "+ball_x+" , y= "+ball_y)
          canvas.remove(ballobject)
          new_image()  
        }
	}