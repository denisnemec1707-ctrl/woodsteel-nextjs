#!/bin/bash
# Stiahne obrázky + dokumenty z woodsteel.sk do projektu (self-hosting)
# a commitne + pushne. Dvojklik na tento súbor.
cd "$(dirname "$0")"
mkdir -p public/img public/download
B="https://woodsteel.sk/wp-content/uploads"
ok=0; fail=0
dl(){ if curl -fsSL "$1" -o "$2"; then echo "  ok  $2"; ok=$((ok+1)); else echo "  CHYBA $1"; fail=$((fail+1)); fi; }

echo "==> Obrázky -> public/img"
dl "$B/2023/09/woodsteel-weblogo.png"        public/img/woodsteel-weblogo.png
dl "$B/2025/07/zimne_zahrady.jpg"            public/img/zimne_zahrady.jpg
dl "$B/2025/07/pergoly.jpg"                  public/img/pergoly.jpg
dl "$B/2024/11/zasklenie-teras.jpg"          public/img/zasklenie-teras.jpg
dl "$B/2025/09/pristresok-na-auto3.jpg"      public/img/pristresok-na-auto3.jpg
dl "$B/2025/09/pristresok-na-auto.jpg"       public/img/pristresok-na-auto.jpg
dl "$B/2024/10/hlinikova-zimna-zahrada.jpg"  public/img/hlinikova-zimna-zahrada.jpg
dl "$B/2025/01/hlinikova-zimna-zahrada2.jpg" public/img/hlinikova-zimna-zahrada2.jpg
dl "$B/2024/11/drevena-zimna-zahrada5.jpg"   public/img/drevena-zimna-zahrada5.jpg
dl "$B/2024/11/drevena-zimna-zahrada3.jpg"   public/img/drevena-zimna-zahrada3.jpg
dl "$B/2024/11/hlinikova-pergola4.jpg"       public/img/hlinikova-pergola4.jpg
dl "$B/2024/11/hlinikova-pergola3.jpg"       public/img/hlinikova-pergola3.jpg
dl "$B/2024/10/drevena-pergola.jpg"          public/img/drevena-pergola.jpg
dl "$B/2024/11/pergola-drevena3.jpg"         public/img/pergola-drevena3.jpg
dl "$B/2024/11/zimna-zahrada-blog.jpg"       public/img/zimna-zahrada-blog.jpg
dl "$B/2024/10/posuvny-ramovy-system.jpg"    public/img/posuvny-ramovy-system.jpg

echo "==> Dokumenty -> public/download"
dl "https://woodsteel.sk/download/woodsteel-katalog-2025.pdf" public/download/woodsteel-katalog-2025.pdf
dl "https://woodsteel.sk/download/reklamacny-formular.pdf"    public/download/reklamacny-formular.pdf
dl "https://woodsteel.sk/download/reklamacny-formular.docx"   public/download/reklamacny-formular.docx

echo ""
echo "==> Stiahnuté: $ok  | chyby: $fail"
echo "==> Commit + push na GitHub..."
git add -A
git commit -m "Self-host obrazkov + subory na stiahnutie (kriticke #1, #3)"
git push
echo ""
echo "HOTOVO. Vercel automaticky spustí nový build. Napíš Coworkovi 'stiahnuté'."
read -n 1 -s -r -p "Stlač ľubovoľný kláves pre zatvorenie."
