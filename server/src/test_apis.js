import http from "http";
import app from "./app.js";

const logTest = (name, passed, details) => {
    if (passed) {
        console.log(`\x1b[32m[PASS]\x1b[0m ${name}`);
    } else {
        console.log(`\x1b[31m[FAIL]\x1b[0m ${name}`);
    }
    if (details) console.log("  Details:", typeof details === "object" ? JSON.stringify(details) : details);
};

const request = (path, method = "GET", body = null) => {
    return new Promise((resolve, reject) => {
        const server = app.listen(0, () => {
            const port = server.address().port;
            const options = {
                hostname: "127.0.0.1",
                port,
                path: `/api/v1${path}`,
                method,
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const req = http.request(options, (res) => {
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => {
                    server.close();
                    try {
                        const parsed = JSON.parse(data);
                        resolve({ status: res.statusCode, body: parsed });
                    } catch (e) {
                        resolve({ status: res.statusCode, body: data });
                    }
                });
            });

            req.on("error", (err) => {
                server.close();
                reject(err);
            });

            if (body) {
                req.write(JSON.stringify(body));
            }
            req.end();
        });
    });
};

async function runMockTests() {
    console.log("==========================================");
    console.log("    RUNNING IN-MEMORY API TEST SUITE      ");
    console.log("==========================================");

    const testUser = {
        username: "test_couple_" + Date.now(),
        password: "password123",
        email: `test_${Date.now()}@example.com`
    };

    // 1. AI Module - Reformat Argument
    try {
        const res = await request("/ai/reformatArgument", "POST", { argument: "you never listen to me when i talk to you", username: testUser.username });
        const passed = res.status === 200 && res.body.reformatted === "You never listen to me when i talk to you.";
        logTest("AI: Reformat & Fix Grammar of User Argument", passed, res.body);
    } catch (e) {
        logTest("AI: Reformat & Fix Grammar of User Argument", false, e.message);
    }

    // 2. AI Module - Generate System Chat
    try {
        const res = await request("/ai/generateSystemChat", "POST", { argumentStack: [{ from: "Boyfriend", content: "Hi" }], username: testUser.username });
        const passed = res.status === 200 && res.body.status === "Success" && res.body.systemChat.type === "system";
        logTest("AI: Generate System Chat / Moderator Turn", passed, res.body);
    } catch (e) {
        logTest("AI: Generate System Chat / Moderator Turn", false, e.message);
    }

    console.log("==========================================");
    console.log("           TEST SUITE COMPLETED           ");
    console.log("==========================================");
    process.exit(0);
}

runMockTests();
