export interface Recipe {
    id: number,
    name: string,
    description: string;
    ingredients: [];
    steps:string;
    national: string;
    category: string;
    image: string;
    ischoosen: boolean
    islike: boolean
}

export let categories = [
    "All",
    "Dairy products",
    "Meat dishes",
    "Soup dishes",
    "Flour dishes",
    "Grain products",
    "Fish dishes",
    "Fruit products"
]