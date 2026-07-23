import gameService from "./game.service.js";

const setInitialArgument = async (req, res) => {
    try {
        const response = await gameService.setInitialArgument(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
}

const addAllGameSettings = async (req, res) => {
    try {
        const response = await gameService.addAllGameSettings(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
}

const appendArgument = async (req, res) => {
    try {
        const response = await gameService.appendArgument(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
}

const setTraits = async (req, res) => {
    try {
        const response = await gameService.setTraits(req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message, status: "Fail" });
    }
}

export default { setInitialArgument, setTraits, addAllGameSettings, appendArgument };
