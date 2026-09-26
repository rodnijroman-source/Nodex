const SUPABASE_URL = 'https://iovgtptfmkrdfqyifsru.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cklQ2YCM-Pq14ySFn8gQWQ_batNePIi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkActiveSession() {
    const {data:{session}} = await supabaseClient.auth.getSession();
    if (session) {
        window.location.href = '/MAIN/main.html';
    }
}

checkActiveSession();

supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session) {
        window.location.href = '/MAIN/main.html';
    }
});