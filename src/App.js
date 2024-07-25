import React, { useState } from 'react';
import './App.css'

function Elevator() {
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(true);
  let [people, setPeople] = useState(0);
  let [floor, setFloor] = useState(0);
  const limit = 2;

  const exibirMenu = () => {
    console.log("-----------------------");
    console.log("1) Adicionar pessoa");
    console.log("2) Remover pessoa");
    console.log("3) Subir um andar");
    console.log("4) Descer um andar");
    console.log("5) Exibir informações");
    console.log("0) Encerrar");
  };

  const executarAcao = (input) => {
    console.clear();
    switch (input) {
      case "1":
          setPeople(people += 1);
          console.log(`Pessoa adicionada. Agora temos um total de ${people} pessoas.`);
          break;
      case "2":
        // Remover pessoa
        if (people > 0) {
          setPeople(people -= 1)
          console.log(`Pessoa removida. Agora temos um total de ${people} pessoas.`);
          break;
        } else {
          console.log('Não há mais pessoas para remover.');
          break;
        }
      case "3":
        // Subir andar

        if (floor >= 0 && floor < 3 && people <= limit) {
          setFloor(floor += 1);
          console.log(`Subimos um andar. Agora estamos no andar ${floor}.`);
          break;
        } else {
          if (people > limit) {
            console.log(`A capacidade máxima foi atingida. Remova ${people - limit} pessoa(s) do elevador.`);
            break;
          } else {
            console.log('Já estamos no último andar. Não é possível subir mais.');
            break;
          }
        }
      case "4":
        // Descer andar
        if (floor > 0 && people <= limit) {
          setFloor(floor -= 1);
          console.log(`Descemos um andar. Agora estamos no andar ${floor}.`);
          break;
        } else {
          if (people > limit) {
            console.log(`A capacidade máxima foi atingida. Remova ${people - limit} pessoa(s) do elevador.`);
            break;
          } else {
            console.log('Já estamos no térreo. Não é possível descer mais.');
            break;          
          }
        }
      case "5":
        // Exibir informações
        console.log(`Nós estamos no andar ${floor}, com ${people} pessoas no elevador. O número máximo de pessoas é ${limit} pessoas`);
        break;
      case "0":
        console.log("Encerrando...");
        setIsRunning(false);
        break;
      default:
        console.log("Ação não encontrada!");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executarAcao(input);
    setInput('');
  };

  return (
    <div>
      <h1>Menu</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Digite sua opção"
        />
        <button type="submit">Enviar</button>
      </form>
      {isRunning && exibirMenu()}
    </div>
  );
}

export default Elevator;
