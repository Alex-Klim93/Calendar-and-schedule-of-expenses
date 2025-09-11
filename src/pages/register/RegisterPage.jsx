import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../shared/assets/images/logo.svg';
import './RegisterPage.css';

const RegisterPage = () => {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Показываем ошибку для демонстрации
    setShowError(true);
  };

  return (
    <div className={`register-page ${showError ? 'error' : ''}`}>
      <header className="register-header">
        <img src={logo} alt="SkyproWallet" className="register-logo" />
      </header>
      
      <div className="register-container">
        <div className={`register-form-container ${showError ? 'error' : ''}`}>
          <h1 className="register-title">Регистрация</h1>
          
          <form className="register-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${showError ? 'error' : ''}`}
                placeholder="Имя"
              />
            </div>
            
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
                  Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              className={`register-button ${showError ? 'disabled' : ''}`}
            >
              Зарегистрироваться
            </button>
          </form>
          
          <div className="login-link">
            <p>
              Уже есть аккаунт?<br />
              <Link to="/login" className="login-link-text">
                Войдите здесь
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
