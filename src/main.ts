import { dateToYear } from 'module-demo/date-utils';
import smiley from 'module-demo/smiley';
// import {default as smiley} from 'module-demo/smiley';

// using this import in an ES6 module environment, the call _() fails because typeof(_) == 'object'
// import * as _ from 'lodash'; // <-- use this demo with esModuleInterop set to false

// this call works in an ES6 module environment (even without esModuleInterop) because lodash-es does a default export and the call
// import is syntactic sugar for `import { default } from 'lodash-es'`
// however it does not work in a CommonJS/AMD environment because Typescript-generated js code is then `lodash_1.default.chain(...)`
// // @ts-ignore
// import _ from 'lodash';  // <-- use this demo with esModuleInterop set to false but // @ts-ignore

// only works if setModuleInterop is set to true in tsconfig.json (but then it works in all environments!)
import _ from 'lodash';

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
