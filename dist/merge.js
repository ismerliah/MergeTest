"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const mergeArray = [...collection_1, ...collection_2, ...collection_3];
    for (let i = 0; i < mergeArray.length; i++) {
        for (let j = i + 1; j < mergeArray.length; j++) {
            if (mergeArray[i] > mergeArray[j]) {
                let temp = mergeArray[i];
                mergeArray[i] = mergeArray[j];
                mergeArray[j] = temp;
            }
        }
    }
    return mergeArray;
}
