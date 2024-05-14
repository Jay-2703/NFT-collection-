let NFT_collection = [];

function mintNFT(name, nft_id, nft_date, nft_price) {
    const nft = {
        "name": name,
        "nft_id": nft_id,
        "nft_date": nft_date,
        "nft_price": nft_price
    };
    NFT_collection.push(nft);
    console.log("Minted: " + name);
}

function listNFTs() {
    for (let i = 0; i < NFT_collection.length; i++) {
        console.log("---------------------");
        console.log("ID: " + (i + 1));
        console.log("NAME: " + NFT_collection[i].name);
        console.log("UNIQUE_ID: " + NFT_collection[i].nft_id);
        console.log("DATE: " + NFT_collection[i].nft_date);
        console.log("PRICE: " + NFT_collection[i].nft_price);
    }
}

function getTotalSupply() {
    console.log(NFT_collection.length);
}

mintNFT("Tom", "4938482", "10-20-24", "1,000,000");
mintNFT("Oggie", "3928293", "10-18-24", "2,500,000");
mintNFT("jerry", "4245422", "10-23-24", "1,000,000");

listNFTs();
getTotalSupply();
