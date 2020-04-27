function check(){

	var question1 = document.quiz.question1.value;
	 var question2= document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
	 var question5 = document.quiz.question5.value;	

	 var question= new Array(5);
    /*    var ele = document.getElementsByTagName('input'); 
         for(i = 0; i < ele.length; i++)
        { 
            if(ele[i].checked)
                question[i]=ele[i].value;
       }       
         */
        


        var i=0          
	var harvey=0;
	var mike=0;
  	var jessica=0;
	var donna=0;
  	var litt=0;
	var rachel=0;

	

          
       
          question[0] = question1;
	 question[1] = question2;
	question[2] = question3;
        question[3] = question4;

	 question[4] = question5;  
	

   for(i=0;i<6;i++)
   {
        
	if (question[i] == "h") 
	{
		harvey++;
	}
	if (question[i] == "m") 
	{
		mike++;
	}
	if (question[i] == "j") 
	{
		jessica++;
	}
	if (question[i] == "d") 
	{
		donna++;
	}
	if (question[i] == "l") 
	{
		litt++;
	}
	if (question[i] == "r") 
	{
		rachel++;
	}
}
     var c = Math.max(harvey, mike, jessica, donna, litt, rachel);
	
	var pictures = ["img/har_i.jfif", "img/mik_i.jfif", "img/jes_i.jfif","img/don_i.jfif", "img/lou_i.jfif", "img/rach_i.jfif"];
	var messages = ["HARVEY SPECTER", "MIKE ROSS", "JESSICA PEARSON","DONNA PAULSEN","LOUIS LITT","RACHEL ZANE"];
	var score;

      
	if (c==harvey) {
		score = 0;
	}

	if (c==mike) {
		score = 1;
	}

	if (c==jessica) {
		score = 2;
	}
	
	if (c==donna) {
		score = 3;
	}

	if (c==litt) {
		score = 4;
	}

	if (c==rachel) {
		score = 5;
	}
	
	var music = new Audio("img/aud2.mp3");
  	music.play();

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "You are most likely to own a personality similar to:";
	document.getElementById("message").innerHTML = messages[score];
	
	document.getElementById("picture").src = pictures[score];
	}
	
