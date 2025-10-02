import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
            console.log("Appwrite URL:", config.appwriteUrl);
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                //call another method
                return this.login({email, password});
            } else {
                return userAccount;    
            }
        }   
        catch (error) {
            alert(error.message || "An error occurred while creating account.");
            throw error;
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }catch (error) {
            alert(error.message || "An error occurred while logging in.");
            throw error;
        }
    }
    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            alert(error.message || "An error occurred while logging out.");
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            alert(error.message || "An error occurred while fetching user.");
            throw error;
        }
    }
}

const authService = new AuthService();



export default authService;