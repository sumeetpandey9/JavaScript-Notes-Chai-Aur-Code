//javascript is single threaded

/*
1. JS creates a Global execution context 
2. Next it creates the memory phase
3. Memory phase - In this phase, the variables are set to undefined.
  until the execution phase(next phase) and the functions are set to their definitions.
4. Next it creates the execution phase
5. Execution phase - In this phase, the variables are initialised to given values and 
  when the functions are called, it creates a memory phase and execution phase for the function 
  just like the main one.
*/