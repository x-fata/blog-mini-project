import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hvudwgecrtddwghpsqzg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dWR3Z2VjcnRkZHdnaHBzcXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3OTI0MDgsImV4cCI6MjA4MjM2ODQwOH0.U_EmVKbxDv1DFyUFhrVtSd0yOjcIFhy2iGzdU9KOCWQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);