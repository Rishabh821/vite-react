import config from "../config/config";
import { Client, Account, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.Databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.Databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async deletePost(slug) {
        try {
            await this.Databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async getPost({ slug }) {
        try {
            return await this.Databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.Databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async uploadFile(file) {
        try {
            await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            return { error: error.message || String(error) };
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
}

const service =  new Service();
export default service;