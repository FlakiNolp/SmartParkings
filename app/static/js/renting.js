//получает адреса домов
async function GetAddresses() {
    //zaglushka
    document.cookie = "token=ust-738989-e96c48339a4a4ded2cd43abdee8c0392";
    //token from cookies 
    //search => substring

    const response = await fetch("https://api-uae-test.ujin.tech/api/v1/buildings/get-list-crm?" + new URLSearchParams({
        token: getCookie("token"),
        search: document.getElementById("substr").value,
    }));

    let json = await response.json();
    buildings = json["data"]["buildings"];

    select = document.getElementById("buildingslist");
    select.options.length = 0;
    for (var i = 0; i <= buildings.length; i++) {
        var opt = document.createElement('option');
        opt.value = buildings[i]["id"];
        opt.innerHTML = buildings[i]["building"]["title"];
        select.appendChild(opt);
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}