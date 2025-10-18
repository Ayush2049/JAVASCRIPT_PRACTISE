function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
}

// callbacks hell
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks complete");
      });
    });
  });
});




/*

--------------------------------------------------------------------------------------------------------------

They are chained in order using callbacks, so they run sequentially, not in parallel.
but the problem is callback hell,which is creating an issue of readibility.

----------------------------------------------------------------------------------------------------------------

(After 2s)     Task 1 complete
(After 3s)     Task 2 complete        // 2s + 1s
(After 6s)     Task 3 complete        // 3s after task2
(After 7.5s)   Task 4 complete        // 1.5s after task3
               All tasks complete


---------------------------------------------------------------------------------------------------------

*/
