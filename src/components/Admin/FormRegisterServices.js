import React, { useState } from "react";
import { postRegisterServices } from "services/services";
import Swal from "sweetalert2";

const FormRegisterServices = () => {
  const [formulario, setFormulario] = useState({
    service: "",
    description: "",
    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { service, description } = formulario;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service.trim() !== "" && description.trim() !== "") {
      const service = {
        ...formulario,
      };
      setFormulario({
        service: "",
        description: "",
        error: false,
      });
      postRegisterServices(service).then((rpta) => {
        if (rpta.data.ok) {
          Swal.fire({
            title: "Hecho!",
            icon: "success",
            text: "Se ha creado el servicio exitosamente",
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
          placeholder="Servicio"
          name="service"
          value={formulario.service}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          value={formulario.description}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default FormRegisterServices;
