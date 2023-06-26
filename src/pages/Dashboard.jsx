import React from 'react'
import ProductDetails from '../components/ProductDescription'

const Dashboard = () => {

    const [open, setopen] = React.useState(true)
    const data = {
        "companyUserCode": "63a971ce6af986350ae4376b",
        "categoryId": "643e7a9edb684bac5851d8e1",
        "subCategoryId": "643e7a9fdb684bac5851d8e9",
        "itemNumber": "1020017",
        "itemDescription": "Brew Machine",
        "expiryPeriod": "12",
        "variants": [
            {
                "_id": "643e7aa0db684bac5851d8f8",
                "bpCatalogNumber": "1410",
                "colorCode": "1100010",
                "colorDescription": "Black Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 12",
                "variantId": "643e7aa0db684bac5851d8f8",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8f9",
                "bpCatalogNumber": "1398",
                "colorCode": "1100004",
                "colorDescription": "Bluish Magenta Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 13",
                "variantId": "643e7aa0db684bac5851d8f9",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8fa",
                "bpCatalogNumber": "1394",
                "colorCode": "1100001",
                "colorDescription": "Cyan Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 14",
                "variantId": "643e7aa0db684bac5851d8fa",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8fb",
                "bpCatalogNumber": "1414",
                "colorCode": "1100017",
                "colorDescription": "Flush Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 15",
                "variantId": "643e7aa0db684bac5851d8fb",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8fc",
                "bpCatalogNumber": "1406",
                "colorCode": "1100009",
                "colorDescription": "Lemon Yellow Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 16",
                "variantId": "643e7aa0db684bac5851d8fc",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8fd",
                "bpCatalogNumber": "1404",
                "colorCode": "1100006",
                "colorDescription": "Light Cyan Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 17",
                "variantId": "643e7aa0db684bac5851d8fd",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8fe",
                "bpCatalogNumber": "1402",
                "colorCode": "1100005",
                "colorDescription": "Light Magenta Color",
                "packingCode": "1100019",
                "packingDescription": "NM 1 Litre",
                "saleDescription": "Machine 18",
                "variantId": "643e7aa0db684bac5851d8fe",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d8ff",
                "bpCatalogNumber": "1411",
                "colorCode": "1100010",
                "colorDescription": "Black Color",
                "packingCode": "1100023",
                "packingDescription": "UHB 5 Litre",
                "saleDescription": "Machine 19",
                "variantId": "643e7aa0db684bac5851d8ff",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d900",
                "bpCatalogNumber": "1412",
                "colorCode": "1100010",
                "colorDescription": "Black Color",
                "packingCode": "1100029",
                "packingDescription": "SQ 1 Litre",
                "saleDescription": "Machine 20",
                "variantId": "643e7aa0db684bac5851d900",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d901",
                "bpCatalogNumber": "1399",
                "colorCode": "1100004",
                "colorDescription": "Bluish Magenta Color",
                "packingCode": "1100023",
                "packingDescription": "UHB 5 Litre",
                "saleDescription": "Machine 21",
                "variantId": "643e7aa0db684bac5851d901",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d902",
                "bpCatalogNumber": "1400",
                "colorCode": "1100004",
                "colorDescription": "Bluish Magenta Color",
                "packingCode": "1100029",
                "packingDescription": "SQ 1 Litre",
                "saleDescription": "Machine 22",
                "variantId": "643e7aa0db684bac5851d902",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d903",
                "bpCatalogNumber": "1395",
                "colorCode": "1100001",
                "colorDescription": "Cyan Color",
                "packingCode": "1100023",
                "packingDescription": "UHB 5 Litre",
                "saleDescription": "Machine 23",
                "variantId": "643e7aa0db684bac5851d903",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d904",
                "bpCatalogNumber": "1396",
                "colorCode": "1100001",
                "colorDescription": "Cyan Color",
                "packingCode": "1100029",
                "packingDescription": "SQ 1 Litre",
                "saleDescription": "Machine 24",
                "variantId": "643e7aa0db684bac5851d904",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d905",
                "bpCatalogNumber": "1407",
                "colorCode": "1100009",
                "colorDescription": "Lemon Yellow Color",
                "packingCode": "1100023",
                "packingDescription": "UHB 5 Litre",
                "saleDescription": "Machine 25",
                "variantId": "643e7aa0db684bac5851d905",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d906",
                "bpCatalogNumber": "1408",
                "colorCode": "1100009",
                "colorDescription": "Lemon Yellow Color",
                "packingCode": "1100029",
                "packingDescription": "SQ 1 Litre",
                "saleDescription": "Machine 26",
                "variantId": "643e7aa0db684bac5851d906",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d907",
                "bpCatalogNumber": "1405",
                "colorCode": "1100006",
                "colorDescription": "Light Cyan Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  MAX Light Cyan / 1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d907",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d908",
                "bpCatalogNumber": "1403",
                "colorCode": "1100005",
                "colorDescription": "Light Magenta Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  MAX Light Magenta/ 1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d908",
                "grossPrice": "600"
            },
            {
                "_id": "643e7aa0db684bac5851d909",
                "bpCatalogNumber": "1413",
                "colorCode": "1100010",
                "colorDescription": "Black Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  Xaar MAX Black / 1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d909",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90a",
                "bpCatalogNumber": "1401",
                "colorCode": "1100004",
                "colorDescription": "Bluish Magenta Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  Xaar MAX Bluish Magenta /1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d90a",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90b",
                "bpCatalogNumber": "1397",
                "colorCode": "1100001",
                "colorDescription": "Cyan Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  Xaar MAX Cyan / 1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d90b",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90c",
                "bpCatalogNumber": "1409",
                "colorCode": "1100009",
                "colorDescription": "Lemon Yellow Color",
                "packingCode": "1100059",
                "packingDescription": "1 Ltr.TYCP Bottle",
                "saleDescription": "ZZZ  Xaar MAX Lemon Yellow / 1 LitreTYCP Bottle",
                "variantId": "643e7aa0db684bac5851d90c",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90d",
                "bpCatalogNumber": "4968",
                "colorCode": "1100010",
                "colorDescription": "Black Color",
                "packingCode": "1100048",
                "packingDescription": "5 Ltr Can ( With Side Handle )",
                "saleDescription": "ZZZ Xaar Max Black/ 5 Litre Can (With Side Handle)",
                "variantId": "643e7aa0db684bac5851d90d",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90e",
                "bpCatalogNumber": "4967",
                "colorCode": "1100001",
                "colorDescription": "Cyan Color",
                "packingCode": "1100048",
                "packingDescription": "5 Ltr Can ( With Side Handle )",
                "saleDescription": "ZZZ Xaar Max Cyan/ 5 Litre Can (With Side Handle)",
                "variantId": "643e7aa0db684bac5851d90e",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d90f",
                "bpCatalogNumber": "4966",
                "colorCode": "1100004",
                "colorDescription": "Bluish Magenta Color",
                "packingCode": "1100048",
                "packingDescription": "5 Ltr Can ( With Side Handle )",
                "saleDescription": "ZZZ Xaar Max Magenta/ 5 Litre Can (With Side Handle)",
                "variantId": "643e7aa0db684bac5851d90f",
                "grossPrice": "1000"
            },
            {
                "_id": "643e7aa0db684bac5851d910",
                "bpCatalogNumber": "4965",
                "colorCode": "1100076",
                "colorDescription": "Mustard Yellow",
                "packingCode": "1100048",
                "packingDescription": "5 Ltr Can ( With Side Handle )",
                "saleDescription": "ZZZ Xaar Max Mustard Yellow / 5 Litre Can (With Side Handle)",
                "variantId": "643e7aa0db684bac5851d910",
                "grossPrice": "1000"
            }
        ],
        "productImages": [
            "https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/atInksProducts/product2.png"
        ],
        "productId": "643e7aa0db684bac5851d8f7",
        "currency": {
            "type": "INR",
            "symbol": "₹"
        },
        "priceTerms": "Regular"
    }
    return (
        <div>
            <ProductDetails product={data} open={open} close={() => { setopen(false) }} />
        </div>
    )
}

export default Dashboard