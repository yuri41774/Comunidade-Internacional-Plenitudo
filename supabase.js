// Configuração inicial do Supabase
// Troque pelos dados do seu projeto Supabase
const SUPABASE_URL = 'https://ksgmhimjuulnveszzvlj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZ21oaW1qdXVsbnZlc3p6dmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyNTU1MjEsImV4cCI6MjA3MjgzMTUyMX0.L19M_5XA9TDHXDESI2VNxBevFqWsNrNJevS5oquYkO0';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Exemplo: Teste de conexão
supabase.from('test_table').select('*').then(({ data, error }) => {
    if (error) {
        console.error('Erro Supabase:', error);
    } else {
        console.log('Dados Supabase:', data);
    }
});
