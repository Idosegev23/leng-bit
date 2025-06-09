export default function TestPage() {
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
      textAlign: 'center'
    }}>
      <h1>🎉 App Router עובד!</h1>
      <h2>לנג ביט - דף בדיקה</h2>
      <p>אם אתה רואה את הדף הזה, Next.js App Router עובד בVercel</p>
      <a 
        href="/"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        חזרה לדף הבית
      </a>
    </div>
  )
} 