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
        url: 'https://sb-organon-organon-promomats-authoring-tool-mvp.veevavault.com/api/v22.2/vobjects/crm_product__v',
        headers: { 
          'Authorization': '1573B6F87E510CD1F288D1F3DD6512826F474B7529371CED1B76D615740B8C5D5CA4CD3DB6C1B3F0C8D7D21BA6B06C1EC354394D9DD5CC157D5A07958AE8A3EA', 
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
    };
    let configProduct = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://sb-organon-organon-promomats-authoring-tool-mvp.veevavault.com/api/v22.2/vobjects/product__v',
        headers: { 
          'Authorization': '1573B6F87E510CD1F288D1F3DD6512826F474B7529371CED1B76D615740B8C5D5CA4CD3DB6C1B3F0C8D7D21BA6B06C1EC354394D9DD5CC157D5A07958AE8A3EA', 
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