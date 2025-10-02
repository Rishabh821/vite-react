const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECTID), 
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASEID),
  appwriteCollectionId: String(import.meta.env.VITE_COLLECTIONID),
  appwriteBucketId: String(import.meta.env.VITE_BUCKETID),
  };
export default config;