
const form = document.getElementById('form');
const nameInput = document.getElementById('exampleInputName');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');
const strengthMeter = document.getElementById('strength');
const progressBar = document.getElementById('progress-bar');
const sumbitButton = document.getElementById('submit-button');
const generateButton = document.getElementById('generate-password');
const togglePassword = document.getElementById('toggle-password');

// Toggle Password Visibility short code for password visibility
// togglePassword.addEventListener('change', () => {
//     passwordInput.type = togglePassword.checked ? 'text' : 'password';
// });



passwordInput.addEventListener('input', () => {

    // rules Password Strength Rules Defined
    const rules = [
        {
            regex: /(?=.*[A-Z])/,
            message: 'At least one uppercase letter'
        },
        {
            regex: /(?=.*[a-z])/,
            message: 'At least one lowercase letter'
        },
        {
            regex: /(?=.*\d)/,
            message: 'At least one number'
        },
        {
            regex: /(?=.*[!@#$%^&*])/,
            message: 'At least one special character'
        },
        {
            regex: /^.{8,}$/,
            message: 'At least 8 characters long'
        }
    ];

    let score = 0;

    rules.forEach(rule => {
        if (rule.regex.test(passwordInput.value)) {
            score++;
        }
    });

    progressBar.style.width = `${(score / rules.length) * 100}%`;
    progressBar.textContent = `${(score / rules.length) * 100}%`;
    
});

// Form Submission Event
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Form ko page reload hone se roknay ke liye

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(name, email, password); // Console mai values check karne ke liye
    // apply validation here Password must Bilal@123 and Name must be Bilal and Email must be bilal@gmail.com then open github account
    if (name === 'Bilal' && email === 'bilal@gmail.com' && password === 'Bilal@123') {
        window.open ('https://github.com/iMuhammadbilal', '_blank'); //open github user account  if credentials are correct
        // open github account NEW TAB
    } else {
        alert('Invalid Credentials!'); // if credentials are wrong then show this alert
    }
    });

    // Toggle Password Visibility of else
togglePassword.addEventListener('change', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Password show hoga
    } else {
        passwordInput.type = 'password'; // Password hide hoga
    }
});


// Generate Password Button Event
generateButton.addEventListener('click', () => {
    const newPassword = generateRandomPassword();
    passwordInput.value = newPassword;
});

function generateRandomPassword() {
    const length = 12; // Password ka length
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
        console.log(randomIndex);
        
    }

    return password;
}