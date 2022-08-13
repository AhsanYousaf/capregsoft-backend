
const button = document.getElementById('sendButton');
const re = /\S+@\S+\.\S+/;
button.addEventListener("click" , function(e) {
    e.preventDefault();
    const fullNameNull = document.getElementById('fullnameNullCheck');
    const emailCheck = document.getElementById('emailCheck');
    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value; 
    const message = document.getElementById("message").value;
    if(!fullname){
        fullNameNull.innerHTML = "Please Enter Your Fullname";
    }
    else {
        fullNameNull.innerHTML = "";
    }
    if (!email){
        emailCheck.innerHTML = "Please Enter Your Email";
    }
    else if (!re.test(email)){
        emailCheck.innerHTML = "Please Enter Valid Email";
    }
    else{
        emailCheck.innerHTML = "";

    }
    if(!message){
        messageCheck.innerHTML = "Please Send The Message";
    }
    else{
        messageCheck.innerHTML = "";
    }
    if (fullname && re.test(email) && message){
        const body = {
            full_name: fullname,
            email: email,
            user_message: message
        }
        const response = fetch("http://localhost:5000/contactUs",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify(body)
        }).then((response) => {
            if(response.status === 200){
                const confirmationSent = document.getElementById("confirmationSent");
                confirmationSent.innerHTML = "Your Request has been sent successfully, We will reach out to you soon, Thankyou"
            }
        })
    }
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "sundasrani01234@gmail.com",
    //     Password : "fenhic%593",
    //     To : 'usmansaeed90940@gmail.com',
    //     From : "sundasrani01234@gmail.com",
    //     Subject : "email testing",
    //     Body : "hello world"
    // }).then(
    //   message => alert(message)
    // );
        

})

    








