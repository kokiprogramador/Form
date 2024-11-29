import { useState } from 'react';
import styles from './RegistroOfertaAcademica.module.css';

const RegistroOfertaAcademica = () => {
  const [oferta, setOferta] = useState({
    semestre: '',
    numero: '',
    codigo: '',
    hp: '',
    ht: '',
    htotal: '',
    asignatura: '',
    uc: '',
    prelaciones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOferta({
      ...oferta,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(oferta);
  };

  return (
    <div className={styles.GlobalCTN}>
      <h6 className={styles.Title_Text}>Oferta Academíca</h6>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div>
          <input
            placeholder="Semestre"
            type="number"
            name="semestre"
            value={oferta.semestre}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Student.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="Horas prácticas"
            type="number"
            id = "hora practica"
            name="hora practica"
            value={oferta.hp}
            onChange={handleChange}
            required
            className={styles.Form_Input}
          />
          <img src="./Number.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="Horas teoricas"
            type="number"
            name="hora teorica"
            value={oferta.ht}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Number.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="Horas semanales"
            type="number"
            name="hora total"
            value={oferta.htotal}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Number.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="Codigo"
            type="number"
            name="codigo"
            value={oferta.codigo}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Binary.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="Asignatura"
            type="text"
            name="asignatura"
            value={oferta.asignatura}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Student.svg" className={styles.Form_Img} />
        </div>
        <div>
          <input
            placeholder="U.C"
            type="number"
            name="uc"
            value={oferta.uc}
            onChange={handleChange}
            className={styles.Form_Input}
          />
          <img src="./Credit.svg" className={styles.Form_Img} />
        </div>
        <div className={styles.Select}>
          <div className={styles.Select_Group}>
            <select
              className={styles.Select_Input}
              name="prelaciones"
              value={oferta.prelaciones}
              onChange={handleChange}
            >
              <option value="">Prelaciones</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
            </select>
            <img src="./Student.svg" className={styles.Select_Img} />
          </div>
        </div>
        <div className={styles.Button_Group}>
          <button className={styles.Button} type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroOfertaAcademica;
