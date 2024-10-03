const fs = require('fs');
const path = require('path');

function removeLogs() {
    const logDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logDir)) {
        fs.readdirSync(logDir).forEach(file => {
            const filePath = path.join(logDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleting log file: ${file}`);
        });

        fs.rmdirSync(logDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

removeLogs();