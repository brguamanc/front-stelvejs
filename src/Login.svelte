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
          <div class="card text-center">

  <div class="card-body">
    <h5 class="card-title">Visitar rutas de buses</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <nav>
    <Link to="/usuarios">  
       <button type="button" class="btn btn-primary">Vamos alla!</button>
    </Link>

  </nav>
 
  </div>
  <div class="card-footer text-muted">
    Las rutas se actualizarán constantemente
    
  </div>
  </div>

<p>
   
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Entrar como administrador
  </button>
</p>

<div class="collapse" id="collapseExample">
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


</div>

   
