import axios from 'axios';

const findDuplicates = (arr1, arr2) => {
    const result = arr1.reduce((acc, arr1Element) => {
        const duplicateArr2 = arr2.find((arr2Element) => arr2Element.id === arr1Element.id);
        if (duplicateArr2) {
            const found = acc.some((accElement) => accElement.id === duplicateArr2.id);
            if(!found) acc.push(duplicateArr2);
        }
        return acc;
    }, []);
    console.log('result', result);
}

export const compare2ObjectsArray = async () => {
    console.log('Hello compare2ObjectsArray');
    let configCRMProduct = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'xxx',
        headers: { 
          'Authorization': 'xxxx', 
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
    };
    let configProduct = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'xxxx',
        headers: { 
          'Authorization': 'xxxx', 
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
    };
    try {
        const { data: { data: crmProductData } } = await axios(configCRMProduct);
        const { data: { data: productData } } = await axios(configProduct);
        console.log('data: crmProductData', crmProductData);
        console.log('data: productData', productData);
        findDuplicates(crmProductData, productData);
    } catch (error) {
        console.log(error)
    }
}
compare2ObjectsArray();