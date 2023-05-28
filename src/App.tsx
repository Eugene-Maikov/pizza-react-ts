import React, {FC, useState} from 'react';
import AddPizzaForm from "./components/AddPizzaForm";
import DisplayPizzas from "./components/DisplayPizzas";
import Pizza from "./models/Pizza";
import './App.css';


const App: FC = () => {
  const [pizzasList, setPizzaList] = useState<Pizza[]>([]) //массив пицц

  //метод добавления новой пиццы
  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzasList, newPizza]) //копирование в массив текущих пицц и добавление новой
  }

  //метод обновления новой пиццы
  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzasList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza))) //копирование в массив текущих пицц и добавление новой
  }

  //метод удаления пиццы
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzaList(newPizzasList)
  }

  console.log('pizzasList >>>> ', pizzasList)

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm
          addPizza={addPizza}
        />

        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
