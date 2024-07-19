"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
describe('merge', () => {
    test('merges and sorts three arrays', () => {
        const collection_1 = [1, 9, 7];
        const collection_2 = [2, 5, 8];
        const collection_3 = [6, 4, 3];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('merges and sorts three arrays with empty arrays', () => {
        const collection_1 = [];
        const collection_2 = [];
        const collection_3 = [];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
    test('merges and sorts three arrays with single elements', () => {
        const collection_1 = [1];
        const collection_2 = [2];
        const collection_3 = [3];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3]);
    });
    test('merges and sorts three arrays with duplicate numbers', () => {
        const collection_1 = [1, 1, 3];
        const collection_2 = [3, 6, 6];
        const collection_3 = [8, 8, 9];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 1, 3, 3, 6, 6, 8, 8, 9]);
    });
    test('merges and sorts three arrays with negative numbers', () => {
        const collection_1 = [-3, -2, -1];
        const collection_2 = [0, 1, 2];
        const collection_3 = [5, 3, 1];
        const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(result).toEqual([-3, -2, -1, 0, 1, 1, 2, 3, 5]);
    });
});
