import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { Header } from '@/shared/ui/header';

export const LoginPage = () => {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Показываем ошибку для демонстрации
    setShowError(true);
  };

  return (
    <div className={`login-page ${showError ? 'error' : ''}`}>
      <Header />

      <div className="login-container">
        <div className={`login-form-container ${showError ? 'error' : ''}`}>
          <h1 className="login-title">Вход</h1>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${showError ? 'error' : ''}`}
                placeholder="Эл. почта"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                className={`form-input ${showError ? 'error' : ''}`}
                placeholder="Пароль"
              />
              {showError && (
                <div className="error-message">
                  Упс! Введенные вами данные некорректны. Введите данные
                  корректно и повторите попытку.
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`login-button ${showError ? 'disabled' : ''}`}
            >
              Войти
            </button>
          </form>

          <div className="register-link">
            <p>
              Нужно зарегистрироваться?
              <br />
              <Link to="/register" className="register-link-text">
                Регистрируйтесь здесь
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
