const fs = require('fs');

const logMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString('nb-NO');

    const time = now.toLocaleTimeString('nb-NO', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const method = req.method;

    const logEntry = `${req.ip} -> ${date} ${time} - [${method}] ${req.path}\n`;


    const logFilePath = '/var/logs/routes.log';

    if (process.env.NODE_ENV === 'production') {
        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Failed to write log:', err);
            };
        });
    } else {
        console.log("APPENDING TO FILE\n", logEntry);
    };

    next();
};

module.exports = logMiddleware;