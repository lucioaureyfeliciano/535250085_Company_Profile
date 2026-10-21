# Company Profile – Next.js + TypeScript

## Menjalankan
```bash
npm install
npm run dev
```

## Struktur
- `src/app` – route (App Router). `services/[slug]` = dynamic route.
- `src/components/layout` – Navbar, NavLink (active style), Footer
- `src/components/ui` – komponen generik (Button, Container, dll.)
- `src/components/sections` – komponen khusus fitur (ServiceCard, TeamCard, ContactForm)
- `src/data` – data statis; `src/lib` – konstanta/helper; `src/types` – tipe TypeScript

## Aset (ganti file di `public/images`, nama sama)
| File | Ukuran |
|---|---|
| `hero.svg` | 800×600 |
| `about.svg` | 800×600 |
| `services/web-development.svg`, `mobile-app.svg`, `ui-ux-design.svg` | 800×500 |
| `team/member-1..3.svg` | 400×400 (persegi) |

