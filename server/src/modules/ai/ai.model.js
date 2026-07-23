import mongoose from "mongoose";

const aiPromptLogSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        promptType: {
            type: String,
            enum: ["reformatArgument", "generateSystemChat", "generateTraits", "argumentResponse"],
            required: true
        },
        inputText: {
            type: String,
            required: true
        },
        outputText: {
            type: String
        },
        metadata: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("AiPromptLog", aiPromptLogSchema);
