function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  /*podemos simplicar tudo istoem uma só linha */
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //depois de pegar agora vamos substituir
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  //substituir
}
