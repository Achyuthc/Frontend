import {createClient} from '@supabase/supabase-js'


export const supabase=createClient(
    "https://vzymfrzlroqzppzrighn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6eW1mcnpscm9xenBwenJpZ2huIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDkyMzMwMiwiZXhwIjoxOTg2NDk5MzAyfQ.Qgc8_h5LqvMOGYf-nVkr1Gg2xCXaM3hX1i-T5g0jgbs"
)