import React from 'react';
import validPassword from '../utils/validPassword';
import validUsername from '../utils/validUsername';

export default function App() {
  return (
    <div className="container register-form">
      <div className="form">
        <form>
          <label htmlFor="pw">
            <p className="label-txt">WRITE YOUR PASSWORD</p>
            <input type="password" className="input" id="pw" />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <label htmlFor="rep">
            <p className="label-txt">TEST PASSWORD</p>
            <input type="text" className="input" disabled id="rep" style={{ color: validPassword() ? 'green' : 'red' }} />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          <label htmlFor="usr">
            <p className="label-txt">WRITE YOUR USERNAME</p>
            <input type="text" className="input" id="usr" style={{ color: validUsername() ? 'green' : 'red' }} />
            <div className="line-box">
              <div className="line" />
            </div>
          </label>
          {validPassword() && validUsername()
            ? <button type="button" className="btn btn-success btn-lg" style={{ width: '10rem' }}>OK</button>
            : <button type="button" className="btn btn-danger btn-lg" style={{ width: '10rem' }}>NOT OK</button> }
        </form>
      </div>
    </div>
  );
}
