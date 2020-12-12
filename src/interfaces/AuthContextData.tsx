import User from "./User";

export default interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}
