import React from "react";


const Footer = () =>{
    return ( <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-2"> {new Date().getFullYear()},{new Date().getMonth()+1},{new Date().getDate()} Lucas Magán. Todos los derechos reservados.</p>
        </div>
      </footer>)
};

export default Footer