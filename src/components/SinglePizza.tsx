import React, {FC, useState} from "react";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';
import Pizza from "../models/Pizza";

interface SinglePizzaProps {
  pizza: Pizza
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const SinglePizza: FC<SinglePizzaProps> =
  ({pizza, updatePizza, deletePizza}) => {

    //[переменная, функция] = хук базового состояния <описание типа>
    const [edit, setEdit] = useState<boolean>(false)

    // Событие клика на кнопку Редактировать
    const handleToggleEdit = () => {
      setEdit(!edit)
    }
    // Событие клика на кнопку Удалить
    const handleDelete = () => {
      deletePizza(pizza.id)
    }


    return (
      <div className="pizza">

        <img src={`/images/${pizza.img}`} alt={pizza.title}/>
        <h2>{pizza.title}</h2>
        <span>{pizza.price} руб.</span>

        <div className="pizza-controls">
          <AiFillEdit onClick={handleToggleEdit}/>
          <AiFillDelete onClick={handleDelete}/>
        </div>

        {/*Если значение edit = true, то отображаем форму редактирования*/}
        {edit ? <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        /> : null}

      </div>
    )
  }
export default SinglePizza