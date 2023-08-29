import { dateToYear } from 'module-demo/date-utils';
import smiley from 'module-demo/smiley';
import * as _ from 'lodash';

function renderDateString() {
    const container = document?.querySelector('#date-string-container');
    if (container) {
        container.innerHTML = `The year is: ${dateToYear(new Date())} ${smiley}`;

        container.innerHTML += '<br>Lodash _.chain(...).join(): ' + _.chain(['a', 'b', 'c']).join('-');

        container.innerHTML += '<br>Lodash _(...).join(): ' + _(['a', 'b', 'c']).join('-');
    }
}

// Make our "app" available in global scope since it is not by default because of ES Modules
(window as any).AppModule = {
    renderDateString,
};
