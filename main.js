const searchInput = document.querySelector("#search-input"); 
 
searchInput.addEventListener("keydown", function(event) {     
    if(event.code === "Enter") { 
        search(); 
    } 
}); 
 
function search() { 
    const input = searchInput.value; 
 
    window.location.href = "https://www.google.com/search?q="+input+"&rlz=1C1CHBD_esMX1002MX1002&oq="+input+"&aqs=chrome.0.0i67i355i433j46i67i433j46i131i433i512j46i67i131i433j46i67i433j0i512l2j0i67j46i433i512j46i131i433i512.2741j0j9&sourceid=chrome&ie=UTF-8"
} 
