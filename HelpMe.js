// Get the modal
var  modal1 = document.getElementById('EducationModal');
var  modal3 = document.getElementById('SkillsModal');
var	 modal2 = document.getElementById('ExperienceModal');	


// Get the button that opens the modal
var button1 = document.getElementById('Button 1');
var button2 = document.getElementById('Button 2');
var button3 = document.getElementById('Button 3');


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];



// When the user clicks on the button, open the modal
button1.onclick = function() {
    modal1.style.display = "block";
    button1.style.border = "2px solid green";
    modal1.style.animationPlayState = 'running';

}
button2.onclick = function() {
    modal2.style.display = "block";
    button2.style.border = "2px solid green";
      modal2.style.animationPlayState = 'running';
}
button3.onclick = function() {
    modal3.style.display = "block";
    button3.style.border = "2px solid green";
      modal3.style.animationPlayState = 'running';
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
    button1.style.border = "none";

}
span2.onclick = function() {
    modal2.style.display = "none";
    button2.style.border = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
    button3.style.border = "none";
}
