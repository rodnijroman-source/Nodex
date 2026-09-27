const SUPABASE_URL = 'https://iovgtptfmkrdfqyifsru.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cklQ2YCM-Pq14ySFn8gQWQ_batNePIi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const registerForm = document.getElementById('register-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

async function checkActiveSession() {
    const {data:{session}} = await supabaseClient.auth.getSession();
    if (session) {
        window.location.href = '/MAIN/main.html';
    }
}

checkActiveSession();

registerForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;

    const {data, error} = await supabaseClient.auth.signUp({
        email: userEmail,
        password: userPassword,
        options: {
            emailRedirectTo: window.location.origin + '/LOGIN/reg-complete.html',
        }
    })

    if (error) {
        console.error("Register Fail: ", error.message);
        alert("Error: " + error.message);
    } else {
        emailInput.value = '';
        passwordInput.value = '';

        window.location.href = '/LOGIN/login-check.html';
    }
});