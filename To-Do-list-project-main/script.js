function func1(){
    let variable1 =prompt('Enter task index to be added','Ex:1');
    let vi=prompt("enter a task to be added");
    document.getElementById(`${variable1}`).innerText=vi;
}
function func2(){
    let variable2 =prompt('Enter task index to be updated','Ex:1');
    let v=prompt("enter new task now");
    document.getElementById(`${variable2}`).innerText=v;
}
 
function func3(){
    let variable3 =prompt('Enter task index to be deleted','Ex:2');
    document.getElementById(`${variable3}`).innerText="";
}