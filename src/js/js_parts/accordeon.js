let acc = document.getElementsByClassName("accordion");
let i;

for (let i = 0; i < acc.length; i++) {
    console.log(acc);
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}