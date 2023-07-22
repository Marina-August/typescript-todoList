import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo:(text:string)=>void}> =(props)=>{
    const todoTextInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler =(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim() === ''){
            return;
        }
      props.onAddTodo(enteredText);
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.label}>
                <label>To do today:</label>
            </div> 
            <textarea  id='text' ref={todoTextInputRef}></textarea>
            <div className = {classes.button}>
                <button type="submit">Add Goal</button>       
            </div>
        </form>
    )

}

export default NewTodo;