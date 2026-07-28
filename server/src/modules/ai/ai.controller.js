import aiService from "./ai.service.js";

const getReformattedArgument = async (req, res) => {
    try {
        const { argument } = req.body;
        if (!argument) {
            return res.status(400).send({ message: "Argument text is required", status: "Fail" });
        }
        const response = await aiService.getReformattedArgument(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
};

const generateSystemChat = async (req, res) => {
    try {
        const response = await aiService.generateSystemChat(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
};

const getInitialTraits = async (req, res) => {
    try {
        const response = await aiService.getInitialTraits(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
};

export default { getReformattedArgument, generateSystemChat, getInitialTraits };
