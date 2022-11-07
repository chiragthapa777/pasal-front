
export interface OrderItems {
    id:                 number;
    createdAt:          Date;
    updatedAt:          Date;
    status:             string;
    quantity:           number;
    rate:               number;
    orderId:            number;
    productId:          number;
    otherChargeId:      null;
    discountPercent:    number;
    vatPercent:         number;
    userId:             number;
    total:              number;
    discount:           number;
    totalAfterDiscount: number;
    vat:                number;
    totalWithVat:       number;
    grandTotal:         number;
    product:            {
		id:        number;
		createdAt: Date;
		updatedAt: Date;
		name:      string;
		price:     number;
		desc:      string;
		groupId:   null;
		active:    boolean;
		quantity:  number;
		vendorId:  number;
		userId:    number;
		unit:      string;
	};
}