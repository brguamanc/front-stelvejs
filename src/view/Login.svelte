<script>
  import{Link,navigate}from "svelte-routing";


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
 <Link to="/admin">  
       <button type="button" class="btn btn-primary">Entrar como admin</button>
    </Link>
</p>


</div>

   
