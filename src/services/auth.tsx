import Response from "../interfaces/Response";

export function Signin(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Anderson Silva',
                    email: 'andersonsrsilva@gmail.com'
                }
            })
        }, 2000);
    })
}