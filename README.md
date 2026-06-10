# 🚀 LeetTrack (Leet_Revise) - Chrome Extension

LeetTrack is a smart Chrome Extension designed to help you set automatic revision reminders for LeetCode problems. If you are preparing for DSA and tend to forget to revise solved questions at regular intervals, this extension utilizes the `chrome.alarms` API to remind you at the exact scheduled time.

---

##  Features
-  **Custom Revision Days:** Select exactly how many days after which a specific problem needs to be revised.
-  **Automated Chrome Alarms:** Background alarms that trigger precisely at the scheduled time.
-  **Clean UI Popup:** A simple and interactive popup menu (`popup.html`) to manage all your reminders effortlessly.
-  **Smart Tracking:** Unique alarm names generated based on problem URLs to prevent any conflicts.

---

##  Tech Stack Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Extension Core:** Chrome Extensions API (MV3 - Manifest V3)
- **Background Processes:** Service Workers (`background.js`) & Chrome Alarms API

---

##  Project Structure
```text
Leet_Revise/
├── manifest.json      # Extension configuration and permissions
├── popup.html         # Main interface of the extension
├── popup.js           # Logic for handling user inputs and saving preferences
├── background.js      # Service worker to manage chrome alarms in background
└── icon.png           # Extension logo
