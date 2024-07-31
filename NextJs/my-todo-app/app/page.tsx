import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../app/types/todo';
import { title } from 'process';
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const addTodo = async () => {
    try{
      const response = await axios.post<Todo>('/api/todos', {title: newTodo});
      setTodos([...todos, response.data]);
      setNewTodo('');
    }catch(error){
      console.error(error);
    }
  }
  
  return (
    <></>
  );
}
