function togglemode() {
  const htlm = document.documentElement

  /*if(htlm.classList.contains('light')){
  htlm.classList.remove('light')
} else {
  htlm.classList.add('light')*/

  htlm.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (htlm.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo de oculos escuro e jaqueta preta, barba e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}
