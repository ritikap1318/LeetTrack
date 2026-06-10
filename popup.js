document.getElementById('remindBtn').addEventListener('click', () => {
    const urlInput = document.getElementById('problemUrl').value.trim();
    
    // Basic validation: Check if it's actually a URL and has leetcode in it
    if(!urlInput || !urlInput.includes("leetcode.com")) {
        alert("Please enter a valid LeetCode problem URL.");
        return;
    }
  
    // The 1-3-7 Rule (in days)
    const revisionDays = [1, 3, 7]; 
  
    revisionDays.forEach(day => {
        // NOTE FOR TESTING: Agar tumhe abhi turant test karna hai, 
        // toh niche wale formula ko change karke `day * 1 * 60 * 1000` kar lena.
        // Usse alarms minutes mein bajenge, din (days) ki bajaye.
        
        // Exact time calculation: Current time + (Days converted to milliseconds)
        //const scheduledTime = Date.now() + (day * 24 * 60 * 60 * 1000); 
        const scheduledTime = Date.now() + (day * 1 * 60 * 1000);
        
        // Creating a unique alarm name that stores the day and the URL
        // Example: "revise_1_https://leetcode.com/problems/two-sum/"
        const alarmName = `revise_${day}_${urlInput}`;
        
        chrome.alarms.create(alarmName, {
            when: scheduledTime
        });
    });
  
    // Show success message and hide it after 2 seconds
    const statusText = document.getElementById('status');
    statusText.style.display = 'block';
    
    setTimeout(() => {
        window.close(); // Closes the extension popup automatically
    }, 2000);
});