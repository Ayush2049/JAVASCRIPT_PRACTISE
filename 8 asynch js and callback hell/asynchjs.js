function task1() {
  setTimeout(() => {
    console.log("Task 1 complete");
  }, 2000);
}

function task2() {
  setTimeout(() => {
    console.log("Task 2 complete");
  }, 1000);
}

function task3() {
  setTimeout(() => {
    console.log("Task 3 complete");
  }, 3000);
}

function task4() {
  setTimeout(() => {
    console.log("Task 4 complete");
  }, 1500);
}

task1();
task2();
task3();
task4();

console.log("All tasks complete");



/*

--------------------------------------------------------------------------------------------------------------

All four tasks are asynchronous, 
so the final console.log("All tasks complete") runs first, 
and then the others complete based on delay.


----------------------------------------------------------------------------------------------------------------

All tasks complete
Task 2 complete        // after 1 sec
Task 4 complete        // after 1.5 sec
Task 1 complete        // after 2 sec
Task 3 complete        // after 3 sec

---------------------------------------------------------------------------------------------------------

*/
