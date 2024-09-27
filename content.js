document.getElementById('hideBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: hideYouTubeElements
      });
    });
  });
  
  function hideYouTubeElements() {
    const comments = document.getElementById('comments');
    if (comments) {
      comments.style.display = 'none';
    }
  
    const notifications = document.querySelector('ytd-notification-topbar-button-renderer');
    if (notifications) {
      notifications.style.display = 'none';
    }
  }
  