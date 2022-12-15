export interface Payment {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    amount:    number;
    remark:    string;
    note:      null;
    mode:      string;
    addedBy:   number;
    orderId:   number;
    user:      User;
}

export interface User {
    id:          number;
    createdAt:   Date;
    updatedAt:   Date;
    email:       string;
    password:    string;
    name:        string;
    role:        string;
    number:      string;
    vendorId:    number;
    vendorAdmin: boolean;
}
