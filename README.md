# Yahya Abdalshafy — Personal Portfolio

> **Machine Learning Engineer & Data Scientist**  
> *Python Development | Software Engineering | Intelligent Business Applications*

A distinctive personal portfolio website developed using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. Designed to reflect an applied engineering mindset, combining predictive modeling, data analysis, and software systems.

---

## 🚀 Live Demo & Preview
- **Banking Fraud Detection MVP:** [https://bankingfrauddetectionmvpdemo.streamlit.app/](https://bankingfrauddetectionmvpdemo.streamlit.app/)
- **Repository / Website:** Deployable instantly to GitHub Pages, Netlify, or Vercel with zero build step.

---

## 🎨 Brand Identity & Design System
- **Dark Mode (Dominant):** Background `#000000`, Secondary `#111111`, Primary Accent `#FFB22C`, Complementary Accent `#854836`, Text `#F7F7F7`.
- **Light Mode:** Background `#F7F7F7`, Secondary `#FFFFFF`, Primary Accent `#FFB22C`, Secondary Accent `#854836`, Text `#111111`.
- **Theme Persistence:** Stores user choice in `localStorage` and detects system preference automatically.

---

## 📂 Project Architecture

```
Portfolio/
│
├── index.html                  # Semantic, accessible HTML5 structure
│
├── css/
│   ├── style.css               # Core design tokens, layout & section styling
│   ├── animations.css          # Motion system, cursor, reveals & keyframes
│   └── responsive.css          # Mobile-first breakpoints & touch rules
│
├── js/
│   ├── config.js               # Central configuration file for all editable data
│   ├── theme.js                # Dark/Light theme manager with persistence
│   ├── animations.js           # Typewriter rotator, interactive canvas & cursor
│   ├── skills.js               # Dynamic skills renderer & animated progress bars
│   ├── projects.js             # Project details modals & screenshot lightbox
│   └── main.js                 # Global controller, validation & navigation
│
├── assets/
│   ├── images/
│   │   ├── profile/            # Portrait image & avatar placeholders
│   │   ├── projects/           # High-resolution screenshots & thumbnails
│   │   └── certificates/       # Verified certificate preview graphics
│   ├── icons/
│   │   └── favicon.svg         # Monogram SVG browser favicon
│   └── documents/
│       └── Yahya_Abdalshafy_CV.pdf # Your CV file (drop here)
│
└── README.md
```

---

## ⚙️ How to Customize (Zero-Code Guide)

All key personal and technical data is centralized in **`js/config.js`**. You do not need to edit complex HTML files to change percentages or links!

### 1. Uploading Your Portrait
1. Save your portrait photo as `yahya-portrait.jpg`.
2. Place it into `assets/images/profile/`.
3. If the file is missing, the site automatically falls back to an elegant monogram placeholder without broken image icons.

### 2. Updating Technical Skills
Open `js/config.js` and edit the score values (e.g. `score: 75`):
```javascript
skills: {
  programming: [
    { name: "Python", score: 70, level: "Applied Proficient", tags: ["Core", "OOP", "Scripting"] },
    // Edit or add skills here...
  ]
}
```

### 3. Adding Your CV File
1. Name your resume PDF: `Yahya_Abdalshafy_CV.pdf`.
2. Put it in `assets/documents/`.
3. The "Download CV" button automatically links and downloads this file.

### 4. Updating Contact Details & Social Profiles
In `js/config.js`, update:
```javascript
contact: {
  email: "abdalshafyyahya@gmail.com",
  phone: "01507313846",
  whatsapp: "01229881826",
  whatsappLink: "https://wa.me/201229881826"
}
```

---

## 🌐 Deployment Instructions

Since this website is built with pure standards-based HTML, CSS, and Vanilla JavaScript:
- **No Node.js build step is required.**
- **No npm install is needed.**

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repository settings, navigate to **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live within seconds!

---

## 🔒 Accuracy & Verification Notice
All academic, training, and project information strictly reflects verified details:
- **Degree:** Business Information Systems (BIS), Faculty of Commerce.
- **Training:** iTida Freelancing Training & NTI AI for Business Scholarship (~90 hours).
- **Projects:** Banking Fraud Detection MVP (Live Streamlit) & Tetouan Energy Forecasting (In Development).
- No unverified claims, fabricated honors, or artificial testimonials are included.

