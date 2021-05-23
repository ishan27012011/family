var i=0;
var images=["none","Ishan.jpg","Sarangi.jpg","Dheepthi.jpg","Suneesh.jpg","Leelama.jpg"]
console.log(images);
var names=["noone","Ishan Suneesh","Sarangi Suneesh","Dheepthi L Sivadas","Suneesh C V","Leemama M"]
console.log(names);
function nexet() {
    i++;
 var numbermember=5;
 if(i>numbermember){
i=1;
 }  
var updatedImage=images[i]; 
var updatedName=names[i];
document.getElementById("family_members").src=updatedImage;
document.getElementById("family_members_names").innerHTML=updatedName;}
