import AiPromptLog from "./ai.model.js";

const reformatArgument = async (argumentData) => {
    try {
        const { argument, username = "anonymous" } = argumentData;
        let reformatted = argument.trim();
        if (reformatted.length > 0) {
            reformatted = reformatted.charAt(0).toUpperCase() + reformatted.slice(1);
            if (!/[.!?]$/.test(reformatted)) {
                reformatted += '.';
            }
        }

        AiPromptLog.create({
            username,
            promptType: "reformatArgument",
            inputText: argument,
            outputText: reformatted
        }).catch(err => console.log("AiPromptLog non-fatal error:", err.message));

        return {
            original: argument,
            reformatted,
            status: "Success"
        };
    } catch (error) {
        console.error("Error in reformatArgument service:", error);
        return { message: error.message, status: "Fail" };
    }
};

const generateSystemChat = async (chatData) => {
    try {
        const { argumentStack, username = "system" } = chatData;
        const outputText = "System: Both arguments analyzed. The debate heightens!";

        AiPromptLog.create({
            username,
            promptType: "generateSystemChat",
            inputText: JSON.stringify(argumentStack || []),
            outputText
        }).catch(err => console.log("AiPromptLog non-fatal error:", err.message));

        return {
            systemChat: {
                content: outputText,
                type: "system",
                from: "system"
            },
            status: "Success"
        };
    } catch (error) {
        console.error("Error in generateSystemChat service:", error);
        return { message: error.message, status: "Fail" };
    }
};

export default { reformatArgument, generateSystemChat };
