/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';


function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}



export default App;
