import { useState } from "react";
import "../views/Organizador.scss";
import lixo from '../views/lixo.svg';




const Organizador = () => {
  const [tarefa, setTarefa] = useState(''); // estado para armazenar a TAREFA digitada
  const [lista, setLista] = useState([]); // estado para armazenar a LISTA DE TAREFA digitada
  const novaTarefa = (e) => {
    setTarefa(e.target.value);
  }

  function Adc() {
    if (tarefaSelect !== null) {
      const novaLista = [...lista];
      novaLista[tarefaSelect] = tarefa;
      setLista(novaLista);
      setTarefaSelect(null);
    } else {
      setLista([...lista, tarefa]);
    }

    setTarefa(''); // estado para limpar entrada do input após digitação
  }

  function Remover(index) {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  }

  const [tarefaSelect, setTarefaSelect] = useState(null);

  function Editar(index) {
    setTarefaSelect(index);
    setTarefa(lista[index]);
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
        <div className="tarefas">
          <div>

            <ul className="list">
              {lista.map((cada, index) => (
                <li key={index}>
                  {cada}

                  <div className="task">
                    <input  type="checkbox" />
                  </div>

                  <div className="button">
                    <button onClick={() => Editar(index)} > Editar  </button>
                    <button onClick={() => Remover(index)}> {lixo} </button>
                  </div>

                </li>
              ))}
            </ul>
            
          </div>

          <div className="end">
            <input  type="text" placeholder=" Nova Tarefa..." value={tarefa} onChange={novaTarefa}></input>
            <button id="Adc"  onClick={Adc} > + </button>
            {lixo}
            

          </div>
          
        </div>
      </div>
    </div>
  )




}




export default Organizador

/*


*/
