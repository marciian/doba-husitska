# Složka audio/

Sem vlož všechny zvukové soubory hry.

## Formáty
Doporučeno: MP3 + OGG (pro maximální kompatibilitu)
Případně: jen MP3 (funguje ve všech moderních prohlížečích)

## Soubory

### Menu hudba (přehrává se na stránce dílů a postav)
  menu.mp3        ← hlavní ambientní téma
  menu.ogg        ← (volitelná záloha)

### Zvukové stopy kapitol – Štěpán Páleč
  kap-01-palec.mp3    ← zvuková stopa ke kapitole 1
  kap-02-palec.mp3    ← zvuková stopa ke kapitole 2
  kap-03-palec.mp3
  kap-04-palec.mp3
  kap-05-palec.mp3
  kap-06-palec.mp3
  kap-07-palec.mp3
  kap-08-palec.mp3
  kap-09-palec.mp3

### Zvukové stopy kapitol – Petr z Mladoňovic
  kap-01-petr.mp3
  kap-02-petr.mp3
  ... (atd.)

### Zvukové stopy kapitol – Václav z Dubé
  kap-01-vaclav.mp3
  ... (atd.)

### Zvukové stopy kapitol – Jakub Vlček
  kap-01-jakub.mp3
  ... (atd.)

## Nastavení v HTML

### Změna menu hudby (index.html):
  <source src="audio/menu.mp3" type="audio/mpeg">

### Změna zvukové stopy kapitoly (např. palec/kap-01-betlemska-kaple.html):
  <source src="../audio/kap-01-palec.mp3" type="audio/mpeg">

## Tipy
- Pokud soubor neexistuje, přehrávač se automaticky skryje
- Doporučená hlasitost nahrávky: -14 LUFS (streaming standard)
- Délka menu hudby: ideálně 3–5 minut ve smyčce
- Délka kapitol: odpovídá době čtení, cca 5–15 minut
