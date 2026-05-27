# Apex Banking Dashboard

A responsive React banking dashboard prototype built with Vite, designed to showcase account management, transfers, transaction history, and personalization settings.

## Project Title

Apex Banking Dashboard

## Features Implemented

- Dashboard overview with total available balance and account summaries
- Account cards for checking, savings, and investment accounts
- Transaction history page with today/yesterday sections and search input
- Transfer funds form with validation and support for internal and external transfers
- Add funds flow with input validation and balance update
- Settings page with profile information, two-factor auth, communication preferences, and logged sessions
- Responsive layout with desktop sidebar and mobile menu
- Animated mobile navigation using GSAP
- Persistent account and transaction state using `localStorage`

## Tools Used

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- GSAP and `@gsap/react`
- ESLint

## Challenges Faced

- Building responsive navigation that adapts between desktop sidebar and mobile slide-out menu.
- Implementing a transfer form with robust validation and user-friendly error/success messaging.
- Keeping account and transaction data synchronized across the dashboard, activity, and transfer screens.
- Persisting data in `localStorage` while ensuring the UI stays reactive and consistent.
- Adding GSAP-powered animation without compromising the simplicity of the routing and layout.

## Conclusion

The Apex Banking Dashboard is a clean, responsive financial UI demo that combines modern React patterns with practical banking features. It is a strong foundation for expanding into a full online banking product with additional account actions, security, and real data integration.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```
