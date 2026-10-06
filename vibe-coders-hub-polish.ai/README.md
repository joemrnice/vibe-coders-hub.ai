# Vibe Coders Hub — Jednostronicowa witryna społecznościowa

> **Mantra:** Dobre wibracje. Czysty kod. Nieograniczony wpływ.

Witamy w oficjalnym repozytorium **Vibe Coders Hub** — wyjątkowym, jednostronicowym centrum społeczności dla twórców korzystających ze sztucznej inteligencji, inżynierów promptów i twórców oprogramowania.

---

## 🌟 Przegląd i założenia projektowe

Vibe Coders Hub to wysokowydajna, statyczna witryna projektowana przede wszystkim z myślą o trybie ciemnym, stworzona specjalnie z myślą o bezproblemowym hostingu na platformie **GitHub Pages**.

### Najważniejsze cechy architektury:
- **Brak ciężkich frameworków:** Czysty HTML5, nowoczesny CSS3 (własne właściwości i CSS Grid) oraz czysty JavaScript ES6.
- **Integracja z Formspree:** W pełni skonfigurowany formularz kontaktowy do przetwarzania wiadomości na statycznej stronie, bez konieczności korzystania z własnego backendu lub serwera Node.
- **Responsywność i dostępność:** Witryna została dokładnie przetestowana na ekranach o rozmiarach od 320px do ponad 1920px, z obsługą nawigacji klawiaturą, widocznymi wskaźnikami fokusu, punktami orientacyjnymi ARIA oraz `@media (prefers-reduced-motion)`.
- **Mikrointerakcje:** Interaktywny symulator terminala w sekcji głównej, aktywne śledzenie przewijania oraz animowane pojawianie się kart podczas przewijania z użyciem `IntersectionObserver`.

---

## 📂 Struktura projektu

```text
/
├── index.html                  # Główny dokument jednostronicowy
├── README.md                   # Dokumentacja i instrukcje konfiguracji
├── assets/
│   ├── favicon/
│   │   └── favicon.svg        # Niestandardowa wektorowa ikona VC
│   └── images/
│       └── coders.jpg         # Grafika banera społeczności
├── css/
│   └── style.css              # Własne zmienne CSS, układy siatki i glassmorphism
└── js/
   └── script.js              # Moduły czystego JS (nawigacja, Formspree, animacje)
```

---

## 📩 Instrukcja konfiguracji Formspree

Formularz kontaktowy w pliku `index.html` korzysta z usługi [Formspree](https://formspree.io), aby dostarczać wiadomości odwiedzających bezpośrednio do Twojej skrzynki odbiorczej, bez infrastruktury serwerowej.

### Krok 1: Utwórz endpoint Formspree
1. Zarejestruj się lub zaloguj do usługi [Formspree](https://formspree.io).
2. Kliknij **„New Form”** i wpisz `Vibe Coders Hub Contact`.
3. Skopiuj unikalny identyfikator formularza Formspree (np. `f/xpwaokld` lub `xpwaokld`).

### Krok 2: Zaktualizuj `index.html`
Otwórz plik `index.html` i znajdź wiersz 324 (lub wyszukaj `YOUR_FORM_ID`):

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

Zastąp `YOUR_FORM_ID` rzeczywistym identyfikatorem Formspree:

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/xpwaokld" method="POST" novalidate>
```

> **Uwaga:** JavaScript w pliku `js/script.js` korzysta ze stopniowego ulepszania. Jeśli JavaScript jest włączony, formularz zostanie wysłany asynchronicznie przez AJAX, a status będzie prezentowany w płynny sposób. Jeśli JavaScript jest wyłączony, jako rozwiązanie zapasowe zostanie użyte natywne wysłanie formularza HTML metodą POST do Formspree.

---

## 🚀 Instrukcja wdrażania na GitHub Pages

Wykonaj poniższe proste kroki, aby wdrożyć tę witrynę na GitHub Pages:

1. **Utwórz repozytorium GitHub:**
   - Przejdź do strony [Nowe repozytorium GitHub](https://github.com/new).
   - Nadaj nazwę repozytorium (np. `vibe-coders-hub`).
   - Pozostaw je publiczne i nie inicjalizuj go domyślnym plikiem README, jeśli masz już te pliki lokalnie.

2. **Prześlij pliki projektu:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Vibe Coders Hub website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vibe-coders-hub.git
   git push -u origin main
   ```

3. **Skonfiguruj GitHub Pages:**
   - Przejdź do swojego repozytorium na GitHubie.
   - Kliknij **Settings** > **Pages** (w sekcji Code and automation).
   - W sekcji **Build and deployment** > **Source** wybierz **Deploy from a branch**.
   - Wybierz gałąź `main` oraz folder `/ (root)`.
   - Kliknij **Save**.

4. **Otwórz opublikowaną witrynę:**
   - Po 1–2 minutach GitHub wygeneruje adres URL witryny:
     `https://YOUR_USERNAME.github.io/vibe-coders-hub/`

---

## 🧪 Lokalny rozwój i weryfikacja

Aby uruchomić witrynę lokalnie i wyświetlić jej podgląd bez narzędzi do budowania:

Użyj wbudowanego serwera HTTP języka Python 3:
```bash
python3 -m http.server 8000
```
Następnie otwórz w przeglądarce adres `http://localhost:8000`.

---

## 📄 Licencja

&copy; Vibe Coders Hub. Wszelkie prawa zastrzeżone. Projekt jest otwarty na dostosowywanie i wdrażanie przez społeczność.
