# Husité – Interaktivní gamebook
## Struktura projektu

```
husitska-hra/
├── index.html          ← hlavní soubor hry
├── README.md           ← tento soubor
└── images/             ← VŠECHNY obrázky patří sem
    │
    │── PŘEHLED DÍLŮ
    ├── dil-1.jpg       ← titulní obrázek Dílu I (Jan Hus s knihou)
    ├── dil-2.jpg       ← titulní obrázek Dílu II (Defenestrace)
    ├── dil-3.jpg       ← titulní obrázek Dílu III (Bitva na Vítkově)
    ├── dil-4.jpg       ← ... atd. pro díly IV–VIII
    │
    │── POSTAVY (výběr postavy + topbar v kapitole)
    ├── jan-hus.jpg             ← kruhový portrét na str. výběru postavy
    ├── stepan-palec.jpg        ← karta postavy + avatar v topbaru
    ├── petr-z-mladonovic.jpg   ← karta postavy + avatar v topbaru
    ├── vaclav-z-dube.jpg       ← karta postavy (zatím zamčená)
    ├── jakub-vlcek.jpg         ← karta postavy (zatím zamčená)
    │
    │── OBRÁZKY KAPITOL (volitelné, nad nebo pod textem)
    ├── kap-1.jpg       ← obrázek ke kapitole 1 (Betlémská kaple)
    ├── kap-2.jpg       ← obrázek ke kapitole 2 (Cesta do Kostnice)
    └── ...             ← atd.
```

## Jak přidat obrázek ke kapitole

V souboru `index.html` najdi sekci kapitoly a odkomentuj příslušný blok:

### Obrázek NAD textem:
```html
<div class="hh-chapter-image">
  <img src="images/kap-1.jpg" alt="Betlémská kaple"/>
  <span class="hh-chapter-image-caption">Betlémská kaple, Praha · léto 1412</span>
</div>
```

### Obrázek POD textem:
```html
<div class="hh-chapter-image below">
  <img src="images/kap-1-spodni.jpg" alt="Popis scény"/>
  <span class="hh-chapter-image-caption">Popis obrázku</span>
</div>
```

## Jak odemknout postavu

V sekci `screen-postavy` najdi kartu postavy a odstraň třídu `locked-char`:
```html
<!-- Zamčená: -->
<div class="hh-char locked-char" onclick="startGame(2)">

<!-- Odemčená: -->
<div class="hh-char" onclick="startGame(2)">
```
Zároveň odstraň element `.hh-char-lock` uvnitř karty.

## Jak odemknout kapitolu v menu

V sekci `screen-kapitola` → `hh-submenu` odstraň třídu `locked`:
```html
<!-- Zamčená: -->
<div class="hh-submenu-item locked"><span class="kap-num">2</span>Cesta do Kostnice</div>

<!-- Odemčená: -->
<div class="hh-submenu-item"><span class="kap-num">2</span>Cesta do Kostnice</div>
```

## Doporučené formáty obrázků
- Díly: JPG, poměr stran 4:3, min. 800×600 px
- Postavy: JPG, poměr stran 3:4 (na výšku), min. 600×800 px
- Kapitoly: JPG, libovolný krajinný formát, min. 1200×600 px
- Jan Hus (kruhový portrét): JPG, čtvercový, min. 400×400 px
