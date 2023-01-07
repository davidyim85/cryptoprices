export const priceLoader = async ({ params }) => {
 

    const symbol = params.symbol;

    const apiKey = "D8F48E68-7863-4CC7-A460-DED8B205ED83"; //this NEED TO BE YOUR KEY!
    return (
        await fetch(
            `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
        )
    ).json();
};
