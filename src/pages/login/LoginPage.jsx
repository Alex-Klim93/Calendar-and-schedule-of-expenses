const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Вход</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
