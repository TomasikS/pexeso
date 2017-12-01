// JavaScript Document
    var player=1;
    var field=[   [1,1,2,2], [3,3,4,4], [5,5,6,6], [7,7,8,8]];
    
       shuffle();
      
        
    
    function shuffle()
    {
    var i,temp;
for(i=0;i<20;i++)   {
    var r1= Math.floor(Math.random()*4)  ;
    var r2= Math.floor(Math.random()*4)  ;
        var s1= Math.floor(Math.random()*4)  ;
    var s2=Math.floor(Math.random()*4)  ;
    
    temp=field[r1][r2];
    
     field[r1][r2]=   field[s1][s2] ;
       
    field[s1][s2] =temp;
   
             }
                 console.log(field );  
       }
  
    
    
       function clickimg(val)
       
       {
           var row=Math.floor(val/10);
           var col=val %10;
           
             console.log(row); 
            console.log(col); 
        if( field[row][col] >0) 
             var source="img/img"+field[row] [col]+ ".png";
var imageID= "img"+ row+col  ;

console.log(imageID); 
document.getElementById(imageID).src=source;           
       }
  