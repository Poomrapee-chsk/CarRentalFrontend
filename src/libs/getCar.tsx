export default async function getCar(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${id}`)
    const data = await response.json();

    if (!(response.ok)) {
        throw new Error("Failed to fetch car")
    }

    return data
}