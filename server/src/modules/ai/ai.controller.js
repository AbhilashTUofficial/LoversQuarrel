import aiService from "./ai.service.js";

const reformatArgument = async (req, res) => {
    try {
        const { argument } = req.body;
        if (!argument) {
            return res.status(400).send({ message: "Argument text is required", status: "Fail" });
        }
        const response = await aiService.reformatArgument(req.body);
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

export default { reformatArgument, generateSystemChat };
