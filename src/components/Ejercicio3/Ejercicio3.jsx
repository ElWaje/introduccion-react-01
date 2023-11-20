import TituloEjercicio from '../TituloEjercicio';
import Lista from './Lista'; 
import { productos } from '../../constants/productos';

export default function Ejercicio3() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 3</TituloEjercicio>
      <Lista productos={productos} />
    </section>
  );
}