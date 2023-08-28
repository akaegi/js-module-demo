import { dateToYear } from 'module-demo/date-utils';
import smiley from 'module-demo/smiley';
// import * as dayjs from 'dayjs';

function renderDateString() {
    const container = document?.querySelector('#date-string-container');
    if (container) {
        container.textContent = `The year is: ${dateToYear(new Date())} ${smiley}`;

        // const now = dayjs();
        // container.textContent += '  dayjs=' + now.toISOString();
    }
}

// Make our "app" available in global scope since it is not by default because of ES Modules
(window as any).AppModule = {
    renderDateString,
};
