export interface Product {
    id:            number;
    createdAt?:     Date;
    updatedAt?:     Date;
    name:          string;
    price:         number;
    desc:          string;
    groupId?:       number;
    active:        boolean;
    quantity:      number;
    vendorId:      number;
    userId:        number;
    unit:          string;
    productTags?:   ProductTag[];
    vendor?:        Vendor;
    questions?:     Question[];
    images?:        Image[];
    discounts?:     any[];
    reviews?:       Review[];
    _count?:        Count;
    averageRating?: number;
}

export interface Count {
    reviews:   number;
    questions: number;
}

export interface Image {
    id:         number;
    createdAt:  Date;
    updatedAt:  Date;
    url:        string;
    public_url: string;
    productId:  number;
    desc:       string;
}

export interface ProductTag {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    tagId:     number;
    productId: number;
    tag:       Tag;
}

export interface Tag {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    name:      string;
    desc:      null | string;
}

export interface Question {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    question:  string;
    answered:  boolean;
    userId:    number;
    productId: number;
    answers:   Answer[];
    user:      User;
}

export interface Answer {
    id:         number;
    createdAt:  Date;
    updatedAt:  Date;
    answers:    string;
    userId:     number;
    questionId: number;
    user:       User;
}

export interface User {
    id:    number;
    name:  string;
    email: string;
}

export interface Review {
    id:        number;
    createdAt: Date;
    updatedAt: Date;
    rating:    number;
    feedback:  string;
    userId:    number;
    productId: number;
    user:      User;
}

export interface Vendor {
    id:              number;
    createdAt:       Date;
    updatedAt:       Date;
    email:           string;
    name:            string;
    pan:             string;
    desc:            string;
    active:          boolean;
    requestAccepted: boolean;
}
