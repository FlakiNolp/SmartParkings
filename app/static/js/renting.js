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

async function GetBuildingPlaces() {
    building_id = document.getElementById("buildingslist").value

    const response = await fetch("https://api-uae-test.ujin.tech/api/v1/parking/slots/available-slots-related?" +
        new URLSearchParams("token=" + getCookie("token") + "&buildings[]=" + building_id));
    //в апи нет тела ответа, беру из parking/slots/simple-list
    let json = await response.json();
    slots = json["data"]["slots"]

    select = document.getElementById("slotslist");
    select.options.length = 0;

    for (var i = 0; i <= slots.length; i++) {
        var opt = document.createElement('option');
        opt.value = slots[i]["id"] + "_" + slots[i]["zone"]["id"];
        opt.innerHTML = slots[i]["number"];
        select.appendChild(opt);
    }
}

async function CalculatePrice() {
    var options = select && select.options;
    var opt;
    total_price = 0;
    for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            zone_id = opt.value.split("_")[1];
            const response = await fetch("https://api-uae-test.ujin.tech/api/v1/parking/zones/get-by-id?" +
                new URLSearchParams({
                    token: getCookie("token"),
                    id: zone_id,
                }));
            let json = await response.json();
            if (json["data"]["zone"]["price"] != null) {
                total_price += json["data"]["zone"]["price"]
            }
        }
    }
    document.getElementById("price").textContent = total_price
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}