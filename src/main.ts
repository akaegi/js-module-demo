import { dateToYear } from 'module-demo/date-utils';
import smiley from 'module-demo/smiley';
import * as _ from 'lodash';

// if (moment && !moment.default) {
//     moment.default = moment;
// }

function renderDateString() {
    const container = document?.querySelector('#date-string-container');
    if (container) {
        container.textContent = `The year is: ${dateToYear(new Date())} ${smiley}`;

        container.textContent += ' ' + _.join(['a', 'b', 'c'], '-');
}

// Make our "app" available in global scope since it is not by default because of ES Modules
(window as any).AppModule = {
    renderDateString,
};
