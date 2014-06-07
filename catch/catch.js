$(document).ready(function(){
	var start	=$(".lop");
	var ball	=$(".ball");
	var timer	=$("#time");
	var test	=$(".bilgi");
	var yes		=$(".yes");
	var nope	=$(".nope");
	var sor	 	=$("h2");
	var score	=$("p");
	
	 
	
	start.click(function(){
	
		function bak(){		 
			if(saniye<59) saniye=saniye+1;
			else{
				saniye=0;
				 if(dakika < 59) dakika = dakika + 1;
			}
			
			timer.html(dakika+" : "+saniye);
			
			if(dakika==1){
					alert("Finish!"+puan+" Nice :)");
					//sayfa yenile
					window.location.reload();
				}
		}			
	 
	timer.html("0 : 0");
	setInterval(bak,1000);
	
	 
		start.hide();
		 
		ball.show();
		
		timer.show();
		
		change();
		
	});
	
	ball.click(function(){
		 ball.hide();
		 test.show();
		 yes.show();
		 nope.show();
		 deg();
		  
		 sor.text(soru[d]);
		 	
			yes.click(function(){
				if(cevap[d]==1){
					puan+=10;
					score.text(puan);
					 change()
				}else{
					 puan-=5;
					 score.text(puan);
					 change()
				}
				
			
			});
			
			nope.click(function(){
				if(cevap[d]==0){
					puan+=10;
					score.text(puan);
					change();
				}else{
					puan-=5;
					score.text(puan);
					change()
				}
				
			
			});
		 
	});
	
	function change(){
		test.hide();
		yes.hide();
		nope.hide();
		 
		deg();
		
		  
		 sor.text(soru[d]);
		ball.css({"background-color":renk[re]});	
		ball.css({"top":konumX[ko]});
		ball.css({"left":konumY[ok]});	
		ball.show();
	}
	
	
 

});


var puan=0;

 
//konum dizisi yapalım
//Hmm for döngüsü güzel olur:D x ve y :D
//75er 75 artsın
var konumX=["100px","150px","200px","250px","300px","400px","410px","350px","222px","345px","178px","235px"];
var konumY=["100px","150px","200px","250px","300px","350px","400px","420px","346px","234px","244px","198px"];
var ko,ok,re,d;
function deg(){
  ko = Math.floor((Math.random()*11)+0);
  ok = Math.floor((Math.random()*11)+0);
  re = Math.floor((Math.random()*35)+0);
  d = Math.floor((Math.random()*14)+0);
  
  
  
}

//renk
var renk=["#CCFFFF","#00FF40","#FFFF00","#FF8000","#F5DA81","#04B45F","#FE2E2E","#BE81F7","#00FF00","#58FAD0","#9FF781","#FE2E9A","#F7819F","#FF0080","#A9D0F5","#9A2EFE","#08298A","#8A0886","#4B088A","#B40431","#2E9AFE","#00FF80","#0080FF","#FA5858","#81F79F","#58FA58","#5858FA","#BF00FF","#DF0174","#0B2161","#0B610B","#A9A9F5","#FFBF00","#FF0000","#F78181","#FF00FF","#FA58AC","#FE2E64","#DA81F5"];


//zaman

	var saniye=0,dakika=0;
		
//soruları php ile alabiliriz ama ben kolay yöntem seçicem.

var soru	=["3 X 4 =12","4 + 0 =5","4 + 5 =9","5 + 6 =11","3 X 5 = 15","5 X 4 =20","7 / 14 =2","8 X 9 =81","9 X 10=09","11 X 4 =44","44 / 11 =11","186 X 2 =362","456 / 24 =19"];
var cevap	=[1,0,1,1,1,1,0,0,0,1,0,0,0];


 
