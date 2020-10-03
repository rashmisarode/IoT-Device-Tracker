export const dataService = {
    getdbData
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