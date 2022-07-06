const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[name="email"]');
const inputPassEl = document.querySelector('[name="password"]');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password}, 
    } = event.currentTarget;
    
    if (inputEmailEl.value === "" || inputPassEl.value === "") {
        return alert('Please fill in all fields!');
    }
        
    console.log(`{Name: ${email.value},Password: ${password.value}}`);
    event.currentTarget.reset();
}
