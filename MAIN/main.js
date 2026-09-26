const SUPABASE_URL = 'https://iovgtptfmkrdfqyifsru.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cklQ2YCM-Pq14ySFn8gQWQ_batNePIi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkActiveSession() {
    const {data:{session}} = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = '/LOGIN/login.html';
    }
}

checkActiveSession();

const logOutBtn = document.getElementById('log-out-btn');

if (logOutBtn) {
    logOutBtn.addEventListener('click', async () => {
        const {error} = supabaseClient.auth.signOut();

        if (error) {
            console.error('Failed To Log Out: ', error);
        } else {
            window.location.reload();
        }
    });
}