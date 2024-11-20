function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/imagelight.png")
    img.setAttribute("alt", "Foto Lucas Rangel de perfil modo light")
  } else {
    img.setAttribute("src", "./assets/imagedark.png")
    img.setAttribute("alt", "Foto Lucas Rangel de perfil modo dark")
  }

  //pegar tag img e se tiver light mode -> img light, se nn -> img normal
}
