import { useState } from 'react';
import styles from './RegistroUsuario.module.css'

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombres: '',
    apellidos: '',
    correo: '',
    fechaNacimiento: '',
    sexo: '',
    discapacidad: '',
    etnia: '',
    telefonoL: '',
    status: '',
    telefonoM: '',
    gV: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBack = () => {
    console.log('Volver');
  };

  return (
<div className={styles.Container}>
  	<h6 className = {styles.Title_Text}>Registro de usuario nuevo</h6>
  <form className={styles.Form} onSubmit={handleSubmit}>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Cedula"
        className={styles.Form_Input}
        type="text"
        id="cedula"
        name="cedula"
        value={formData.cedula}
        onChange={handleChange}
        required
      />
     	<img src = "./ID.svg" className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Nombres"
        className={styles.Form_Input}
        type="text"
        id="nombres"
        name="nombres"
        value={formData.nombres}
        onChange={handleChange}
        required
      />
      <img src = "./FS_Name.svg" className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Apellidos"
        className={styles.Form_Input}
        type="text"
        id="apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        required
      />
      <img src = "./FS_Name.svg" className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Correo"
        className={styles.Form_Input}
        type="email"
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        required
      />
     <img src = "./Email.svg" className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
        className={styles.Form_Input}
        type="date"
        id="fechaNacimiento"
        name="fechaNacimiento"
        value={formData.fechaNacimiento}
        onChange={handleChange}
        required
      />
    </div>
    <div className={styles.Form_Group}>
      <label className={styles.Form_Label} htmlFor="etnia"></label>
      <input
      	placeholder = "Etnia"
        className={styles.Form_Input}
        type="text"
        id="etnia"
        name="etnia"
        value={formData.etnia}
        onChange={handleChange}
      />
      <img src = "./Ethnity.svg" className = {styles.Form_Img}/>
    </div>

    <div className={styles.Form_Group}>
      <input
      	placeholder = "Telefono Local"
        className={styles.Form_Input}
        type="tel"
        id="telefonoL"
        name="telefonoL"
        value={formData.telefonoL}
        onChange={handleChange}
      />
      <img src = "./LocalPhone.svg" className = {styles.Form_Img}/>
    </div>


    <div className={styles.Form_Group}>
      <input
      	placeholder = "Teléfono Movil"
        className={styles.Form_Input}
        type="tel"
        id="telefonoM"
        name="telefonoM"
        value={formData.telefonoM}
        onChange={handleChange}
      />
     	<img src = "./Iphone.svg" className = {styles.Form_Img}/>
    </div>

    <div className={styles.Form_Group}>
      <input
      	placeholder = "G.V"
        className={styles.Form_Input_GU}
        type="text"
        id="gV"
        name="gV"
        value={formData.gV}
        onChange={handleChange}
      />
      <img src = "./FS_Name.svg" className = {styles.Form_Img}/>
    </div>

    <div className = {styles.Select}>
    	<div className={styles.Select_Group}>
      <label className={styles.Form_Label} htmlFor="status"></label>
      <select
        className={styles.Select_Input}
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        <option value="">Status</option>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>
      <img src = "./Status.svg" className = {styles.Select_Img}/>
    </div>
    <div className={styles.Select_Group}>
      <label className={styles.Form_Label} htmlFor="sexo"></label>
      <select
        className={styles.Select_Input}
        id="sexo"
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
        required
      >
        <option value="">Sexo</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>
    	<img src = "./Gender.svg" className = {styles.Select_Img}/>
    </div>

    <div className={styles.Select_Group}>
      <label className={styles.Form_Label} htmlFor="discapacidad"></label>
      <select
        className={styles.Select_Input}
        id="discapacidad"
        name="discapacidad"
        value={formData.discapacidad}
        onChange={handleChange}
        required
      >
        <option value="">Discapacidad</option>
        <option value="no">No</option>
        <option value="si">Sí</option>
      </select>
      <img src = "./Disability.svg" className = {styles.Select_Img}/>
      </div>
    </div>
    <div className = {styles.Button_Group}>
      <button className = {styles.Button} type="submit">Enviar</button>
      <button className = {styles.Button} type="button" onClick={handleBack}>Volver</button>
    </div>
  </form>
</div>
  );
};

export default RegistroUsuario;