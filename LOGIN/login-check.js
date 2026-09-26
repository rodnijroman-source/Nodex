const SUPABASE_URL = 'https://iovgtptfmkrdfqyifsru.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cklQ2YCM-Pq14ySFn8gQWQ_batNePIi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const codeInput = document.getElementById('code-input');
const verifyBtn = document.getElementById('verify-btn');

if (verifyBtn) {
    verifyBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const code = codeInput.value.trim();
        const userEmail = localStorage.getItem('savedEmailForLogin');

        const {data:{session}, error} = await supabaseClient.auth.verifyOtp({
            email: userEmail,
            token: code,
            type: 'email'
        });

        if (error) {
            alert('invalid code');
        }
        else if (session) {
            localStorage.removeItem('savedEmailForLogin');
        }
    });
}

supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
        window.location.href = '/LOGIN/return.html';
    }
});