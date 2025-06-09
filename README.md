# דף נחיתה - הצעת מחיר לנג ביט 📧

דף נחיתה רספונסיבי בעברית עבור הצעת מחיר לשירותי הקמת נוכחות דיגיטלית.

## תכונות ✨

* 🎨 עיצוב רספונסיבי מודרני בגופן Heebo
* 📱 מותאם מלא למובייל וטאבלט
* 📧 שליחת מיילים אוטומטית עם Nodemailer
* ✨ אנימציות חלקות ואפקטי hover מתקדמים
* 🔒 בדיקת תקינות נתונים
* 🌐 תמיכה מלאה בעברית (RTL)
* 💫 גרדיאנטים וצללים דינמיים

## פריסה מהירה ל-Vercel 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Idosegev23/leng-bit)

### הגדרת משתני סביבה ב-Vercel:

1. לכו להגדרות הפרויקט ב-Vercel
2. לחצו על "Environment Variables"
3. הוסיפו את המשתנים הבאים:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

## התקנה מקומית 💻

1. שכפול הפרויקט:
```bash
git clone https://github.com/Idosegev23/leng-bit.git
cd leng-bit
```

2. התקנת התלויות:
```bash
npm install
```

3. יצירת קובץ `.env.local`:
```bash
cp env.example .env.local
# ערכו את הקובץ עם הפרטים שלכם
```

4. הפעלה:
```bash
npm run dev
```

## הגדרת Gmail 📮

1. הפעלת 2-Factor Authentication בחשבון Gmail
2. יצירת App Password:
   * לכו ל-Google Account Settings
   * Security > 2-Step Verification > App passwords
   * צרו App password חדש ותעתיקו אותו ל-`EMAIL_PASS`

פרטים נוספים: [הוראות-הגדרת-מייל.md](./הוראות-הגדרת-מייל.md)

## מבנה הפרויקט 📁

```
├── app/
│   ├── api/send-approval/route.js  # API למייל
│   ├── globals.css                 # עיצוב גלובלי
│   ├── layout.js                   # Layout ראשי
│   └── page.js                     # דף הבית
├── public/                         # קבצים סטטיים
├── package.json                    # תלויות ופקודות
├── vercel.json                     # הגדרות Vercel
└── README.md                       # קובץ זה
```

## רכיבי הדף 🎯

### Hero Section
* כותרת ראשית: "הצעת מחיר להקמת נוכחות דיגיטלית"
* תת כותרת: "לנג ביט – סוכנות לביטוח פנסיוני ופיננסים"
* עבור: אורטל לנג

### שירותים 💼
1. **אתר תדמית** - 5,000 ש״ח
2. **דף נחיתה** - 1,500 ש״ח
3. **פלייר להדפסה** - 800 ש״ח
4. **תמיכה שוטפת** - 300 ש״ח/חודש

### טבלת עלויות 💰
סיכום ברור של כל הרכיבים עם סה״כ

### תהליך העבודה 🔄
5 שלבים: אפיון → חומרים → עיצוב → פיתוח → מסירה

### טופס אישור 📝
* שדות חובה: שם, טלפון, אימייל
* שדה אופציונלי: הערות
* בדיקת תקינות נתונים
* שליחה אוטומטית למייל

## התאמות אישיות 🎨

### שינוי צבעים
ערכו את הקובץ `app/globals.css`:
```css
:root {
    --primary-color: #0D0D0D;
    --secondary-color: #f8f8f8;
    --accent-color: #27ae60;
}
```

### שינוי תוכן
ערכו את הקובץ `app/page.js` לפי הצרכים.

## פתרון בעיות 🔧

### מייל לא נשלח
1. בדקו שההגדרות במשתני הסביבה נכונות
2. ודאו שה-App Password תקין
3. בדקו שה-Gmail מאפשר Less secure app access

### שגיאות בבנייה
1. ודאו שכל התלויות הותקנו (`npm install`)
2. בדקו שמשתני הסביבה מוגדרים ב-Vercel

## טכנולוגיות 🛠️

* **Next.js 14** - פריימוורק React
* **React 18** - ספריית UI
* **Nodemailer** - שליחת מיילים
* **CSS3** - עיצוב ואנימציות
* **Vercel** - הוסטינג ופריסה

## תמיכה 💬

לשאלות או בעיות:
* צרו issue בפרויקט
* צרו קשר ב-WhatsApp: +972547667775

---

**פותח בחיבה עבור לנג ביט על ידי TriRoars** 💙  
[triroars.co.il](https://triroars.co.il)