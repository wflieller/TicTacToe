

$(document).ready(function(){

var imagex = $('<img class= "playx" src="rsz_answer-red-x.png" />');
var imageo = $('<img class= "playo" src="rsz_o.png" />');
var last_turn = imageo;
var x_wins = 0;
var o_wins = 0;
var count = 0;


// Placement function
    $('div.btn').click(function(){
     if ($(this).hasClass('.disable'))
  {
    alert('Already selected');
    count --;
    

  }

    if(last_turn==imagex) {
        $(this).html('<img class= "playo" src="jedilightsabre.png" />').addClass('animated swing');
        $(this).addClass('.imageo');
        $(this).addClass('.disable');
        last_turn = imageo;
        count++;
    }
    else {
        $(this).html('<img class= "playx" src="lightsaber.png" />').addClass('animated swing');
        $(this).addClass('.imagex');
        $(this).addClass('.disable');
        last_turn = imagex;
        count++;
    }

    if ($("#one").hasClass('.imageo') &&
          $("#two").hasClass('.imageo') &&
          $("#three").hasClass('.imageo') ||
          $("#four").hasClass('.imageo') &&
          $("#five").hasClass('.imageo') &&
          $("#six").hasClass('.imageo') ||
          $("#seven").hasClass('.imageo') &&
          $("#eight").hasClass('.imageo') &&
          $("#nine").hasClass('.imageo') ||
          $("#one").hasClass('.imageo') &&
          $("#four").hasClass('.imageo') &&
          $("#seven").hasClass('.imageo') ||
          $("#two").hasClass('.imageo') &&
          $("#five").hasClass('.imageo') &&
          $("#eight").hasClass('.imageo') ||
          $("#three").hasClass('.imageo') &&
          $("#six").hasClass('.imageo') &&
          $("#nine").hasClass('.imageo') ||
          $("#one").hasClass('.imageo') &&
          $("#five").hasClass('.imageo') &&
          $("#nine").hasClass('.imageo') ||
          $("#three").hasClass('.imageo') &&
          $("#five").hasClass('.imageo') &&
          $("#seven").hasClass('.imageo')){
      alert('The Force is strong in you Padawan.')
      o_wins++;
      $('#oWins').val(o_wins);
      $("#game div").text(" ");
      $("#game div").removeClass('.imagex');
      $("#game div").removeClass('.imageo');
      $("#game div").removeClass('.disable');
      $("#game div").removeClass('animated swing');
      count = 0
      
    }

    else if ($("#one").hasClass('.imagex') &&
          $("#two").hasClass('.imagex') &&
          $("#three").hasClass('.imagex') ||
          $("#four").hasClass('.imagex') &&
          $("#five").hasClass('.imagex') &&
          $("#six").hasClass('.imagex') ||
          $("#seven").hasClass('.imagex') &&
          $("#eight").hasClass('.imagex') &&
          $("#nine").hasClass('.imagex') ||
          $("#one").hasClass('.imagex') &&
          $("#four").hasClass('.imagex') &&
          $("#seven").hasClass('.imagex') ||
          $("#two").hasClass('.imagex') &&
          $("#five").hasClass('.imagex') &&
          $("#eight").hasClass('.imagex') ||
          $("#three").hasClass('.imagex') &&
          $("#six").hasClass('.imagex') &&
          $("#nine").hasClass('.imagex') ||
          $("#one").hasClass('.imagex') &&
          $("#five").hasClass('.imagex') &&
          $("#nine").hasClass('.imagex') ||
          $("#three").hasClass('.imagex') &&
          $("#five").hasClass('.imagex') &&
          $("#seven").hasClass('.imagex')){
    alert('You underestimate the power of the Dark Side!')
    
    x_wins++;
    $('#xWins').val(x_wins);
    $("#game div").text(" ");
    $("#game div").removeClass('.imagex');
    $("#game div").removeClass('.imageo');
    $("#game div").removeClass('.disable');
    $("#game div").removeClass('animated swing');
    count = 0;
    

    }

    else if (count === 9){
    alert('Try again, and may the force be with you.')
    $("#game div").text(" ");
    $("#game div").removeClass('.imagex');
    $("#game div").removeClass('.imageo');
    $("#game div").removeClass('.disable');
    $("#game div").removeClass('animated swing');
    count = 0;

  }

    $('#xWins').text(x_wins);
    $('#oWins').text(o_wins);

    $(".restart").click(function(){
      $("#game div").text(" ");
      $("#game div").removeClass('.imagex');
      $("#game div").removeClass('.imageo');
      $("#game div").removeClass('.disable');
      $("#game div").removeClass('animated swing');
      count = 0;

    });

  });
});


