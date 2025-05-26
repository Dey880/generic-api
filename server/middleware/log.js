const fs = require('fs');

const logMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString('nb-NO');

    const time = now.toLocaleTimeString('nb-NO', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const logEntry = `${date} ${time} - ${req.path}\n`;

    const logFilePath = '/var/logs/routes.log';

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
    });

    next();
};

module.exports = logMiddleware;