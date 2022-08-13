const button = document.getElementById('submitBtn');
button.addEventListener("click" ,async function(e) {
    e.preventDefault();
    const name = document.getElementById('a_name').value;
    const email = document.getElementById('a_email').value;
    const address = document.getElementById("a_address").value;
    const phone_number = document.getElementById("a_phone_number").value; 
    const skills = document.getElementById("a_skills").value;
    const jobs = document.getElementById("a_job").value;
    const interview = document.getElementById("a_interview").value;
    const joining = document.getElementById("a_joining").value;
    const salary = document.getElementById("a_salary").value;
    const experience = document.getElementById("a_experience").value;
    const resume = document.getElementById("a_myfile").files;
    if (name && email && address && phone_number && skills && jobs && interview && joining && salary && experience && resume ){
        const body = {
          name: name,
          email: email,
          address: address,
          phone_number: phone_number,
          experties: experience,
          previous_jobs: jobs,
          joining_date: joining,
          interview_date: interview,
          current_salary: salary,
          experience: experience,
          resume: resume
        }
        const files ={
            //resume: resume
        }
        console.log(body,resume);
        fetch("http://localhost:5000/apply",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify(body),
            //files: (files)
        }).then((response) => {
            if(response.status === 200){
                const applicationSent = document.getElementById("applicationSent");
                applicationSent.innerHTML = "Your Request has been sent successfully, We will reach out to you soon, Thankyou"
                modal.style.display = "none";
                console.log(response);
            }
        })
     }        

})