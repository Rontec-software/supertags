interface objError {
    code: string
    exact: false,
    inclusive: true
    message: string
    minimum: number
    path: string[]
    type: string
}

export default interface ResponseApi {
    success: boolean
    status: number
    json: any
    errors?: objError[]
}