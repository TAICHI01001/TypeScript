import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../app/types/todo';
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  return (
    <></>
  );
}
