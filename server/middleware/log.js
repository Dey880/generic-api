const fs = require('fs');
const path = require('path');

const logMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString('nb-NO'); // "dd.mm.yyyy"
    const logEntry = `${date} - ${req.path}\n`;

    const logFilePath = '/var/logs/routes.log';

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
    });

    next();
};

module.exports = logMiddleware;