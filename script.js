document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.querySelector("#switch button")
  switchButton.addEventListener("click", toggleLanguage)
  updateSwitchText()
})

function toggleLanguage() {
  const html = document.documentElement
  const isEnglish = html.classList.toggle("english")
  updateSwitchText()

  const img = document.querySelector("#profile img")
  const profileText = document.querySelector("#profile p")
  const links = document.querySelectorAll("ul li a")
  const footer = document.querySelector("footer")

  if (isEnglish) {
    img.setAttribute("alt", "Profile picture of Lucas Rangel")
    profileText.textContent = "@lucasrangel_01"
    links[0].textContent = "About Me"
    links[1].textContent = "View My Portfolio"
    links[2].textContent = "Contact"
    footer.innerHTML = `Made by <a href="mailto:richard.junior1601@hotmail.com">Richard Junior</a>`
  } else {
    img.setAttribute("alt", "Foto de perfil de Lucas Rangel")
    profileText.textContent = "@lucasrangel_01"
    links[0].textContent = "Sobre mim"
    links[1].textContent = "Ver meu portifólio"
    links[2].textContent = "Contato"
    footer.innerHTML = `Feito por <a href="mailto:richard.junior1601@hotmail.com">Richard Junior</a>`
  }
}

function updateSwitchText() {
  const switchButton = document.querySelector("#switch button")
  const isEnglish = document.documentElement.classList.contains("english")
  switchButton.textContent = isEnglish ? "EN" : "PT"
}
