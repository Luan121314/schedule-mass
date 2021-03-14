export interface CommunityProps {
    id: string,
    name: string,
    capacity: number,
    limiter: number,
    reservation: number,
    address: string
}

export interface ReservationProps {
    id: string,
    companion: number,
    password: string,
    community: CommunityProps,
    user: UserProps
}

export interface UserProps {
    name: string,
    email: string,
    phone: string
}

export interface AxiosErrorRequest {
    response: {
        data: {
            message: string
        },
        status: number,
        statusText: string
    }
}
