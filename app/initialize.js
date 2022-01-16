document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded")

  let btn = document.getElementById("home-btn")

  btn.onclick = () => {
    require("./index.js")
  }
})
