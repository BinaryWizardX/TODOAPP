"use client"
import React from 'react';
import Tasks from './Tasks/Tasks';
import { useGlobalContext } from './Context/GlobalProvider';
import { Suspense } from 'react';

export default function Home() {

  const {tasks} = useGlobalContext()

  
 
  

  
  return (
    
      <Tasks title="all tasks" tasksarr={tasks} /> 
    
  );
}
