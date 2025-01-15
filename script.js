const commentForm = document.getElementById("commentForm");
const nameInput1 = document.getElementById("name");
const emailInput1 = document.getElementById("email");
const commentTextarea = document.getElementById("comment");
const commentMessage = document.getElementById("commentMessage");

commentForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name = nameInput1.value;
    const email = emailInput1.value;
    const comment = commentTextarea.value;

    commentMessage.innerHTML = `Thank you, ${name}! your comment has been posted.`;
    console.log(`Thank you, ${name}! Your comment ${comment} has been delivered by this email id ${email} and soon we will be posting it.`);

    nameInput1.value ="";
    emailInput1.value ="";
    commentTextarea.value ="";
});


const contactForm = document.getElementById("contactForm");

function submitForm(){
    var name1 = document.getElementById("name1");
    var email1 = document.getElementById("email1");
    var subject1 = document.getElementById("subject1");
    var message1 = document.getElementById("message1");

    if(name1.value && email1.value.includes("@gmail.com") && subject1.value && message1.value){
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    }else{
        alert("Please fill in all form fields.");
    }
}
