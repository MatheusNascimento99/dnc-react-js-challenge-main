import { useState } from "react";
import "../views/Organizador.scss";
import { FaPlus, FaTrash } from 'react-icons/fa';


const Organizador = () => {
  const [tarefa, setTarefa] = useState(''); // estado para armazenar a TAREFA digitada
  const [lista, setLista] = useState([]); // estado para armazenar a LISTA DE TAREFA digitada
  const novaTarefa = (e) => {
    setTarefa(e.target.value);
  }

  function Adc() {
    setLista([...lista, tarefa]);
    setTarefa(''); // estado para limpar entrada do input após digitação
  }

  function Remover(index){
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  }




  return (

    <div className="divborda">
      <h5>Organização</h5>
      <h4>Tarefa</h4>
      <div className="function">
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        <div className="afazeres">
          <h3>Tarefa </h3>
          <h3>Status </h3>
          <h3>Opções </h3>
        </div>
        <hr />
        <div>
          <ul>
            {lista.map((cada, index) => (
            <li key={index}>
              {cada}
              <button onClick={() => Remover(index)}><FaTrash/></button>
            </li>
            ))}
          </ul>
          
          <input type="text" placeholder=" Nova Tarefa..." value={tarefa} onChange={novaTarefa}></input>
          <button onClick={Adc} > <FaPlus/> </button>

        </div>
      </div>
    </div>
  )




}




export default Organizador

/*


*/
