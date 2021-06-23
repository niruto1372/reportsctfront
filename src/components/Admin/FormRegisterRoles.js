import React, { useState } from "react";
import Swal from "sweetalert2";
import { postRegisterRoles } from "services/services";

const FormRegisterRoles = () => {
  const [formulario, setFormulario] = useState({
    role: "",    
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { role } = formulario;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      role.trim() !== "" 
    ) {
      const objRole = {
        ...formulario,
      };
      setFormulario({
        role: "",
        error: false,
      });
      postRegisterRoles(objRole).then((rpta) => {
        if (rpta.data.ok) {
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Se ha creado el rol exitosamente",
            timer: 5000,
            
          });
        }
      });
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rol"
          name="role"
          value={formulario.role}
          onChange={handleChange}
        />
        
        <button type="submit">Registrar</button>
      </form>
    </>
  )
}

export default FormRegisterRoles
