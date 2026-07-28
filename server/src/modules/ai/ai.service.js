import AiPromptLog from "./ai.model.js";

const getReformattedArgument = async (argumentData) => {
    try {
        argumentData.argument;
        console.log(argumentData)

        return {
            argument: `${argumentData.boyfriend.initialArgument} [Refined]`
        }

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

const getInitialTraits = async (traitData) => {
    try {
        const argument = traitData.argument;
        const tags = traitData.tags;
        // TODO: need to implement the ai part here.
        return {
            traits: {
                intellect: 50,
                logic: 50,
                drama: 50,
                sarcasm: 50,
                stubbornness: 50,
                confidence: 50,
                memory: 50,
                empathy: 50
            },
            status: "Success"
        }

    } catch (error) {
        console.error("Error in getInitialTraits service:", error);
        return { message: error.message, status: "Fail" };
    }
};

export default { getReformattedArgument, generateSystemChat, getInitialTraits };
