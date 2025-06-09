export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Heebo, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>הדף לא נמצא</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        הדף שחיפשת לא קיים או הועבר למקום אחר
      </p>
      <a 
        href="/" 
        style={{
          padding: '12px 24px',
          backgroundColor: 'white',
          color: '#667eea',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'all 0.3s ease'
        }}
      >
        חזרה לדף הבית
      </a>
    </div>
  )
} 