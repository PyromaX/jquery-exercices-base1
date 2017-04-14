$(document).ready(function(){
  $("#bouton1").click(function(){
    var name = $("#nom").val();
    var Age = $("#age").val();
    $("#yolo").append("bonjour " + name + " !");

    //LECTEUR

    var musique = "<audio preload=\"auto\" id=\"Psycho\" src=\"./Psycho.mp3\"></audio><audio preload=\"auto\" id=\"Schubert\" src=\"./Schubert.mp3\"></audio>";
    $("#lecteur").append(musique);
    var player = document.querySelector((Age < 18) ? "#Schubert" : "#Psycho");
    player.play();

  });
});
