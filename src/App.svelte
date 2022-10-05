<script>
  import{Router, Route,Link,link}from "svelte-routing";
  import Login from "./Login.svelte";
  import Inicio from "./Inicio.svelte";
  import VistaUsuarios from "./VistaUsuarios.svelte";
  import LoginAdmin from "./LoginAdmin.svelte";
</script>

<Router>
<div>
  <Route path="/" component={Login}></Route>
  <Route path="/inicio" component={Inicio}></Route>
  <Route path="/usuarios" component={VistaUsuarios}></Route>
  <Route path="/admin" component={LoginAdmin}></Route>
</div>
    
</Router>