console.log('This is the background page.');
console.log('Put the background scripts here.');
const clapAttackMenuId = `clapAttackMenuId`

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: clapAttackMenuId,
    title: "All the Claps!!!!",
    contexts: ["page"],
    type: "normal",
  })
})



chrome.contextMenus.onClicked.addListener((info, tab)=>{
  if(info.menuItemId === clapAttackMenuId){
    chrome.tabs.sendMessage(tab.id, "getClickedEl", {frameId: info.frameId}, data => {
      console.log(data)
    });
  }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
          "from a content script:" + sender.tab.url :
          "from the extension");
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
);
