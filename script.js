function toggleTheme(){
  let body = document.getElementById("mainBody");
  let btn = document.getElementById("toggleBtn");
  let title = document.querySelector("#title");

  if(body.style.backgroundColor === "white"){
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btn.textContent = "light";
    title.style.color = "red";
  }
  else{
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btn.textContent = "Dark";
    title.style.color = "purple";
  }
  
}