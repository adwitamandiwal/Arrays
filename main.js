
var reasons=[
    "Trees Provide Oxygen for Humans",
    "Trees Prevent Soil Erosion",
    "Trees Provide Shade",
    "Trees can be Used to Make Medicine",
    "Trees and Part of Earth's Natural Beauty"
  ];
  var images=[
    "tree1.jpg",
    "tree2.jpg",
    "tree3.jpg",
    "tree4.jpg",
    "tree5.jpg"
  ];
  var i=0;
  
  function changeimage(){
    document.getElementById("myreasons").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    if (i==5){
      i=0;
      
    }
    
  }