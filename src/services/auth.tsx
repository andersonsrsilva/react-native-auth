import Response from "../interfaces/Response";

export function Signin(email: string, password: string): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Anderson Silva',
                    email: email
                }
            })
        }, 2000);
    })
}
