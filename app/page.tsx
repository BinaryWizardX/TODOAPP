"use client"
import React from 'react';
import Tasks from './Tasks/Tasks';
import { useGlobalContext } from './Context/GlobalProvider';
import loading from './loading';
import { Suspense } from 'react';

export default function Home() {

  const {tasks} = useGlobalContext()

  const tasksarray = tasks.tasks
 
  

  
  return (
    <Suspense fallback={<p>Loading ....</p>}>
      <Tasks title="all tasks" tasksarr={tasksarray}/> 
    </Suspense>
  );
}
