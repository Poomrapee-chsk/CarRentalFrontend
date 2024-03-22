import {resolve} from "path"

export default async function getCars() {

    //Funny 5 second delay
    // await new Promise((resolve)=>setTimeout(resolve, 5000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars`, {next:{tags:['cars']}})
    const data = await response.json();

    if (!(response.ok)) {
        throw new Error("Failed to fetch car")
    }

    return data
}