Project Overview :

This Chrome extension is designed to improve user focus by hiding distracting elements on YouTube, specifically the comments section and notifications. By removing these elements from view, users can concentrate better on the video content without being tempted by the often cluttered or distracting interactions that YouTube presents.
This Chrome extension allows users to hide YouTube comments and notifications with a single button click from a popup UI. It injects a content script into YouTube pages, allowing interaction with the page's DOM (Document Object Model) to hide the elements specified.


Key Features:

#Hides YouTube Comments: YouTube comments can often lead users to distractions, whether by engaging in discussions, reading arguments, or just exploring irrelevant content. By hiding the comments section, users stay more focused on the video content.

#Hides YouTube Notifications: Notifications for new content can lead users away from their current task by pulling attention to other videos or channels. This extension hides the notification icon to minimize those distractions.

#Simple Toggle Mechanism: Users can activate the hiding functionality with a single button click from the extension's popup UI. This ensures minimal user interaction and maximum simplicity, so the user doesn’t have to navigate any complicated settings.



How It Works :
When the extension icon is clicked, a popup UI with a button is displayed. When the user clicks the button, the extension runs a script that finds and hides two specific elements on YouTube:

#Comments section (DOM element with the ID comments).
#Notifications button (DOM element related to the notification icon, identified by its selector)