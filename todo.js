const btn=document.getElementById("AddTaskbtn")
btn.addEventListener("click",(Onclick)=>{
    const txt1=document.getElementById("taskInput")
    const task=txt1.value.trim()
if(task=='')    {
    return alert("Enter a task")
}
const li=document.createElement('li')
li.classList.add('list-group-item')



const span=document.createElement('span')
span.innerText=task
li.appendChild(span)


const completed=document.createElement('i')
completed.classList.add('bi','bi-check','fs-4','text-success','align-right')
li.appendChild(completed)



completed.addEventListener('click',()=>{
    
    span.classList.toggle('completed')
})


 const deleteicon=document.createElement('i');
 deleteicon.classList.add('bi','bi-trash3','text-danger','fs-4','align-right')
 li.appendChild(deleteicon)

 deleteicon.addEventListener('click',()=>{
    li.remove()
 })


document.getElementById("tasklist").appendChild(li)
txt1.value=''
})
