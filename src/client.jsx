// client.jsx
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tpexhnhpzzgughtdhnid.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZXhobmhwenpndWdodGRobmlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDM5OTYsImV4cCI6MjAyODcxOTk5Nn0.5R0OzmwNhI3VdW_eakOShuIDkyQOfSui_FlvvuWVgz4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
