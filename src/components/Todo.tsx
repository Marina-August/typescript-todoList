import TodoItem from './TodoItem';
import Todos from './models/todo';
import classes from './Todo.module.css';

const Todo:React.FC<{items: Todos[], onDelete:(idData:string)=>void}> = (props)=>{
    const deleteHandler =(id:string)=>{
         props.onDelete(id);
    }

    return(
        <>
          <ul className={classes.todos}>
            {props.items.map(el =>(<TodoItem key = {el.id} text={el.text} id={el.id} onDelete={deleteHandler}/>))}
          </ul>
        </>
    )

}

export default Todo;