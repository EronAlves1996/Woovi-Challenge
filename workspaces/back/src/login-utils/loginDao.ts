import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

await (async function main(){
    const val = `${process.env.DB_TYPE}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_COLLECTION}`;
    console.log(val);
    await mongoose.connect(val);
})();

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
});

const user = mongoose.model("user", userSchema, "users");

export const dao = {
    read: async (email: string, password: string) => {
        return await user.findOne({email: email, password: password});
    }
}


