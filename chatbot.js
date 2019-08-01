// Template to replace values with:
const messageTemplate = '<div style="opacity: 0; transition: 1s ease-in-out;" class="message {sender}"><div data-time="{time}" class="contain">{messageBody}</div></div>'; 

var messageContainer = document.querySelector(".messages");

// Show a message in the UI.
function createMessage(sender, messageBody){
    var tmp = messageTemplate; // Make a copy of the template
    tmp = tmp.replace("{sender}", sender); // Bot Or User Sending Message?
    tmp = tmp.replace("{messageBody}", messageBody); // Message Text
    var date = new Date();
    var hoursAM = convertHours(date.getHours());
    var timeString = (hoursAM[0] + ":" + date.getMinutes() + " " + hoursAM[1]);
    tmp = tmp.replace("{time}", timeString);
    messageContainer.innerHTML = messageContainer.innerHTML + tmp;
    messageContainer.lastElementChild.style.opacity = "1";
    messageContainer.lastElementChild.scrollIntoView();
    
}

// Call user function
var input = document.getElementById("message");

function userMessage(text){
    if(text.trim() == "") return false;
    var escaped = he.encode(text);
    createMessage("user", escaped);
    return true;
}

document.getElementById("send").onclick = ()=>{
    if(userMessage(input.value)){
        input.value = "";
    }
}

input.onkeydown = (ev)=>{
    if(ev.key == "Enter" || ev.code == "Enter"){
        document.getElementById("send").click();
    }
}

// utils
function convertHours(hours){
    if(hours > 12) return [hours - 12, "PM"];
    if(hours == 12) return [12, "PM"];
    if(hours == 0) return [12, "AM"];
    if(hours < 12) return [hours, "AM"];
}

// starting code
createMessage("bot", "Hello, I'm Chatbot!");