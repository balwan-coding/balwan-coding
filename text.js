function hide(){
    let main = document.querySelector(".video-contianer");
   let div = document.getElementById("video-contianer-div-2");

    main.style.display= "none";

   div.style.display = "block";

}

function show(){
  let main =  document.querySelector(".video-contianer");
  let div = document.getElementById("video-contianer-div-2");

    

    main.style.display = "block";
    main.style.display = "flex";
    main.style.flexWrap = "wrap";
    
    div.style.display = "none";
}

function mode(){
let body = document.body ;

body.classList.toggle("dark-mode");
body.classList.toggle("light-mode");
    
}