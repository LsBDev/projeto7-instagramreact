import { useState } from "react"

export default function Usuario() {
  const [nomeUsuario, setNomeUsuario] = useState("user")
  const [fotoUsuario, setFotoUsuario] = useState("https://www2.sarah.br/Auth/Content/images/user.png")

  function changeUser() {
    let nome = prompt ('Digite o seu nome')
    if(nome !== "") {
      setNomeUsuario(nome)
    } else {
      setNomeUsuario(nomeUsuario)
    }    
  }

  function changeFoto() {
    let foto = prompt ('link da sua foto')
    if(foto !== "") {
      setFotoUsuario(foto)
    } else {
      setFotoUsuario(fotoUsuario)
    }    
  }   

  return (
    <div class="usuario">
      <img  data-test="profile-image" onClick={changeFoto} src={fotoUsuario} alt="imagem de perfil"/>
      <div class="texto">
        <span>
          <strong data-test="name">{nomeUsuario}</strong>
          <ion-icon data-test="edit-name" onClick={changeUser} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}