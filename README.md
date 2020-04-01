# Frame Print
This is a utility that allows to print a string inside a _beautiful_, customizable frame!
NOTE: This package was created with the mere purpose of learning how to build npm packages.

## Get Started
npm i @federicomichela/frame-print

## Methods
_advancedFramePrint_

## Usage
```javascript
const framePrintUtil = require('frame-print');
const framedString = framePrintUtil.framePrint(
    'Michela',          // string to frame
    {
        frameSize: 30,  // number of total characters per row
        tbt: 1,         // top-bottom thickness (how many rows for top and bottom frame)
        lrt: 2,         // left-right thickness (how many characters for frame sides)
        tbSymbol: '-',  // character used to build the frame top and bottom
        lrSymbol: '|',  // character used to build the frame left and right
    }
);
```
