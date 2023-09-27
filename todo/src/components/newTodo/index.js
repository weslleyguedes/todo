import React, { useState } from 'react';
import propTypes from 'prop-types';
import "./styles.css";

const NewTodo = ({ onNewTodo }) =>{

const [valorInput, setValorInput] = useState("");

const onChange = (event) => {
    setValorInput(event.target.value)
  }

const apagar = () => {
    setValorInput('')
  }

const submit = () => {
  if(onNewTodo) {
    onNewTodo(valorInput);
    apagar();
  }
};

const clickEnter = 13;
const clickEsc = 27;

const onKeyDown = (event) => {
  if (event.which === clickEnter) {// enviando com enter
    submit();
  } else if (event.which === clickEsc) {// apagando o texto com esc
     apagar();
  }
}

return(


<input className="new-todo" placeholder="o que precisa ser feito?" value={valorInput} onChange={onChange} onKeyDown={onKeyDown} />


)
}

NewTodo.propTypes = {
  onNewTodo:propTypes.func.isRequired,
};
export default NewTodo;

