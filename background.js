// Listen for any alarm going off
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("🔔 ALARM TRIGGERD  Alarm Name:", alarm.name); // Yeh humein batayega ki timer chala
    
    if (alarm.name.startsWith("revise_")) {
        const parts = alarm.name.split("_");
        const day = parts[1];
        const prefix = `revise_${day}_`;
        const problemUrl = alarm.name.substring(prefix.length);
  
        console.log("📨 Trying to Send Notification for URL:", problemUrl); 
  
        // Create the system notification
        chrome.notifications.create(alarm.name, {
            type: "basic",
            iconUrl: "icon.png", 
            title: `Revision Alert: Day ${day}`,
            message: "It's time to revise. Click to solve it now!",
            priority: 2,
            requireInteraction: true 
        }, (notificationId) => {
            // Yeh block humein exact error batayega agar notification fail hota hai
            if (chrome.runtime.lastError) {
                console.error("❌ NOTIFICATION ERROR:", chrome.runtime.lastError.message);
            } else {
                console.log("✅ Notification Successfully Sent!");
            }
        });
    }
});

// Listen for clicks on the notification
chrome.notifications.onClicked.addListener((notificationId) => {
    if (notificationId.startsWith("revise_")) {
        const parts = notificationId.split("_");
        const day = parts[1];
        const prefix = `revise_${day}_`;
        const urlToOpen = notificationId.substring(prefix.length);

        chrome.tabs.create({ url: urlToOpen });
        chrome.notifications.clear(notificationId);
    }
});