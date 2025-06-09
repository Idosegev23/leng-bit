'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    monthlySupport: false
  })
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmissionStatus('submitting')
    
    try {
      const response = await fetch('/api/send-approval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmissionStatus('success')
        setFormData({ name: '', phone: '', email: '', notes: '', monthlySupport: false })
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
      console.error('שגיאה בשליחה:', error)
      setSubmissionStatus('error')
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div style={{ fontFamily: 'Heebo, Arial, sans-serif', color: '#0D0D0D', lineHeight: '1.6' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #3B82F6, #1E40AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            לנג ביט
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
            <a href="#home" style={{ color: '#3B82F6', textDecoration: 'none' }}>בית</a>
            <a href="#proposal" style={{ color: '#3B82F6', textDecoration: 'none' }}>ההצעה</a>
            <a href="#process" style={{ color: '#3B82F6', textDecoration: 'none' }}>תהליך העבודה</a>
            <a href="#contact" style={{ color: '#3B82F6', textDecoration: 'none' }}>צור קשר</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            marginBottom: '1rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #fff, #e0e7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            הצעת מחיר להקמת נוכחות דיגיטלית
          </h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginBottom: '1rem', opacity: 0.9 }}>
            לנג ביט – סוכנות לביטוח פנסיוני ופיננסים
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>עבור: אורטל לנג</p>
          <a 
            href="#contact" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            מעוניינת להתקדם להצעה
          </a>
        </div>
      </section>

      {/* פירוט הצעת המחיר */}
      <section id="proposal" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            פירוט הצעת המחיר
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* אתר תדמית */}
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid #e0f2fe',
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', 
                color: 'white', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
                אתר תדמית – 6 עמודים
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
                5,000 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ עיצוב מותאם אישית</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ רספונסיביות מלאה</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ טופס לידים</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ קישור לוואטסאפ</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ התאמה מלאה לתקן נגישות ישראלי AA</li>
              </ul>
            </div>

            {/* דף נחיתה */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid #dcfce7',
              boxShadow: '0 10px 40px rgba(16, 185, 129, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', 
                color: 'white', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                📱
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
                דף נחיתה
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
                1,500 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ מותאם לרשתות חברתיות</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ טופס לידים + וואטסאפ</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ עיצוב ממוקד לנייד</li>
              </ul>
            </div>

            {/* פלייר להדפסה */}
            <div style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid #fef3c7',
              boxShadow: '0 10px 40px rgba(245, 158, 11, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', 
                color: 'white', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                🖨️
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
                פלייר להדפסה
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
                800 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ תבנית PowerPoint</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ ניתנת לעריכה</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ כולל QR קוד</li>
              </ul>
            </div>

            {/* תמיכה חודשית */}
            <div style={{
              background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid #f3e8ff',
              boxShadow: '0 10px 40px rgba(139, 92, 246, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '16px', 
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', 
                color: 'white', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                🔄
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
                תמיכה חודשית (אופציונלית)
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
                300 ש״ח/חודש
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ עדכונים שוטפים</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ תיקונים</li>
                <li style={{ padding: '0.25rem 0', color: '#475569' }}>✓ מענה טכני</li>
              </ul>
            </div>
          </div>

          {/* יצירת חומרים */}
          <div style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid #3B82F6',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '16px', 
              background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', 
              color: 'white', 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              ✍️
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
              יצירת חומרים
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem' }}>
              במידה ואין חומרים קיימים (תמונות, טקסטים, כותרות) – יסופקו ללא תוספת תשלום
            </p>
          </div>
        </div>
      </section>

      {/* טבלת סיכום עלויות */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            סיכום עלויות
          </h2>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'right', borderBottom: '2px solid #e5e7eb', fontWeight: '600' }}>רכיב</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', fontWeight: '600' }}>עלות לפני מע״מ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6' }}>אתר תדמית (6 עמודים)</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', fontWeight: '600' }}>5,000 ש״ח</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6' }}>דף נחיתה</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', fontWeight: '600' }}>1,500 ש״ח</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6' }}>פלייר להדפסה</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', fontWeight: '600' }}>800 ש״ח</td>
                </tr>
                <tr style={{ backgroundColor: '#f0f9ff' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}>סה״כ חד־פעמי</td>
                  <td style={{ padding: '1rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#3B82F6' }}>7,300 ש״ח</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }}>תמיכה חודשית (אופציונלית)</td>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>300 ש״ח / חודש</td>
                </tr>
              </tbody>
            </table>
            
            <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: '500', color: '#dc2626' }}>
              * המחירים אינם כוללים מע״מ
            </p>
          </div>
        </div>
      </section>

      {/* טופס אישור הצעה */}
      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            אישור הצעה
          </h2>
          
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>שם מלא *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>טלפון *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>אימייל *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>הערות נוספות</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="כל הערה או בקשה מיוחדת..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="monthlySupport"
                    checked={formData.monthlySupport}
                    onChange={handleInputChange}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <span>האם את מעוניינת במסלול הליווי החודשי?</span>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={submissionStatus === 'submitting'}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  backgroundColor: submissionStatus === 'submitting' ? '#9CA3AF' : '#3B82F6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: submissionStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {submissionStatus === 'submitting' ? 'שולח...' : 'מאשרת את ההצעה'}
              </button>
              
              {submissionStatus === 'success' && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  תודה! ההצעה נשלחה בהצלחה. נחזור אליך בהקדם האפשרי.
                </div>
              )}
              
              {submissionStatus === 'error' && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#fee2e2',
                  color: '#991b1b',
                  borderRadius: '10px'
                }}>
                  <strong>שגיאה בשליחה!</strong><br/>
                  הטופס נשמר אבל המייל לא נשלח (דורש הגדרת שרת מייל).<br/>
                  <strong>אנא צרי קשר ישירות בוואטסאפ:</strong> <a href="https://wa.me/972547667775" style={{color: '#25D366', textDecoration: 'underline'}}>054-766-7775</a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p>© כל הזכויות שמורות | עיצוב ופיתוח: <a href="https://triroars.co.il" target="_blank" rel="noopener noreferrer" style={{color: '#3B82F6', textDecoration: 'none'}}>TriRoars</a></p>
      </footer>

      {/* כפתור וואטסאפ */}
      <a
        href="https://wa.me/972547667775"
        target="_blank"
        rel="noopener noreferrer"
        title="צרו קשר בוואטסאפ"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        💬
      </a>
    </div>
  )
} 