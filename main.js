canvas=document.getElementById("myCanvas");
ctx=canvas.getContent("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackgroud;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadBackgroud()
{
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.heigth);
}

function uploadrover(
{
    ctx.drawImage(rover_imgtag,0,0,canvas.width,canvas.heigth);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.ecode;
    if(keyPressed=='38')
    {
        up();
    }
    if(keyPressed=='40')
    {
        down();
    }
    if(keyPressed=='37')
    {
        left();
    }
    if(keyPressed=='39')
    {
        right();
    }
}
