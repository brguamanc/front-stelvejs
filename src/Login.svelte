<script>
  import{navigate}from "svelte-routing";

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
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
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
                on:click|preventDefault={login}>loguear</button>
           
              </form>
            </div>
          </div>
        </div>
        
      </div>
</div>
