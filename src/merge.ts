export function merge(collection_1:number[], collection_2: number[], collection_3: number[]) : number [] {
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