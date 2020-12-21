import User from "./User";

export default interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}
