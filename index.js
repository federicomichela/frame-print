/**
 * @typedef FramePrintConfig
 * @type {object}
 * @property {number} frameSize - number of total characters per row
 * @property {number} tbt - top-bottom thickness (how many rows for top and bottom frame)
 * @property {number} lrt - left-right thickness (how many characters for frame sides)
 * @property {string} symbol - character used to build the frame
 *  (NOTE: if a string longer than 1 is passed, only the first character will be used)
 * @property {string} tbSymbol - character used to build the frame
 *  (NOTE: if a string longer than 1 is passed, only the first character will be used)
 * @property {string} lrSymbol - character used to build the frame
 *  (NOTE: if a string longer than 1 is passed, only the first character will be used)
 */

/**
 * Print to console a string wrapped in a frame
 * @param {string} str - string to render in frame
 * @param {FramePrintConfig} config
 */
const framePrint = function (str, config) {
    ({
        frameSize = 30,
        tbt = 1,
        lrt = 1,
        symbol = "*",
        tbSymbol,
        lrSymbol
    } = config || {});

    (!tbSymbol) && (tbSymbol = symbol);
    (!lrSymbol) && (lrSymbol = symbol);

    const maxStringSize = frameSize - lrt * 2;
    const topBottomFrame = ''.padEnd(frameSize, tbSymbol[0]);
    const leftRightFrame = ''.padEnd(lrt, lrSymbol[0]);
    let newStr = str.slice(0, maxStringSize - 2);

    if (newStr.length < maxStringSize) {
        let initialPadding = (maxStringSize + newStr.length) / 2;
        newStr = newStr.padStart(initialPadding);
        newStr = newStr.padEnd(maxStringSize);
    }

    return `
    ${topBottomFrame}
    ${leftRightFrame}${newStr}${leftRightFrame}
    ${topBottomFrame}
    `;
};

module.exports.framePrint = framePrint;
