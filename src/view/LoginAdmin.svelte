<script>
    import{Link,navigate}from "svelte-routing";
  let usuario = {
    usr: "",
    pswd: "",
  };

  let loguear = () => {
    const nuevoLogin = {
      usuario: usuario.usr,
      contrasena: usuario.pswd,
    };
    
    if (usuario.usr != "" && usuario.pswd != "") {
      fetch("https://api-rest-mongo.vercel.app/login/usuario", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(nuevoLogin),
      })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
           if(datosRespuesta.ok){
                navigate("/inicio", { replace: true });  
           }else{
            alert("Usuario o contraseña incorrecta")
           }
          
        })
        .catch(console.log);
    } else {
      alert("Ingrese un usuario o contraseña");
    }
  };

</script>

<div class="container">
  <div class="card card-body">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">Usuario</label>
        <input
          bind:value={usuario.usr}
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Contraseña</label>
        <input
          bind:value={usuario.pswd}
          type="password"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
      </div>

      <button
        type="button"
        class="btn btn-primary"
        on:click|preventDefault={loguear}>Loguear</button
      >
    </form>
  </div>
</div>
