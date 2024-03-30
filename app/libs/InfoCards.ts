import { Truck, ArrowDownNarrowWide, Gem, ShieldCheck, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Price",
        bodyText: "Buy the highest Quality accounts with the best Service, for the lowest and best Price  on the whole Market!",
        icon: Gem,
        id: 1
    },
    {
        title: "Delivery",
        bodyText: "Get your order delivered rapidly fast, thanks to our Special Modding Team, who get your Order ready in under 24 Hours!",
        icon: Truck,
        id: 2
    },
    {
        title: "Undetected",
        bodyText: "Our Accounts are safe and not flagged neither banned, we only provide high quality Accounts for our Customer!",
        icon: ShieldCheck,
        id: 3
    },
]

export default infoCards