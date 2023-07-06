//получает адреса домов
function GetAddresses(substring) {
    //token from cookies 
    //search => substring
    fetch("https://api-uae-test.ujin.tech/api/v1/buildings/get-list-crm" + new URLSearchParams({
        token: getCookie("token"),
        search: substring,
    }))
        .then((response) => response.json())
        .then((json) => console.log(json));
    
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }