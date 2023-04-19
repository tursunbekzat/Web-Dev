export interface ICompany {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
}

export interface IVacancy {
    id: number;
    name: string;
    description: string;
    salary: number;
    company: ICompany;
}