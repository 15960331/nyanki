[nyanki](https://nyanki.net) is a CRUD webapp works with [supabase](https://app.supabase.io/).

## What is nyanki
Nyanki is a webapp for remembering things.
You can make flashcards and check if you remembered them.

## What is different from Anki?
As you can see, this webapp is made after Anki but I wanted it to be easier to edit flashcards.

## for Devs
1. Install Docker and clone this repo.
2. Start docker then code on it. (VSCode + Remote Containers)
3. Create .env.local file at root then set those variables below
  * NEXT_PUBLIC_SUPABASE_URL=XXX
  * NEXT_PUBLIC_SUPABASE_ANON_KEY=XXX
