import classes from './TodoItem.module.css'

const TodoItem:React.FC<{text:string, id:string, onDelete:(idData:string)=>void}> =(props)=>{
   const deleteItemHandler = (id:string)=>{
         props.onDelete(id);
   }

   return(
    <li className={classes.item} onClick={()=>deleteItemHandler(props.id)}>{props.text}</li>
   )
}

export default TodoItem;