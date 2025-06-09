const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// הגדרת Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route לדף הבית
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint לשליחת אישור הצעה
app.post('/api/send-approval', async (req, res) => {
  const { fullName, phone, email, notes, monthlySupport } = req.body;

  // בדיקת שדות חובה
  if (!fullName || !phone || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'שדות חובה חסרים' 
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
    subject: 'אישור הצעת מחיר - הקמת נוכחות דיגיטלית לנג ביט',
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif;">
        <h2>אישור הצעת מחיר - לנג ביט</h2>
        <p><strong>שם מלא:</strong> ${fullName}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        <p><strong>אימייל:</strong> ${email}</p>
        ${notes ? `<p><strong>הערות:</strong> ${notes}</p>` : ''}
        <p><strong>מעוניינת בתמיכה שוטפת:</strong> ${monthlySupport ? 'כן' : 'לא'}</p>
        <hr>
        <h3>פרטי ההצעה:</h3>
        <ul>
          <li>אתר תדמית (6 עמודים): 5,000 ש״ח</li>
          <li>דף נחיתה: 1,500 ש״ח</li>
          <li>פלייר להדפסה: 800 ש״ח</li>
          <li><strong>סה״כ חד פעמי: 7,300 ש״ח</strong></li>
          ${monthlySupport ? '<li style="color: #e67e22;"><strong>תמיכה חודשית: 300 ש״ח / חודש</strong></li>' : '<li>תמיכה חודשית (לא נבחרה): 300 ש״ח / חודש</li>'}
        </ul>
        <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin-top: 15px;">
          <p style="margin: 0; color: #2c3e50;"><strong>שימו לב:</strong> כל פרויקט או שירות נוסף מעבר להצעה זו יהיה בעלות נפרדת ויוצע לאישור מראש.</p>
        </div>
        <p style="color: #666; font-style: italic; margin-top: 10px;">* כל המחירים לא כוללים מע״מ</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ 
      success: true, 
      message: 'האישור נשלח בהצלחה!' 
    });
  } catch (error) {
    console.error('שגיאה בשליחת המייל:', error);
    res.status(500).json({ 
      success: false, 
      message: 'אירעה שגיאה, אנא נסי שוב' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`השרת רץ על פורט ${PORT}`);
}); 