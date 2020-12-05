export default interface Response {
    token:  string;
    user: {
        name: string;
        email: string;
    }
}
