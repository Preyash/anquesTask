import React from 'react';

export default function App() {
  let homeCheck = window.location.pathname === '/home'
  return (
    <nav className={`navbar ${homeCheck && 'blueBg'}`}>
      <div className="title">XYZ NAME</div>
      <div className="logo">Logo</div>
    </nav>
  );
}
