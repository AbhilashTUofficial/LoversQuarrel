import gameSettings from "./game.model.js"

const setInitialArgument = async (req, res) => {
    try {
        const game = await gameSettings.findOne({ username: req.username });
        if (!game) {
            return { message: "Game settings not found", status: "Fail" };
        }
        if (req.boyfriend && req.boyfriend.initialArgument) {
            game.boyfriend.initialArgument = req.boyfriend.initialArgument;
        }
        if (req.girlfriend && req.girlfriend.initialArgument) {
            game.girlfriend.initialArgument = req.girlfriend.initialArgument;
        }
        await game.save();
        console.log("response: " + JSON.stringify(game));

        return game;
    } catch (error) {
        console.log(error);
        return { message: error.message, status: "Fail" };
    }
}

const setTraits = async (req, res) => {
    try {
        const game = await gameSettings.findOne({ username: req.username });
        if (!game) {
            return { message: "Game settings not found", status: "Fail" };
        }
        if (req.boyfriendTraits || req.traits?.boyfriend) game.boyfriend.traits = req.boyfriendTraits || req.traits?.boyfriend;
        if (req.girlfriendTraits || req.traits?.girlfriend) game.girlfriend.traits = req.girlfriendTraits || req.traits?.girlfriend;
        await game.save();
        return game;
    } catch (error) {
        console.log(error);
        return { message: error.message, status: "Fail" };
    }
}

const addAllGameSettings = async (req, res) => {
    try {
        let game = await gameSettings.findOne({ username: req.username });
        if (!game) {
            game = await gameSettings.create(req);
        } else {
            Object.assign(game, req);
            await game.save();
        }
        return game;
    } catch (error) {
        console.log(error);
        return { message: error.message, status: "Fail" };
    }
}

const appendArgument = async (req, res) => {
    try {
        const { username, argument } = req;
        const game = await gameSettings.findOne({ username });
        if (!game) {
            return { message: "Game settings not found", status: "Fail" };
        }

        game.argumentStack.push(argument);

        // Check if both Boyfriend and Girlfriend have recently spoken after the last system chat
        const stack = game.argumentStack;
        let lastSystemIndex = -1;
        for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i].from === "system") {
                lastSystemIndex = i;
                break;
            }
        }

        const recentChats = stack.slice(lastSystemIndex + 1);
        const hasBoyfriend = recentChats.some(c => c.from === "Boyfriend");
        const hasGirlfriend = recentChats.some(c => c.from === "Girlfriend");

        if (hasBoyfriend && hasGirlfriend) {
            // Placeholder: genai generation left for the future
            const systemChat = {
                id: (stack.length + 1).toString(),
                content: "System: Both parties have presented their arguments. Escalating tension...",
                type: "system",
                time: new Date().toISOString(),
                from: "system",
                to: "all",
                username: "system"
            };
            game.argumentStack.push(systemChat);
        }

        await game.save();
        return game;
    } catch (error) {
        console.log(error);
        return { message: error.message, status: "Fail" };
    }
}

export default { setInitialArgument, setTraits, addAllGameSettings, appendArgument };
