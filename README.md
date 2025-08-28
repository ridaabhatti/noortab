🌙 NoorTab – Islamic New Tab Chrome Extension

NoorTab replaces your default Chrome new tab with a calming, spiritually inspiring dashboard.
It blends Seerah snippets, Sunnah reminders, and interactive quizzes into your browsing routine.

✨ Features

Seerah of the Day – Displays a short story/snippet from the Prophet ﷺ or companions with a related mini Sunnah action.

Mini Sunnah Reminder – Gentle, daily encouragement to apply a Sunnah in your life.

Google Search Bar – Wide, glowing search input right in your new tab.

Quiz Me – Test your memory with interactive Seerah-based quizzes.

NoorTab Branding – Custom glowing title with a moon icon to match the theme.

Beautiful UI – Dark blue gradient night-sky background with glowing gold accents.

🛠️ Installation (Developer Mode)

Clone or download this repository:

git clone https://github.com/yourusername/noortab.git
cd noortab


Open Chrome and go to:

chrome://extensions/


Enable Developer Mode (top-right corner).

Click Load unpacked and select the noortab folder.

Open a new tab in Chrome → NoorTab should load!

📂 Project Structure
noortab/


├── manifest.json       # Chrome extension config

├── newtab.html         # Main HTML for new tab page

├── style.css           # Custom styling (dark gradient + glowing theme)

├── newtab.js           # Logic for quiz, dynamic content, toggle features

├── seerahData.js       # Seerah entries, Sunnah actions, quizzes

├── sparkle.png         # Optional starfield background

├── logo.png            # NoorTab logo (moon + text)

└── README.md           # Project documentation

📜 Example Seerah Entry (from seerahData.js)
{
  title: "Hijrah to Madinah"
  
  story: "When the Prophet ﷺ and Abu Bakr (RA) left Makkah, they hid in the Cave of Thawr for 3 days, showing deep trust in Allah."
  
  sunnah: "Travel with righteous companionship."
  
  link: "https://yaqeeninstitute.org/video/the-hijrah-of-the-prophet"
  
quiz: 
      question: "What city did the Prophet ﷺ migrate to after Makkah?"  
      options: ["Taif", "Jerusalem", "Madinah", "Basra"]    
      correctIndex: 2  
  
🚀 Future Features 

 Prayer Times Integration – Display local salah times directly on the new tab.

 Tasbeeh Counter – Quick-access digital dhikr counter.

 Daily Duʿāʾ Popup – A new duʿāʾ every day with reference.

 Pinned Sunnahs – Option to save favorite Sunnah reminders.

 User Contributions – Allow community submissions of Seerah stories.

 Streaks / Progress Tracking – Track your quiz progress or daily Sunnah habits.

 Qiblah Finder – Show Qiblah direction using device orientation.

🧑‍🤝‍🧑 Contributors

Ridaa Bhatti – Developer & Designer

Hafsa Zafar - Developer & Designer

Collaborators welcome! Submit PRs with more Seerah stories and Sunnah actions.

📜 License

This project is open-source under the MIT License.
Use, modify, and share freely for the benefit of the ummah 🌙.
