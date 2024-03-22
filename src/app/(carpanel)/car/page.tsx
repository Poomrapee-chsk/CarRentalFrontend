import CarCatalog from "@/components/CarCatalog"
import getCars from "@/libs/getCars"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"


export default async function Car() {

    const cars = await getCars()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select your travel partner</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CarCatalog carJson={cars}/>
        </Suspense>
        </main>
    ) 
}