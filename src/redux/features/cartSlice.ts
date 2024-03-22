import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";


type CartState = {
    carItems: ReservationItem[]
}

const initialState:CartState = {carItems:[]}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            state.carItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItems = state.carItems.filter(obj => {
                return (obj.carModel !== action.payload.carModel || obj.pickupDate !== action.payload.pickupDate ||
                    obj.returnDate !== action.payload.returnDate)
            })

            state.carItems = remainItems
        }
    }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer