export interface CustomerInterface extends Document {
    username: string
    password: string
    phoneNumber: number
    emailAddress: string
    paymentMethod: string
    savedPickupPoints: Array<string>
    pastOrders: Array<string>
}

export interface DonutInterface extends Document {
    name: string
    price: number
    weight: number
    discount: number
    picture: string
    description: string
    availability: boolean
    tags: Array<string>
}

export interface EmployeeInterface extends Document {
    name: string
    password: string
    phoneNumber: number
    emailAddress: string
}

export interface OrderInterface extends Document {
    amounts: Array<number>
    status: string
    tax: number
    serviceFee: number
    deliveryFee: number
    totalCost: number
    rating: number
    customer: string
    donuts: Array<string>
}

export interface PickupPointInterface extends Document {
    name: string
    latitude: number
    longitude: number
}

export interface TagInterface extends Document {
    name: string
    donuts: Array<string>
}