// This is the solution provided by chatgpt

const findDuplicates = (arr1, arr2) => {
    const uniqueIds = new Set();
    const result = [];

    arr1.forEach((arr1Element) => {
        const duplicateArr2 = arr2.find((arr2Element) => arr2Element.id === arr1Element.id);
        if (duplicateArr2 && !uniqueIds.has(duplicateArr2.id)) {
            result.push(duplicateArr2);
            uniqueIds.add(duplicateArr2.id);
        }
    });

    console.log('result', result);
}

// Example usage:
const arr1 = [
    { id: 1, name: 'Object 1' },
    { id: 2, name: 'Object 2' },
    { id: 3, name: 'Object 3' },
];

const arr2 = [
    { id: 2, name: 'Duplicate Object' },
    { id: 4, name: 'Object 4' },
    { id: 1, name: 'Another Duplicate' },
];

findDuplicates(arr1, arr2);
