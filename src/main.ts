import { dateToYear } from 'module-demo/date-utils.js';
import smiley from 'module-demo/smiley.js';

function renderDateString() {
    const container = document?.querySelector('#date-string-container');
    if (container) {
        container.textContent = `The year is: ${dateToYear(new Date())} ${smiley}`;
    }
}

// Make our "app" available in global scope since it is not by default because of ES Modules
(window as any).AppModule = {
    renderDateString,
};
