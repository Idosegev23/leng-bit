import './globals.css'

export const metadata = {
  title: 'הצעת מחיר | לנג ביט - סוכנות לביטוח פנסיוני ופיננסים',
  description: 'הצעת מחיר מקצועית לבניית נוכחות דיגיטלית עבור אורטל לנג - לנג ביט',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
} 