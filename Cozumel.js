//Options for Cozumel file 

$(document).ready (function(){

Cozumel_Intro = {
html: '<div id="Cozumel_Intro">\<p class="text_border">You decide to go to Cozumel.<br><img src="media/Cozumel.jpg" style="height:200px;width:300px;"/><br> As you arrive to the terminal, a man wearing large sunglasses holds a sign with your name on it.<br>You approach him and ask "What is going on?"</p>\<p class="text_border">He responds, "Aqui esta tu paquete, y buena suerte." and hands over a package before disappearing into the crowd.</p>\<p class="text_border">Inside the package is a map of Cozumel, a pair of car keys, and directions to a diveshop.<br> <p class="text_border">You arrive to the dive shop. <br> <img src="media/diveshop.png" style="height:200px;width:300px;"/></p>\<br><p class="text_border">The instructions say you must figure out how to complete three dives in a 24 period, including a dive of 80 feet.<br> You have never learned to swim, not to mention scuba-dive. <br>And you are aware of the dangers of an air embolism, when one or more gas bubbles enter a vein or artery.<br> <img src="media/air_embolism.jpg" style="height:200px;width:300px;/><br>It can be lethal.</p>\<p class="text_border"><br>Do you <a href="#" id="Choose_To_Dive_Link">face your fears</a> or <a href="#" id="Back_Out_Link"> back out?</a></p></div>'};

Back_Out = {
html: '<div id="Back_Out">\<p class="text_border">You are too afraid of drowning and decide not to back out. You recieve a phone call. A recording tells you your loved one has died."</p>\</div>'};

Choose_To_Dive = {
html: '<div id="Choose_To_Dive">\<p class="text_border">You decide to dive, despite your fear of drowning. <br> <img src="media/wave.gif" style="height:200px;width:300px;"/> <br>You try your best to follow the directions of the scuba instructor.<br>You first put the tank on the seat and sit down. <br> <img src="media/tanks.jpg" style="height:200px;width:300px;"/> <br> Next, you buckle the Boyuncy Control vest and put the regulator in your mouth.<br><img src="media/bc_vest.jpg" style="height:200px;width:300px;"/><img src="media/regulator.jpg" style="height:200px;width:300px;"/><br>Then, you pull on your fins and mask.<br><img src="media/mask.jpg" style="height:200px;width:300px;"/><img src="media/fins.jpg" style="height:200px;width:300px;"/><br>Holding the regulator and mask with one hand, you use your other hand to push backwards into the open water.</p>\<p class="text_border"><img src="media/water.gif" style="height:200px;width:300px;"/><br>As you descend headfirst into the Palancar Reef, you can see the blue abyss of the ocean.<br>A Bluefin tuna swims past at 45mph, reflecting the light of the sea.<br> <img src="media/bluefin.gif" style="height:200px;width:300px;"/><img src="media/tuna.gif" style="height:200px;width:300px;"/><br>The farther down you go, the reef appears darker, and less colorful.<br>You can hear yourself breathing. <br><img src="media/giphy.gif" style="height:200px;width:300px;"/><br>Before you realize it, you are already 80 feet deep. The instructor gives you a thumbs-up, a signal to return to the surface.</p>\<p class="text_border">As you get back into the boat, you are unsure if you can make another dive. The combination of fear and jet lag left you exhausted.<br>The instructor reminds you to meet back in two hours for a 50-foot dive.</p>\<p class="text_border">You fall asleep right there on the sand. <br> <img src="media/sand.gif" style="height:200px;width:300px;/><br>The instructor wakes you up, hands you a weight-belt, and says "We are going to Santa Rosa".</p>\<p class="text_border">You somehow mangage to get up and climb into the Zodiac. <br> The boat moves into the horizon. <br><br> <img src="media/sunset_clouds.gif" style="height:200px;width:300px;"/> <img src="media/sunsent gif.gif" style="height:200px;width:300px;"/> <br>The instructor throws an anchor into the water and the two of you dive in.</p>\<p class="text_border">He immediately swims towards the reef. As you approach it, the colors and shape of the Santa Rosa reef become more defined, and the oceans diversity overwhelms you.<br> <img src="media/reef.gif" style="height:200px;width:300px;/><br> <img src="media/gereen_coral.gif" style="height:200px;width:300px;/><br></p>\<p class="text_border">About 20 minutes into the dive, the intructor signals to follow after a sea turtle.<br>You decide to <a href="#" id="Get_Lost_Link">Get lost in the ocean</a> or <a href="#" id="Follow_Turtle_Link">follow after the wild sea creature.</a></p>\</div>'};

Follow_Turtle = {
    html: '<div id="Follow_Turtle"><p class="text_border">You follow after the instrutor, who is holding onto the turtles shell and prompting you do the same.<br>In a dreamlike state, you grab with on one hand at the top, and the other at the bottom.<br> Without notice, the instructor lets his hands go as you are being pullled at high speed to the surface.<br>You snap back to reality and let the turtle go. You swim back to the Zodiac.</p>\<p class="text_border">After a meal and a few hours rest, it is time for the final dive; a night dive in Chankanaab.<br>The lagoon opens up to the ocean, illuminated by the blue bioluminescence and moonlight.</p>\<p class="text_border">The instructor waits for you on the pier with two tanks, ready to go.<br>\ For the last time, he hands over the weight belt.<br>\ Suddenly, you realize that he is the same man who gave you the package and wished you good luck.<br>\ You switch on your flashlight, feeling oddly at ease, and <a href="#" id="Final_Dive_Link">join him in the lagoon.</a></p>\ </div>'};       

Get_Lost={
    html:'<div id="Get_Lost"><p class="Player_Loses_Cozumel">You choose not to follow after the turtle. Not knowing where you are, you decide to resurface. Unable to find your way, the current pulls you to the Carribean sea. Eventually you drown.</p><br><img src="media/drowning.gif"/></div>'};

Player_Loses_Cozumel={
   html:'<div id="Player_Loses_Cozumel"><p class="text_border">You decide not to dive. As you walk out of the shop, the phone rings again. You answer and hear the scream, followed by a shot.</p></div>'};   

Player_Wins_Cozumel={
    html:'<div id="Player_Wins_Cozumel"><p class="text_border">After 20 minutes pass, you head back to the surface.<br>As you walk out from the lagoon, you see your loved one waiting for you by the shore. The three of you sit on the sand and watch hundreds of newly-hatched baby turtles crawl their way into the sea.</p></div>'};

Final_Dive={
    html:'<div class="Final_Dive"></div>'}; 


var a = [];
a.push(Cozumel_Intro);
a.push(Back_Out);
a.push(Choose_To_Dive);
a.push(Follow_Turtle);
a.push(Get_Lost);
a.push(Player_Loses_Cozumel);
a.push(Player_Wins_Cozumel);
a.push(Final_Dive);

for (var i = 0; i < a.length; i++) {

$("body").append(a[i].html);
}


$("div").hide();

$("#Cozumel_Intro").show();

//$(!"div[display]").hide();
//$(a[i])

$("#Choose_To_Dive_Link").click(function(){
    $("#Cozumel_Intro").hide();
    $("#Choose_To_Dive").show();
});

$("#Back_Out_Link").click(function(){
    $("#Cozumel_Intro").hide();
    $("#Back_Out").show();
});

$("#Follow_Turtle_Link").click(function(){
    $("#Choose_To_Dive").hide();
     $("#Follow_Turtle").show();
});

$("#Get_Lost_Link").click(function(){
    $("#Choose_To_Dive").hide();
     $("#Get_Lost").show();
});

$("#Final_Dive_Link").click(function(){
    $("#Follow_Turtle").hide();
    $("#Player_Wins_Cozumel").show();
});


console.log(Follow_Turtle);
console.log(Choose_To_Dive);
console.log(Player_Wins_Cozumel);


//Win & Lose alerts

$("#Player_Wins_San_Juan").on("click", function(){
        alert("Congratulations, you won!");
    });
   

$("#Player_Loses_San_Juan").on("click", function(){
        alert("You lost!");
    });

$("#Back_Out").on("click", function(){
        alert("You lost!");
    });
});


function save(){

}

function reset(){
    location.reload();
}