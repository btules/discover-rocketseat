function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute("alt", "Foto do myke com oculos escuro")
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute("alt", "foto do myke com oculos de grau")
  }
}
