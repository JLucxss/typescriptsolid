export interface CustomerOrder {
    getName(): string
    //IND = identification number
    getIDN(): string
}

export interface IndividualCustomerProtocol {
    firstName: string
    lastName: string
    cpf: string
}

export interface EnterpriseCustomerProtocol {
    name: string
    cnpj: string
}
