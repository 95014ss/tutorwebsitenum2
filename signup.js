// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value ,
//         emai: document.getElementById("email").value , 
//         message: document.getElementById("age").value
//     };
//     const serviceID = "service_2o2ptvd";
// const templateID = "template_23d2mbc";

// emailjs
//     .send(serviceID,templateID,params)
//     .then(
//         res =>{
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("age").value = "";
//             console.log(res);
//             alert("You have signed up succesfully!");
//         }
//     )
//     .catch((err) => console.log(err));
// }

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("age").value,
    };
  
    const serviceID = "service_2o2ptvd";
    const templateID = "template_23d2mbc";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("age").value = "";
          console.log(res);
          window.open("confirmation.html");
          alert("You Have signed up to CodeCraftAcademy successfully!")
  
      })
      .catch(err=>console.log(err));
  
  }