#!/bin/bash
# Dvojklik na tento súbor pushne projekt do GitHub repa woodsteel-nextjs.
# Použije tvoje lokálne git prihlásenie (credential manager / keychain).
cd "$(dirname "$0")"
echo "==> Pracovný priečinok: $(pwd)"
git init -b main 2>/dev/null || git init
git checkout -B main 2>/dev/null
# Nastav git identitu len ak chýba
[ -z "$(git config user.email)" ] && git config user.email "denis.nemec1707@gmail.com"
[ -z "$(git config user.name)" ]  && git config user.name "Denis Nemec"
echo "==> Identita: $(git config user.name) <$(git config user.email)>"
git add -A
echo "==> Pridané súbory:"; git status --short | head -5; echo "   ... spolu $(git status --short | wc -l | tr -d ' ') zmien"
git commit -m "WoodSteel Next.js — SEO-preserving migration"
git remote remove origin 2>/dev/null
git remote add origin https://github.com/denisnemec1707-ctrl/woodsteel-nextjs.git
echo "==> Pushujem na GitHub..."
git push -u origin main
echo ""
echo "==> HOTOVO. Ak vyššie nie je chyba, napíš Coworkovi 'pushnuté'."
read -n 1 -s -r -p "Stlač ľubovoľný kláves pre zatvorenie."
