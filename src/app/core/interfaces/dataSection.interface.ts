export interface DataSection {
    dataSection: Data,
    dataCard: DataCard[] | DataPrice[] | DataTeam[] | DataRecentPost[] |any[]
}

export interface Data {
    title: string,
    text: string,
}


export interface DataPrice {
    src: string,
    price: string | number,
    discountPrice: string | number,
    btnText: string
}

export interface DataCard {
    title: string,
    text: string,
    src: string
}

export interface DataTeam {
    src:string,
    name: string,
    charge: string,
}

export interface DataBanner{
    src: string
    clients: number,
    text: string,
}
export interface DataRecentPost{
    src: string
    title: string,
    subtitle: string,
    text: string,
    btnText: string,
}


