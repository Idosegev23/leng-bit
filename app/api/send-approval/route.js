import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, phone, email, notes, monthlySupport } = await request.json()

    // יצירת transporter עבור Gmail (או שירות אימייל אחר)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // המייל שלך
        pass: process.env.EMAIL_PASS, // App Password או סיסמת האימייל שלך
      },
    })

    // תוכן המייל
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // שולח למייל שלך
      subject: `הצעת מחיר חדשה - לנג ביט - ${name}`,
      html: `
        <div style="font-family: 'Heebo', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; direction: rtl;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            הצעת מחיר חדשה - לנג ביט
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D0D0D; margin-top: 0;">פרטי הלקוח:</h3>
            <p><strong>שם מלא:</strong> ${name}</p>
            <p><strong>טלפון:</strong> ${phone}</p>
            <p><strong>אימייל:</strong> ${email}</p>
            ${monthlySupport ? '<p><strong>מעוניינת בליווי חודשי:</strong> כן ✓</p>' : '<p><strong>מעוניינת בליווי חודשי:</strong> לא</p>'}
          </div>

          ${notes ? `
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D0D0D; margin-top: 0;">הערות נוספות:</h3>
            <p style="white-space: pre-wrap;">${notes}</p>
          </div>
          ` : ''}

          <div style="background: #e6f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0D0D0D; margin-top: 0;">סיכום ההצעה:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 5px 0;">🧱 אתר תדמית (6 עמודים): 5,000 ש״ח</li>
              <li style="padding: 5px 0;">📱 דף נחיתה: 1,500 ש״ח</li>
              <li style="padding: 5px 0;">🖨️ פלייר להדפסה: 800 ש״ח</li>
              <li style="padding: 5px 0; border-top: 1px solid #ccc; margin-top: 10px; font-weight: bold;">
                <strong>סה״כ: 7,300 ש״ח (לא כולל מע״מ)</strong>
              </li>
              ${monthlySupport ? '<li style="padding: 5px 0;">🔄 תמיכה חודשית: 300 ש״ח/חודש</li>' : ''}
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://wa.me/972${phone.startsWith('0') ? phone.substring(1) : phone}" 
               style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
              צור קשר בוואטסאפ 📱
            </a>
          </div>

          <p style="font-size: 12px; color: #64748b; text-align: center; margin-top: 30px;">
            נשלח מדף הצעת המחיר של לנג ביט
          </p>
        </div>
      `,
    }

    // שליחת המייל
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'המייל נשלח בהצלחה' }, { status: 200 })
  } catch (error) {
    console.error('שגיאה בשליחת המייל:', error)
    return NextResponse.json({ error: 'שגיאה בשליחת המייל' }, { status: 500 })
  }
} 