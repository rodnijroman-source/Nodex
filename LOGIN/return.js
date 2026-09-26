const SUPABASE_URL = 'https://iovgtptfmkrdfqyifsru.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cklQ2YCM-Pq14ySFn8gQWQ_batNePIi';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

supabaseClient.auth.onAuthStateChange((event, session) => {});

const finishBtn = document.getElementById('finish-btn');

finishBtn.addEventListener('click', () => {
    window.location.href = '/MAIN/main.html';
});