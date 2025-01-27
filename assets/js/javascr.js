

 async function getdata(){
  const respones=await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data=await respones.json();


  const result=data.map(function(user) {

    return `
      <div class ='user'>
      
        <h2>${user.name}</h2>
        <P> <span> ID : </span> ${user.id}</P>
        <P> <span> User Name : </span>${user.username}</P>
        <P> <span> Email : </span> ${user.email}</P>
        <p> <span> Address : </span>
          ${user.address.street} -
          ${user.address.suite} - 
          ${user.address.city} - 
          ${user.address.zipcode} - 
          { Geo : ${user.address.geo.lat} - ${user.address.geo.lng} }
              </p>



        </div>

    `
    
  }).join(' ');


  document.querySelector(".user-data").innerHTML=result;

 
}


getdata();