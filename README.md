# अभिषेक का शुभ विवाह

वर पक्ष की ओर से अभिषेक एवं कंचन के 03 जुलाई 2026 के शुभ विवाह का responsive
हिंदी digital invitation। इसमें wedding countdown, Google Maps venue link,
Motion animations और music control शामिल हैं।

यह केवल शुभ विवाह के समारोह पर केंद्रित variant है और बारात का event
`बारात प्रस्थान` के रूप में प्रदर्शित होता है।

## Local development

```bash
npm install
npm run dev
```

फिर `http://localhost:3000` खोलें।

## Deployment

`main` branch पर push होने के बाद GitHub Actions static export को GitHub Pages
पर deploy करता है:

https://abhi4006.github.io/abhishek-wedding/

## Main files

- `app/page.tsx` — वर पक्ष का wedding-only invitation
- `app/globals.css` — responsive card styling
- `components/wedding-countdown.tsx` — live wedding countdown
- `.github/workflows/deploy.yml` — GitHub Pages deployment
