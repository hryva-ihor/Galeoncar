
const accordion = document.querySelectorAll(".head, .hidden");

accordion.forEach((item) => {
  item.addEventListener("click", function() {
    

    if (this.classList.contains("active")) {
      this.classList.remove("active")
    }
    else {
      accordion.forEach((child) => {
        child.classList.remove("active")
      })
      this.classList.add("active")
    }
  })
})