export const dataService = {
    getdbData,
    sendCommandToIot,
    getRealTimeData
}

export const apiConfig = {
    endpointURL: "https://us-central1-neural-cable-290804.cloudfunctions.net"
}

function getdbData(fromDate, toDate) {
    console.log("fromDate"+fromDate);
    console.log("toDate"+toDate);
    const requestOption = {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }
    return fetch(`${apiConfig.endpointURL}/getData?fromDate=${fromDate}&toDate=${toDate}`, requestOption).then(res => {
        console.log(res); 
        return res.json();
    })
}

function getRealTimeData(fromDate, toDate) {
    console.log("fromDate"+fromDate);
    console.log("toDate"+toDate);
    const requestOption = {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }
    return fetch(`${apiConfig.endpointURL}/getData?fromDate=${fromDate}&toDate=${toDate}`, requestOption).then(res => {
        console.log(res); 
        return res.json();
    })
}

function sendCommandToIot() {
    let command = "test command";
    const requestOption = {
        method: 'POST',
        body: JSON.stringify({
            "command": command,
        }),
        headers: { "Content-Type": "application/json" }
    }
    return fetch(`${apiConfig.endpointURL}/getData`, requestOption).then(res => {
        console.log(res); 
        return res.json();
    })
}