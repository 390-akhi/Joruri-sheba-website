
const callData = [];

// reusable function

// for call
function callButton(id){
    
    document.getElementById(id).addEventListener('click', function(){
     
    const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
})
}


// for call

// for heart
function heartButton(id){
   document.getElementById(id).addEventListener('click', function(){
     const heartNumber = parseInt(document.getElementById('heart-count').innerText);
     const newHeartNumber = heartNumber+1;
    document.getElementById('heart-count').innerText = newHeartNumber;
})
}

// Call functionality
// callButton('call-btn');
// callButton('call-btn1');
// callButton('call-btn2');
// callButton('call-btn3');
// callButton('call-btn4');
// callButton('call-btn5');
// callButton('call-btn6');
// callButton('call-btn7');
// callButton('call-btn8');

// heart funtionality
heartButton('heart-btn');
heartButton('heart-btn1');
heartButton('heart-btn2');
heartButton('heart-btn4');
heartButton('heart-btn5');
heartButton('heart-btn6');
heartButton('heart-btn7');
heartButton('heart-btn8');
heartButton('heart-btn3');

// call history functionality


// check

 document.getElementById('call-btn').addEventListener('click', function(){

    const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
    
    const data = {
        //    
        head: 'National Emergency Number',
        number:'999',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }




})



 document.getElementById('call-btn1').addEventListener('click', function(){
    const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;

    const data = {
        //    
        head: 'Police Helpline Number',
        number:'999',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }




})


document.getElementById('call-btn2').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Fire Service Number',
        number:'999',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})

 
document.getElementById('call-btn3').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Ambulance Service',
        number:'1994-999999',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})
document.getElementById('call-btn4').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Women and Child Helpline',
        number:'109',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})
document.getElementById('call-btn5').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Anti-Corruption Helpline',
        number:'106',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})
document.getElementById('call-btn6').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Electricity Helpline',
        number:'16216',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})
document.getElementById('call-btn7').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'Brac Helpline',
        number:'16445',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})
document.getElementById('call-btn8').addEventListener('click', function(){
     const callCoin = parseInt(document.getElementById('call-coin').innerText);
    
    const fixedCoin = 20;
    let newCoin;
    if(callCoin>=fixedCoin){
        alert('you can call');
        newCoin = callCoin - fixedCoin;
    }
    else{
        alert('you do not have sufficient coin!');
        newCoin = callCoin;
        return;
    }
    document.getElementById('call-coin').innerText = newCoin;
   
    const data = {
        //    
        head: 'bangladesh Railway Helpline',
        number:'163',
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
    console.log(callData);
    
    const historyPart = document.getElementById('history-part') 
    historyPart.innerText = '';
      for(const data of callData){
        const div = document.createElement('div')
        div.innerHTML = `
               <div  class="history-card w-[350px] h-[50px] mx-auto mt-3 flex justify-between bg-[#FAFAFA] p-1">
                  <div>
                     <p class="font-semibold">${data.head}</p>
                     <p class="text-[#5C5C5C]">${data.number}</p>
                  </div>

                   <div class="flex justify-center items-center">
                     <p>${data.date}</p>
                   </div>

               </div>

        `

        historyPart.appendChild(div);
      }
})

