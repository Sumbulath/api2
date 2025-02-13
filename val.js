const signupForm = document.getElementById("signupForm")
console.log(signupForm, "fgorm");


signupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById("usernameError").innerText = ''
    document.getElementById("emailerror").innerText = ''
    document.getElementById("passwordError").innerText = ''
    document.getElementById("confirmpasswordError").innerText = ''


    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmpassword = signupForm.confirmpassword.value


    const emailRegex = '^[^@]+@[^@]+\.[^@]+$'
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

    let isvalid = true;
    if (username.trim().length < 3) {
        document.getElementById("usernameError").innerText = 'Minimum 3 characters required'
        isvalid = false
    }
    if (!email.match(emailRegex)) {
        document.getElementById("emailerror").innerText = 'Enter a valid email address'
        isvalid = false

    }

    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character'
        isvalid = false

    }

    if (confirmpassword !== password) {
        document.getElementById("confirmpasswordError").innerText = 'Passwords does not match'
        isvalid = false
    }
    if (isvalid) {
        signupForm.submit()
        signupForm.reset()
    }
})



let pwdStatus = false;
const showHidepwd = document.getElementById('icon')

showHidepwd.addEventListener('click', () => {
    pwdStatus = !pwdStatus
    document.getElementById("password").type = pwdStatus ? "text" : "password"
    showHidepwd.innerHTML = pwdStatus ? `<i class="bi bi-eye-slash"></i>` : `<i class="bi bi-eye"></i>`

})



let cpwdStatus = false;
const showHidecpwd = document.getElementById('icn')

showHidecpwd.addEventListener('click', () => {
    cpwdStatus = !cpwdStatus
    console.log(document.getElementById("password"));

    document.getElementById("confirmpassword").type = cpwdStatus ? "text" : "password"
    showHidecpwd.innerHTML = cpwdStatus ? `<i class="bi bi-eye-slash"></i>` : `<i class="bi bi-eye"></i>`

})