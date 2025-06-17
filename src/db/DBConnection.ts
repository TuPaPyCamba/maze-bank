import mongoose from "mongoose"

export const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI environment variable is not set")
    }

    try {
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Ya estás conectado a MongoDB")
            return
        }

        await mongoose.connect(MONGODB_URI)
        console.log("✅ Conexión exitosa a MongoDB")
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error)
        throw error
    }
}
