'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    monthlySupport: false
  })
  const [submissionStatus, setSubmissionStatus] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <a href="#" className="logo">לנג ביט</a>
          <ul className="nav-links">
            <li><a href="#home">בית</a></li>
            <li><a href="#proposal">ההצעה</a></li>
            <li><a href="#process">תהליך העבודה</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>הצעת מחיר להקמת נוכחות דיגיטלית</h1>
          <h2>לנג ביט – סוכנות לביטוח פנסיוני ופיננסים</h2>
          <p>עבור: אורטל לנג</p>
          <a href="#contact" className="btn btn-primary">מעוניינת להתקדם להצעה</a>
        </div>
      </section>

      {/* פירוט הצעת המחיר */}
      <section id="proposal" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', fontWeight: '700' }}>
            פירוט הצעת המחיר
          </h2>
          
          <div className="grid grid-2">
            {/* אתר תדמית */}
            <div className="card">
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>
                אתר תדמית – 6 עמודים
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '16px' }}>
                5,000 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ עיצוב מותאם אישית</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ רספונסיביות מלאה</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ טופס לידים</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ קישור לוואטסאפ</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ התאמה מלאה לתקן נגישות ישראלי AA</li>
                <li style={{ padding: '4px 0', color: '#64748b' }}>• ללא Google Analytics</li>
              </ul>
            </div>

            {/* דף נחיתה */}
            <div className="card">
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                📱
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>
                דף נחיתה
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '16px' }}>
                1,500 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ מותאם לרשתות חברתיות</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ טופס לידים + וואטסאפ</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ עיצוב ממוקד לנייד</li>
              </ul>
            </div>

            {/* פלייר להדפסה */}
            <div className="card">
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                🖨️
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>
                פלייר להדפסה
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '16px' }}>
                800 ש״ח
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ תבנית PowerPoint</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ ניתנת לעריכה</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ כולל QR קוד</li>
              </ul>
            </div>

            {/* תמיכה חודשית */}
            <div className="card">
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                🔄
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>
                תמיכה חודשית (אופציונלית)
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#3B82F6', marginBottom: '16px' }}>
                300 ש״ח/חודש
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
                (לא כולל מע״מ)
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ עדכונים שוטפים</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ תיקונים</li>
                <li style={{ padding: '4px 0', color: '#475569' }}>✓ מענה טכני</li>
              </ul>
            </div>
          </div>

          {/* יצירת חומרים */}
          <div className="card" style={{ marginTop: '32px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)', border: '2px solid #3B82F6' }}>
            <div style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
              ✍️
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>
              יצירת חומרים
            </h3>
            <p style={{ color: '#475569' }}>
              במידה ואין חומרים קיימים (תמונות, טקסטים, כותרות) – יסופקו ללא תוספת תשלום
            </p>
          </div>
        </div>
      </section>

      {/* טבלת סיכום עלויות */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', fontWeight: '700' }}>
            סיכום עלויות
          </h2>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>רכיב</th>
                  <th>עלות לפני מע״מ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>אתר תדמית (6 עמודים)</td>
                  <td>5,000 ש״ח</td>
                </tr>
                <tr>
                  <td>דף נחיתה</td>
                  <td>1,500 ש״ח</td>
                </tr>
                <tr>
                  <td>פלייר להדפסה</td>
                  <td>800 ש״ח</td>
                </tr>
                <tr className="total-row">
                  <td><strong>סה״כ חד־פעמי</strong></td>
                  <td><strong>7,300 ש״ח</strong></td>
                </tr>
                <tr>
                  <td>תמיכה חודשית (אופציונלית)</td>
                  <td>300 ש״ח / חודש</td>
                </tr>
              </tbody>
            </table>
            
            <p style={{ textAlign: 'center', marginTop: '16px', fontWeight: '500', color: '#dc2626' }}>
              * המחירים אינם כוללים מע״מ
            </p>
          </div>
        </div>
      </section>

      {/* תהליך העבודה */}
      <section id="process" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', fontWeight: '700' }}>
            תהליך העבודה
          </h2>
          
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content">
                  <h3>שיחת אפיון</h3>
                  <p>פגישה ראשונית להבנת הצרכים והדרישות</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content">
                  <h3>קבלת / יצירת חומרים</h3>
                  <p>איסוף חומרים קיימים או יצירת חומרים חדשים</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content">
                  <h3>אישור סקיצות</h3>
                  <p>הצגת עיצובים ראשוניים לאישור</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content">
                  <h3>פיתוח ובנייה</h3>
                  <p>בניית האתר והדפים לפי העיצוב המאושר</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-number">5</div>
                <div className="timeline-content">
                  <h3>מסירה + הדרכה</h3>
                  <p>מסירת הפרויקט והדרכה על השימוש</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* טופס אישור הצעה */}
      <section id="contact" className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem', fontWeight: '700' }}>
            אישור הצעה
          </h2>
          
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">שם מלא *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">טלפון *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">אימייל *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="notes">הערות נוספות</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="כל הערה או בקשה מיוחדת..."
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="monthlySupport"
                      name="monthlySupport"
                      checked={formData.monthlySupport}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="monthlySupport">
                      האם את מעוניינת במסלול הליווי החודשי?
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? 'שולח...' : 'מאשרת את ההצעה'}
                </button>
                
                {submissionStatus === 'success' && (
                  <div className="alert alert-success">
                    תודה! ההצעה נשלחה בהצלחה. נחזור אליך בהקדם האפשרי.
                  </div>
                )}
                
                {submissionStatus === 'error' && (
                  <div className="alert alert-error">
                    <strong>שגיאה בשליחה!</strong><br/>
                    הטופס נשמר אבל המייל לא נשלח (דורש הגדרת שרת מייל).<br/>
                    <strong>אנא צרי קשר ישירות בוואטסאפ:</strong> <a href="https://wa.me/972547667775" style={{color: '#25D366', textDecoration: 'underline'}}>054-766-7775</a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© כל הזכויות שמורות | עיצוב ופיתוח: <a href="https://triroars.co.il" target="_blank" rel="noopener noreferrer">TriRoars</a></p>
        </div>
      </footer>

      {/* כפתור וואטסאפ */}
      <a
        href="https://wa.me/972547667775"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="צרו קשר בוואטסאפ"
      >
        💬
      </a>
    </>
  )
} 