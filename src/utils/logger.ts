/**
 * Common logger for FE, show where the log is coming from and the log level.
 */

type LogLevel = "debug" | "info" | "warning" | "error" | "critical" | "table";

// const LOG_LEVELS: string[] = ["debug", "info", "warning", "error", "critical", "table"];

const messageStyle = {
    "debug": "background-color: #bde3ff; color: #344bc1",
    "info": "background-color: #bdfac5; color: #005c22",
    "warning": "background-color: #fff687; color: #b86705",
    "error": "background-color: #fececa; color: #ba261b",
    "critical": "background-color: #f97970; color: rgb(58, 13, 10)",
    "table": "background-color: #202124; color: #fafbfb",
    "dark": "background-color: #202124; color: #fafbfb",
    "light": "background-color: #fafbfb; color: #202124",
    "commonStyle": "border-radius: 4px;padding:4px;display:flex; justify-content:center;align-items:center;margin:4px 0px;font-weight:600;",
    "reset": "font-weight:600; margin-left:10px"
}

const textStyle = {
    "debug": "color: #3499fd;",
    "info": "color: #00c04c;",
    "warning": "color:rgb(225, 171, 6);",
    "error": "color: #F04A3E;",
    "critical": "color:rgb(166, 38, 28);",
    "table": "color:rgb(36, 127, 218);",
    "dark": "color: #202124;",
    "light": "color: #fafbfb;",
}

/**
 * Logger class for logging messages to the console.
 * @class Logger
 * @param {string} name - The name of the logger.
 * @param {LogLevel} level - The log level.
 * @returns {void} - No return value.
 */
export class Logger {
    #name: string;
    #logLevel: LogLevel;
    #isDebug: boolean;

    constructor(name: string = "", level: LogLevel = "debug", isDebug: boolean = true) {
        this.#name = name;
        this.#logLevel = level;
        this.#isDebug = isDebug
    }

    get name() {
        return this.#name;
    }

    get logLevel() {
        return this.#logLevel;
    }

    get isDebug() {
        return this.#isDebug;
    }

    set name(name: string) {
        this.#name = name;
    }

    set logLevel(level: LogLevel) {
        this.#logLevel = level;
    }

    set isDebug(isDebug: boolean) {
        this.#isDebug = isDebug;
    }

    private getCallerFile(): string {
        const stack = new Error().stack;
        if (!stack) return "Unknown";

        const lines = stack.split("\n").map(l => l.trim());

        // Find first stack line that is NOT logger.ts
        const caller = lines.find(line => !line.includes("logger.ts") && line.includes("/src/"));
        if (!caller) return "Unknown";

        // Extract relative path from /src/ onwards
        const match = caller.match(/\/src\/(.+\.[tj]sx?)/);
        return match ? match[1] : "Unknown"
    }

    private log(level: LogLevel, message: Array<unknown> | Error | object | unknown) {
        // const timestamp = new Date().toLocaleString("en-GB", { timeZone: "Asia/Ho_Chi_Minh" });
        if (!this.#isDebug) return console.log(message);

        this.#name = this.getCallerFile();

        if (level === "error" && message instanceof Error) {
            message = message.stack;
        }

        if (level === "table" && typeof message === "object") {
            console.table(message);
        } else {
            message = Array.isArray(message)? message.join(", ") : message
            console.log(
                `%c${level.toUpperCase()}%c ${this.#name} -%c${message}`,
                messageStyle.commonStyle + messageStyle[level],
                messageStyle.commonStyle,
                messageStyle.commonStyle + textStyle[level]
            );
        }
    }

    // private sendLogToServer = async (level: string, message: string) => {
    //     await fetch("/api/logs", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ level, message, timestamp: new Date().toISOString() })
    //     });
    // };

    // private addLog = (level: string, message: string) => {
    //     const timestamp = new Date().toLocaleString("en-GB", { timeZone: "Asia/Ho_Chi_Minh" });
    //     const logFileName: string = `FE log ${timestamp}.log`;
    //     const logs = JSON.parse(localStorage.getItem(logFileName) || "[]");
    //     logs.push(`[${timestamp}][${level}] ${message}`);
    //     localStorage.setItem(logFileName, JSON.stringify(logs));
    // };

    // private saveLogToFile = (filename: string, content: string) => {
    //     const blob = new Blob([content], { type: "text/plain" });
    //     const url = URL.createObjectURL(blob);

    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.download = filename;
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     URL.revokeObjectURL(url);
    // };

    // Usage
    // saveLogToFile("app.log", "[INFO] App started at " + new Date().toISOString());

    debug(...message: Array<unknown>) {
        this.log("debug", message);
    }
    info(...message: Array<unknown>) {
        this.log("info", message);
    }
    warning(...message: Array<unknown>) {
        this.log("warning", message);
    }
    error(...message: Array<unknown>) {
        this.log("error", message);
    }
    critical(...message: Array<unknown>) {
        this.log("critical", message);
    }
    table(...message: Array<unknown>) {
        this.log("table", message);
    }
};

const logger = new Logger("React App", "debug");

export default logger;
