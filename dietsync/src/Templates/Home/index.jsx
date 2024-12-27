import './style.css';

function App() {
  return (
    <div className="App">
      <div class="login-card-container">
        <div class="login-card">
          <div class="login-card-logo">
            <img src="" alt="logo" />
          </div>
          <div class="login-card-header">
            <h1>Entrar</h1>
            <div>Faça login para usar a plataforma</div>
          </div>
          <form class="login-card-form" method="post">
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded">mail</span>
              <input type="text" name="email" placeholder="Email" id="emailForm" autofocus required />
            </div>
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded">lock</span>
              <input type="password" name="password" placeholder="Senha" id="password" required />
            </div>
            <div class="form-item-other">
              <div class="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" name="remember" checked />
                <label for="rememberMeCheckbox">Lembrar de mim</label>
              </div>
              <a href="../php/recuperar-senha.php">Esqueci minha senha!</a>
            </div>
            <button type="submit">Entrar</button>
          </form>
          <div class="login-card-footer">
            <p>Total de acessos:</p>
            Não tem uma conta? <a href="../php/registrar-usuario.php">Crie uma conta como usuário</a>
          </div>
        </div>
      </div >
    </div>
  );
}

export default App;
