<script>
  import{Link,navigate}from "svelte-routing";

  let datoUsuario={
    user:"",
    pswd:""
  }
  let login=()=>{
    if (datoUsuario.user=="admin" && datoUsuario.pswd=="123"){
        console.log("logueado")
      navigate("/inicio")
    }

  }
</script>

<div class="container">

  <div class="card card-body">
   <form action="">
    <div class="mb-3">
                  <label for="" class="form-label">Usuario</label>
                  <input
                 
                  bind:value={datoUsuario.user}                    
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
                
                  bind:value={datoUsuario.pswd}                    
                    type="password"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                 
              </div>

                <button type="button" class="btn btn-primary"
                on:click|preventDefault={login}>Loguear</button>
           
              </form>
  </div>
</div>


