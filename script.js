function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatarfigma.png")
  }

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/

  // substituir a imagem
  // light mode, avatarfigma
  // sem light mode, manter imagem normal
}
