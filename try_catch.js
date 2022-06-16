// async function and try catch example - how to replace Promise()

const flightData = {
    from: "Berlin",
    destination: "London",
    flight: 'LH3467',
    departure: new Date(2023, 5, 16, 12, 45)   //try to change to new Date(2021,5,16,12,45)
};

const today = new Date();

const myFlight = () => {
    if (flightData.departure.getTime() > today.getTime()) {
        flightData.departure = flightData.departure.toLocaleString();
        console.log(`Your flight details to ${flightData.destination}: `);
        return flightData;
    } else {
        throw `We are sorry to inform you that your plane to ${flightData.destination} departed on ${flightData.departure.toDateString()}.`;
    }
}


const asyncFunction = async () => {
    try {
        const success = myFlight();
        console.log(success);
    } catch (error) {
        console.log('Information for a passanger: ', error);
    }
}

asyncFunction();