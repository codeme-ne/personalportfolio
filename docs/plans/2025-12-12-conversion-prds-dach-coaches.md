# Conversion + Coach-Automation Showcases — Checklists, PRDs, DSGVO (DACH, Dez 2025)

> **For Claude:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Mehr qualifizierte Anfragen von Coaches/Trainern/Beratern (DACH) durch klarere Use-Cases, weniger Friktion im Kontakt, stärkere Trust-Signale und 2–3 coach-spezifische Showcase-Projekte mit schnell demonstrierbarem ROI.

**Architecture (für Umsetzung):** Next.js App Router (dieses Repo) bleibt „Marketing/Case Study Hub“. Showcases werden als (a) kleine Live-Demos im Portfolio oder (b) als Case Studies + GitHub-Repos umgesetzt.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind, MDX, Vercel.

---

## Research Snapshot: größte Painpoints (DACH, Stand Dez 2025)

**Coaches/Trainer/Berater (Business-Coaching):**

- **KI wird selten im Coaching-Prozess genutzt** (häufiger in Vor-/Nachbereitung) → Bedarf an _„sicheren“, klar begrenzten_ Workflows mit Datenschutz/Vertraulichkeit. Quelle: RAUEN Coaching-Marktanalyse 2024 (Kap. 4.6, Nutzung von KI).
- **Marketing/Weiterempfehlungen sind zentral** → Trust-Signale (Referenzen, konkrete Outcomes, klare Spezialisierung) entscheiden. Quelle: RAUEN Coaching-Marktanalyse 2024 (Marketingmaßnahmen/Empfehlungen).
- **Abbrüche passieren** u.a. durch Zeitmangel, Budget, fehlende Passung oder veränderte Situation → bessere Intake/Erwartungsmanagement/Follow-ups reduzieren Leaks. Quelle: RAUEN Coaching-Marktanalyse 2024 (Abbruchgründe).

**Generell Selbständige (DACH/DE-lastig):**

- **Bürokratie/Compliance + administrative Last** bleibt ein Dauerthema (inkl. Rechnungen, Dokumentation, Prozesse). (Mehrere Branchenquellen; siehe auch E‑Rechnung unten.)
- **E‑Rechnung (B2B) seit 01.01.2025 verpflichtend**: PDF ≠ E‑Rechnung; Empfang/Verarbeitung muss möglich sein → Umstellung/Automatisierung ist ein echter „Pflicht“-Painpoint. Quelle: IHK Köln, „Die neue E‑Rechnung ab 2025“.
- **KI-Nutzung verbreitet, aber oft als „Textproduktion“ statt Prozessautomatisierung** → große Lücke zwischen Tool-Nutzung und End-to-End-Automation. Quelle: Freelancer‑Kompass 2025 (freelancermap; Nutzung KI‑Tools/Anwendungsfelder).

**Regulatorischer Kontext für KI (EU):**

- EU AI Act ist in Kraft (Einführung seit 2024; abgestufte Anwendbarkeit/Fristen) → in Kundengesprächen „AI‑Compliance“ als Trust-Asset nutzen. Quelle: EU AI Act Timeline (z.B. Future of Privacy Forum, 2025 Update).

> Hinweis: Das ist keine Rechtsberatung. Bei echten Kundenprojekten: juristische Prüfung + AV-Verträge/Datenschutz-Folgenabschätzung (falls nötig).

---

## 1) Website: Priorisierte Checkliste (basierend auf Bewertung)

### P0 (≤ 1 Stunde) — Conversion-Bremsen entfernen

- [ ] **CTA-Anker fixen:** `Hero` verlinkt aktuell auf `#kontakt`, die Sektion ist `#contact`. Entscheide dich für **eine** ID (empfohlen: `#kontakt` für DE) und passe an.
- [ ] **Kontakt-CTA vereinheitlichen:** Primary CTA (Hero + Services + Footer) führt zu _einem_ klaren nächsten Schritt (Formular oder Terminlink).
- [ ] **Proof Strip „umdrehen“:** Tech-Links (GitHub) weniger prominent; stattdessen „Ergebnisse/Outcomes“ in den Vordergrund (z.B. 3 messbare Effekte aus `src/content/claims.json`).

### P1 (½–1 Tag) — Trust & Klarheit

- [ ] **Use-Case-Sektion ergänzen (Coach-spezifisch):** 6–8 Kacheln, z.B. Terminbuchung, Lead-Qualifizierung, Onboarding, Follow-ups, Content-Repurposing, CRM/Notizen, Rechnungs-Workflow, Kurs-Delivery.
- [ ] **„So läuft’s ab“-Sektion:** 3 Schritte (System‑Check → Sprint → Übergabe/Support) + erwartete Inputs/Outputs.
- [ ] **FAQ-Sektion:** Datenschutz, Datenfluss, „Was passiert mit Kundendaten?“, „Kann das on‑prem/EU‑only laufen?“, Kostenrahmen, typische Dauer.

### P2 (1–2 Tage) — Lead Intake (kurzes Formular)

- [ ] **Kurzes Formular statt nur Mail/LinkedIn** (siehe Abschnitt 5) + automatisches Follow-up (Bestätigung + nächste Schritte).
- [ ] **Lead-Qualifizierung:** Routing in 3 Schienen (System‑Check, Sprint, „Noch unklar“) basierend auf Antworten.

### P3 (1–2 Wochen) — Showcases, die Coaches wirklich kaufen

- [ ] **2–3 coach-spezifische Showcase-Projekte** (PRDs unten) als Case Study + optional Live‑Demo.
- [ ] **Datenschutz/Compliance sichtbar machen:** „Privacy by design“-Abschnitt pro Case Study (welche Daten, wo verarbeitet, Löschkonzept).

### Umsetzung (Repo-Tasks, damit es wirklich „abgehakt“ wird)

**Task W0: CTA-Anker fixen (P0)**

- Files:
  - Modify: `src/components/hero.tsx`
  - Modify: `src/components/contact.tsx`
- Steps:
  - Entscheide dich für `#kontakt` **oder** `#contact` (empfohlen: `#kontakt`) und passe Link + Section-ID an.
- Verify:
  - Run: `npm run build`
  - Manual: „Projekt anfragen“ scrollt sauber zur Kontaktsektion.

**Task W1: Use-Cases sichtbar machen (P1)**

- Files:
  - Add: `src/content/use-cases.ts` (Daten: Titel, 1 Satz, Icon-Key)
  - Add: `src/components/use-cases.tsx` (Grid)
  - Modify: `src/app/page.tsx` (zwischen `Services` und `About` einfügen)
- Verify:
  - Manual: Use-Cases sind über dem Fold/nahe Services sichtbar, mobil ok.

**Task W2: „So läuft’s ab“ + FAQ (P1)**

- Files:
  - Add: `src/components/process.tsx`
  - Add: `src/components/faq.tsx`
  - Add: `src/content/faq.ts`
  - Modify: `src/app/page.tsx`
- Verify:
  - Manual: FAQ beantwortet Datenschutz/KI-Fragen ohne Floskeln.

**Task W3: Kontakt als Formular (P2)**

- Implementiere nach Projekt A (Form + API route) und ersetze reine Mail/LinkedIn-Buttons durch „Formular + Alternativen“.
- Verify:
  - Run: `npm run lint && npm run format:check && npm run build`
  - Manual: Submit funktioniert, E‑Mail kommt an, Double-submits verhindert.

---

## 2) Painpoints → Lösungsmuster (Mapping)

| Painpoint (Coach)                       | Typischer „Moment“                       | Schnell umsetzbarer Mehrwert                           | Showcase-Idee |
| --------------------------------------- | ---------------------------------------- | ------------------------------------------------------ | ------------- |
| Leads sind unqualifiziert / kosten Zeit | Anfrage kommt per Mail „Was kostet das?“ | Intake + automatische Vorqualifizierung + Call-Booking | Projekt A     |
| No-shows / schlechte Vorbereitung       | Termin steht, Infos fehlen               | Intake + Agenda + Reminder                             | Projekt A/B   |
| Dokumentation/Follow-up frisst Zeit     | Nach Session: Notes, Aufgaben, Mail      | Notes → Summary → Aufgaben → Follow-up                 | Projekt B     |
| Content-Marketing inkonsistent          | „Ich müsste posten…“                     | 1 Input → 5 Outputs + Plan                             | Projekt C     |
| Datenschutz-Angst bei KI                | „Darf ich das?“                          | EU-only Optionen + klare Datenflüsse + Defaults        | alle          |

| Painpoint (Selbständig)       | Schnell umsetzbarer Mehrwert                      | Showcase-Idee        |
| ----------------------------- | ------------------------------------------------- | -------------------- |
| E‑Rechnung Umstellung / Chaos | E‑Rechnung Intake + Extraktion + Ablage           | Projekt D (optional) |
| Admin/Bürokratie              | Automatisierte Dokumentation + Ablage + Templates | Projekt D (optional) |

---

## 3) PRD: Projekt A — Lead Intake Router + Booking (für Coaches)

**One-liner:** Ein kurzes Formular qualifiziert Anfragen, erstellt automatisch eine saubere Gesprächsgrundlage und führt zum passenden nächsten Schritt (Termin / E‑Mail / System‑Check).

### Zielgruppe

- Solo-Coaches/Trainer/Berater (DACH), die 1:1, Pakete oder Inhouse-Trainings verkaufen.

### Problem

- Leads kommen unstrukturiert; Erstgespräche werden zu „kostenlosen Beratungssessions“; zu viel Hin‑und‑Her.

### Goals (MVP)

- Reduziert Zeit bis zum Erstgespräch.
- Erhöht Quote „qualifizierte Anfrage → Termin“.
- Standardisiert Inputs (Ziel, Kontext, Tools, Datenschutz‑Level).

### Non-goals

- Kein vollwertiges CRM, keine Zahlungsabwicklung.

### User Stories

- Als Coach will ich pro Anfrage **in 60 Sekunden** sehen: _Problem, Ziel, Dringlichkeit, Budgetrange, Daten-Sensitivität_.
- Als Coach will ich automatisch eine **Bestätigungs-Mail** mit nächsten Schritten senden.
- Als Interessent will ich ohne Reibung einen **Termin** buchen oder eine klare Alternative erhalten.

### Functional Requirements

- Formular mit 6–8 Feldern (siehe Abschnitt 5).
- Lead-Routing-Regeln (z.B. „dringend + klar + Budget ok“ → Booking).
- Automatischer Lead-Report (E‑Mail an dich + optional Notion/Google Sheet).
- Auto-Reply an Interessent (mit Erwartungsmanagement + Datenschutz-Hinweis).

### Success Metrics

- +X% „Formular abgeschlossen“ (Conversion).
- +X% „Anfrage → Termin“.
- -X% Zeit pro Lead (Selbsteinschätzung).

### Privacy/DSGVO (MVP Defaults)

- Datenminimierung: **keine** sensiblen Klientendaten abfragen; Hinweis im Formular.
- Speicherung: optional (Standard: E‑Mail only; keine DB), Retention z.B. 90 Tage.
- Auftragsverarbeitung: falls Tools wie Notion/CRM genutzt werden → AV-Vertrag prüfen.

### Umsetzung (Repo-Plan, klein & iterativ)

**Files (vorschlag):**

- Modify: `src/components/contact.tsx` (Formular statt nur Buttons)
- Add: `src/components/lead-form.tsx`
- Add: `src/app/api/lead/route.ts` (Form submit)
- Modify: `.env.example` (z.B. `LEAD_NOTIFY_EMAIL=...`, Provider Keys)
- Modify: `src/app/datenschutz/page.tsx` (Kontaktformular + Speicherfristen + Empfänger)

**Verification:**

- Run: `npm run lint && npm run format:check && npm run build`
- Manual: Form submit → E‑Mail kommt an; Spam/Validation OK.

---

## 4) PRD: Projekt B — Session Notes → Summary → Aufgaben → Follow-up (Privacy-first)

**One-liner:** Aus Notizen/Transkript entsteht automatisch ein sauberer Coaching‑Summary, nächste Schritte und eine Follow-up Mail (ohne dass Client-Daten „wild“ in Tools landen).

### Zielgruppe

- Coaches, die Sessions dokumentieren müssen/wollen (Qualität, Kundenbindung, Nachbereitung).

### Problem

- Nachbereitung kostet Zeit; To-dos gehen verloren; Klienten setzen weniger um → Outcome sinkt.

### MVP Scope

- Input: Freitext-Notizen (oder anonymisiertes Transkript).
- Output: 1) Summary, 2) Action Steps, 3) Follow-up Draft, 4) nächste Session Agenda.

### Requirements (Privacy)

- „Sensitive Mode“ Toggle: Standard ON → Pseudonymisierung + kein Speichern.
- EU/CH Hosting-Optionen dokumentieren; klare Provider-Auswahl.
- Optional: lokales Modell (wenn praktikabel) oder „kein LLM“ Modus (Template-only).

### Success Metrics

- -30–50% Nachbereitungszeit (Selbstauskunft).
- höhere „Homework completion“ (Proxy: Check-in-Quote).

### Umsetzungsidee (schnell demo-fähig)

- Als **Demo**: Tool nimmt Beispiel-Notizen (nicht echt) und zeigt Output + „Datenfluss“-Karte.
- Als **Produktiv**: Export nach Notion/Google Doc + E‑Mail Draft.

### Umsetzung (Repo-Plan, demo-first)

**MVP-Prinzip:** Ohne API-Key läuft das Tool im „Demo Mode“ mit Beispielinput/-output (kein Risiko, kein Setup). Mit Key wird Live-Generation aktiviert.

**Files (Vorschlag):**

- Add: `src/app/werkzeuge/session-summary/page.tsx` (UI: Input, Toggle „Sensitive Mode“, Output Panels)
- Add: `src/app/api/tools/session-summary/route.ts` (POST → liefert JSON Output)
- Add: `src/lib/redact.ts` (Pseudonymisierung/Redaction Helpers)
- Add: `src/lib/llm.ts` (Provider Wrapper; optional)
- Modify: `.env.example` (z.B. `LLM_PROVIDER=...`, `OPENAI_API_KEY=...`/`ANTHROPIC_API_KEY=...`)
- Add: `src/content/projects/coach-session-summary.mdx` (Case Study: Problem/Lösung/Ergebnis + Datenschutz-Abschnitt)
- Modify: `src/content/projects.ts` (Projekt aufnehmen, `featured: false` reicht)

**Verification:**

- Run: `npm run build`
- Manual:
  - Demo Mode: ohne Env-Keys → Beispieloutput erscheint.
  - Live Mode: mit Key → Output wird generiert, aber **nichts** persistiert.

---

## 5) PRD: Projekt C — Content Repurposing „Coach Content Engine“ (DACH)

**One-liner:** Ein Input (z.B. Workshop-Notizen) → LinkedIn Post, Newsletter, Website-FAQ, Short Script für Reel + 4‑Wochen Plan.

### Warum das passt (DACH 2025)

- Marketing ist stark empfehlungsgetrieben; regelmäßiger Output unterstützt Sichtbarkeit, ohne „Content-Mühle“.
- KI wird häufig für Text genutzt, aber selten als wiederholbarer Workflow → genau hier hebelt Automatisierung.

### MVP

- Templates für 3 Positionierungen (Business-Coach, Health/Stress, Sales/Marketing).
- Output-Formate: LinkedIn, Newsletter, Landingpage-Abschnitt, CTA.
- Guardrails: „keine erfundenen Claims“, Quellen/Belege, Tonalität „seriös“.

### Bonus (wenn du’s zeigen willst)

- „Vorher/Nachher“ Demo: Rohtext → 3 Post-Varianten + Feedback-Schleife.

### Umsetzung (Repo-Plan, demo-first)

**Files (Vorschlag):**

- Add: `src/app/werkzeuge/content-engine/page.tsx` (UI: Input + Zielgruppe + Ton + Output Tabs)
- Add: `src/app/api/tools/content-engine/route.ts` (POST → Multi-output JSON)
- Add: `src/content/content-engine/templates.ts` (Prompt-/Template-Bausteine, keine echten Kundendaten)
- Add: `src/content/projects/coach-content-engine.mdx`
- Modify: `src/content/projects.ts`
- Modify: `src/app/datenschutz/page.tsx` (Tool-Hinweis: keine Klientendaten; optional LLM-Provider)

**Verification:**

- Run: `npm run build`
- Manual: Demo Mode ohne Key funktioniert; Live Mode optional.

---

## (Optional) PRD: Projekt D — E‑Rechnung Inbox & Ablage (für Selbständige)

**One-liner:** Eingehende E‑Rechnungen (XRechnung/ZUGFeRD) werden automatisch erfasst, klassifiziert und revisionssicher abgelegt; Metadaten landen strukturiert in einer Liste (für Steuerberater/Tool).

### MVP Scope

- Input: Upload einer XML (XRechnung) oder PDF+XML (ZUGFeRD).
- Output: Extrahierte Kerndaten (Rechnungssteller, Betrag, Datum, USt-ID, Leistungszeitraum) + Ablagepfad.
- Optional: Weiterleitung an Buchhaltungstool/Steuerberater per E‑Mail.

### Umsetzung (Repo-Plan, schlank)

- Option A (Web-Demo): `src/app/werkzeuge/e-rechnung/page.tsx` + `src/app/api/tools/e-rechnung/route.ts`
- Option B (CLI-Demo): `automation/e-rechnung/` (Node CLI, parses XML, schreibt JSON)
- Verification: `npm run build` (Web) bzw. `node automation/e-rechnung ...` (CLI)

---

## 6) DSGVO/Datenschutz: Checkliste für Website + Automationen

### Website (Portfolio)

- [ ] Kontaktformular in Datenschutzerklärung abbilden (Zweck, Rechtsgrundlage, Speicherfrist, Empfänger).
- [ ] **Keine** unnötigen Tracker/Cookies; wenn doch: Consent + Auftragsverarbeiter + Drittlandtransfer klären.
- [ ] Vercel Hosting/Logs erwähnen (Server-Logs, IP, Zweck, Fristen).

### Kundenprojekte (Coaching-Automationen)

- [ ] Datenklassifizierung: enthält der Prozess **besondere Kategorien** (Gesundheit, Therapie‑Nähe)? → ggf. explizite Einwilligung/DSFA.
- [ ] Rollen klären: du als Auftragsverarbeiter? Kunde als Verantwortlicher? AVV/DPA abschließen.
- [ ] Datenminimierung: nur die Felder erheben, die für den Prozess nötig sind.
- [ ] Löschkonzept: standardmäßig kurze Fristen (z.B. 90 Tage) + „Delete on request“.
- [ ] Zugriffsschutz: least privilege, 2FA, Audit-Log (wo möglich).
- [ ] LLM-Provider: Training/Retention/Region prüfen, DPA abschließen, Subprozessoren dokumentieren.
- [ ] Transparenz: „KI wird verwendet“ (wo relevant), inkl. Grenzen (kein Therapieersatz, kein Rechtsrat).

---

## 7) Kurzformular (Brainstorm) — maximal 60–90 Sekunden

**Felder (kurz, aber qualifizierend):**

1. Name
2. E‑Mail
3. Rolle (Coach / Trainer / Berater / Sonstiges)
4. Was willst du automatisieren? (Mehrfachauswahl)
   - Leads & Terminbuchung
   - Onboarding & E‑Mails
   - Content & Marketing
   - Dokumentation & Follow-ups
   - Rechnungen & Admin (E‑Rechnung)
   - „Weiß ich noch nicht“
5. Welche Tools nutzt du heute? (Freitext oder Tags: Google, Microsoft, Notion, HubSpot, Calendly, Lexoffice, sevDesk)
6. Daten-Sensitivität (Low / Medium / High) + Hinweis: „Bitte keine Klientendaten im Formular.“
7. Ziel (Freitext, 1–2 Sätze)

**Microcopy (unter dem Button):**

- „Ich melde mich i.d.R. innerhalb von 24h. Wenn du magst, schick 1–2 Beispiele für typische Aufgaben (ohne sensible Daten).“

**Auto-Reply (E‑Mail):**

- Bestätigung + 3 Fragen (Ziel, wichtigste KPI, Tool-Stack) + Terminlink.

---

## Quellen (für internes Alignment)

- RAUEN Coaching-Marktanalyse 2024 (PDF, frei zitierbar mit Quelle): https://www.rauen.de/_res/2c612a3b7ce8259570ae30b0f1a1f767af6c6846/RAUEN%20Coaching-Marktanalyse%202024-05-16.pdf
- IHK Köln: „Die neue E‑Rechnung ab 2025“: https://www.ihk.de/koeln/hauptnavigation/recht-steuern/recht/die-neue-erechnung-ab-2025-6260168
- Freelancer‑Kompass 2025 (freelancermap; Nutzung für Berichterstattung mit Quelle): https://www.freelancermap.de/images/upload/Freelancer-Kompass-2025.pdf
- EU AI Act Timeline (FPF 2025 Update): https://fpf.org/wp-content/uploads/2025/04/FPF_EU_AI_Act_Timeline_R4_-_2025_Update.pdf
