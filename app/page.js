export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 עובד!</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>לנג ביט - דף נחיתה</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        הפרויקט נפרס בהצלחה ב-Vercel!
      </p>
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        marginBottom: '2rem'
      }}>
        <h3>בדיקות:</h3>
        <p>✅ Next.js App Router</p>
        <p>✅ פונט עברי</p>
        <p>✅ CSS Styling</p>
        <p>✅ Vercel Deployment</p>
      </div>
      <p style={{ fontSize: '1rem', opacity: 0.8 }}>
        עכשיו אנחנו יכולים להחזיר את התוכן המלא...
      </p>
    </div>
  )
} 