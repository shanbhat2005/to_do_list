let btn=document.getElementById('btn');
let list = document.getElementById('list');
btn.style.padding="25px";

btn.addEventListener('click',function(){
  let naam=prompt("enter task")
  
  let insert=document.createElement('li');
  insert.textContent=`${naam}`;
  list.appendChild(insert);
})

