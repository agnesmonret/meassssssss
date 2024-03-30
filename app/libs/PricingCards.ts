interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 15.99,
        title: "Mod your Account",
        benefits: [
            "Select your Level from 2-8000",
            "Unlock all Stats",
            "Select your money from 1-5 Billion",
            "Unlock Gender Change",
            "Unlock R* Admin DLC",
            "Clear Bad Sport",
            "Remove CEO Ban",
        ],
        id: 1,
        oneliner: "Get your own Account modded"
    },
    {
        price: 22.99,
        title: "Modded Account",
        benefits: [
            "Everything listed in Mod your Account",
            "Custom Stats",
            "Select your money from 5-10 Billion",
            "New Rockstar Account",
            "Unlock all Items, Clothes etc.",
            "Access to a new Rockstar Account",
            "24h Warranty",
        ],
        id: 2,
        oneliner: "Buy a new modded Account"
    },
]

export default pricingCards