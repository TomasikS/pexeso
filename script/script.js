var player=1;
var field=[[1,1,2,2],[3,3,4,4],[5,5,6,6],[7,7,8,8]];
var turn1=-1;
var turn2=-1;
var score1=0;
var score2=0;
var turnGuessed;

function shuffle ()
{
	var i, temp;
	for (i=0; i<20; i++)
	{
		var r1=Math.floor(Math.random()*4);
		var c1=Math.floor(Math.random()*4);
		var r2=Math.floor(Math.random()*4);
		var c2=Math.floor(Math.random()*4);
		temp=field[r1][c1];
		field[r1][c1]=field[r2][c2];
		field[r2][c2]=temp;
	}
}

function clickImg (value)
{
	if (turn2!=-1)
		return;

	var row=Math.floor(value/10);
	var col=value%10;
	console.log("row: "+row+", col: "+col);

	if (turn1==row*10+col)
		return;

	if (field[row] [col]==0)
		return;

	if (field[row] [col]>0)
	{
		var source="img/img"+field[row] [col]+".png";
		var imageID="img"+row+col;
		console.log(imageID);
		document.getElementById(imageID).src=source;
	}

	if (turn1==-1)
		turn1=row*10+col;
	else
	{
		turn2=row*10+col;
		checkSelectedCards();
	}
}

function checkSelectedCards ()
{
	var row1=Math.floor(turn1/10);
	var col1=turn1%10;
	var row2=Math.floor(turn2/10);
	var col2=turn2%10;

	if (field[row1] [col1]==field[row2] [col2])
	{
		if (player==1)
			score1++;

		else 
			score2++;

		turnGuessed=turn1;
		setTimeout(moveCard, 1500);
		updateScore();
	}

	else
	{
		setTimeout(turnBack, 2000);
		player=player==1?2:1;
	}
}

function turnBack ()
{
	console.log("test");
	var row1=Math.floor(turn1/10);
	var col1=turn1%10;
	var row2=Math.floor(turn2/10);
	var col2=turn2%10;
	var imageID="img"+row1+col1;
	document.getElementById(imageID).src="img/logo.jpg";
	var imageID="img"+row2+col2;
	document.getElementById(imageID).src="img/logo.jpg";
	turn1=-1;
	turn2=-1;
}

function moveCard ()
{
	if (player==1)
		var table=document.getElementById("tableP1");

	else
		table=document.getElementById("tableP2");

	var row1=Math.floor(turn1/10);
	var col1=turn1%10;
	var row2=Math.floor(turn2/10);
	var col2=turn2%10;

	var imageSource="img/img"+field[row1] [col1]+".png";

	var imageID="img"+row1+col1;
	document.getElementById(imageID).src="img/blank.png";

	imageID="img"+row2+col2;
	document.getElementById(imageID).src="img/blank.png";

	var row=table.insertRow(0);
	var cell=row.insertCell(0);

	cell.innerHTML="<IMG SRC=\""+imageSource+"\"WIDTH=\"75\">";

	field[row1] [col1]=0;
	field[row2] [col2]=0;

	turn1=-1;
	turn2=-1;
}

function updateScore ()
{
	if (player==1)
		document.getElementById("score1").innerHTML="Score: "+score1;

	else 
		document.getElementById("score2").innerHTML="Score: "+score2;
}

function changeName (value)
{
	if (value==1)
	{
		var originName=$("#Player1").text();
		$("#Player1").html("<INPUT TYPE=\"TEXT\" onFocusout=\"confirmName(1)\" ID=\"inputP1\" placeholder=\"Enter name\">");
		$("#inputP1").focus();
	}

	else
	{
		var originName=$("#Player2").text();
		$("#Player2").html("<INPUT TYPE=\"TEXT\" onFocusout=\"confirmName(2)\" ID=\"inputP2\" placeholder=\"Enter name\">");
		$("#inputP2").focus();
	}

}

function confirmName (value)
{
	if (value==1)
	{
		var name=$("#inputP1").val();
		if (name.trim().length==0)
			$("#Player1").text("Player 1");
		else 
			$("#Player1").text(name);
	}

	else
	{
		var name=$("#inputP2").val();
		if (name.trim().length==0)
			$("#Player2").text("Player 2");
		else 
			$("#Player2").text(name);
	}
}