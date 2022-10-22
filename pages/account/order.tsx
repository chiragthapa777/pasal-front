import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdManageAccounts, MdShoppingBasket } from 'react-icons/md'
import AccountNav from '../../components/account/AccountNav'
import OrderTable from '../../components/account/OrderTable'

type Props = {}


  const orders = [
    {
      id: 15,
      createdAt: "2022-10-21T05:02:32.849Z",
      updatedAt: "2022-10-21T05:02:32.850Z",
      status: "COMPLETED",
      isBillPrinted: false,
      isPaid: true,
      userId: 7,
      total: 2500,
      discount: 100,
      totalAfterDiscount: 2400,
      vat: 0,
      totalWithVat: 2400,
      otherCharge: 100,
      grandTotal: 2500,
      orderItems: [
        {
          id: 25,
          createdAt: "2022-10-21T05:02:32.870Z",
          updatedAt: "2022-10-21T05:02:32.870Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 15,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 100,
          totalAfterDiscount: 900,
          vat: 0,
          totalWithVat: 900,
          grandTotal: 900,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 26,
          createdAt: "2022-10-21T05:02:32.870Z",
          updatedAt: "2022-10-21T05:02:32.870Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 15,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 27,
          createdAt: "2022-10-21T05:02:32.870Z",
          updatedAt: "2022-10-21T05:02:32.870Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 15,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 16,
      createdAt: "2022-10-21T05:02:37.694Z",
      updatedAt: "2022-10-21T05:02:37.695Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 2500,
      discount: 100,
      totalAfterDiscount: 2400,
      vat: 0,
      totalWithVat: 2400,
      otherCharge: 100,
      grandTotal: 2500,
      orderItems: [
        {
          id: 28,
          createdAt: "2022-10-21T05:02:37.710Z",
          updatedAt: "2022-10-21T05:02:37.711Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 16,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 100,
          totalAfterDiscount: 900,
          vat: 0,
          totalWithVat: 900,
          grandTotal: 900,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 29,
          createdAt: "2022-10-21T05:02:37.710Z",
          updatedAt: "2022-10-21T05:02:37.711Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 16,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 30,
          createdAt: "2022-10-21T05:02:37.710Z",
          updatedAt: "2022-10-21T05:02:37.711Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 16,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 17,
      createdAt: "2022-10-21T05:03:25.098Z",
      updatedAt: "2022-10-21T05:03:25.099Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 2500,
      discount: 100,
      totalAfterDiscount: 2400,
      vat: 0,
      totalWithVat: 2400,
      otherCharge: 100,
      grandTotal: 2500,
      orderItems: [
        {
          id: 31,
          createdAt: "2022-10-21T05:03:25.116Z",
          updatedAt: "2022-10-21T05:03:25.117Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 17,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 100,
          totalAfterDiscount: 900,
          vat: 0,
          totalWithVat: 900,
          grandTotal: 900,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 32,
          createdAt: "2022-10-21T05:03:25.116Z",
          updatedAt: "2022-10-21T05:03:25.117Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 17,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 33,
          createdAt: "2022-10-21T05:03:25.116Z",
          updatedAt: "2022-10-21T05:03:25.117Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 17,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 18,
      createdAt: "2022-10-21T05:04:38.966Z",
      updatedAt: "2022-10-21T05:04:38.967Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 2500,
      discount: 100,
      totalAfterDiscount: 2400,
      vat: 0,
      totalWithVat: 2400,
      otherCharge: 100,
      grandTotal: 2500,
      orderItems: [
        {
          id: 34,
          createdAt: "2022-10-21T05:04:38.987Z",
          updatedAt: "2022-10-21T05:04:38.988Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 18,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 100,
          totalAfterDiscount: 900,
          vat: 0,
          totalWithVat: 900,
          grandTotal: 900,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 35,
          createdAt: "2022-10-21T05:04:38.988Z",
          updatedAt: "2022-10-21T05:04:38.988Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 18,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 36,
          createdAt: "2022-10-21T05:04:38.988Z",
          updatedAt: "2022-10-21T05:04:38.988Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 18,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 13,
      createdAt: "2022-10-21T04:42:20.478Z",
      updatedAt: "2022-10-22T11:30:26.693Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: true,
      userId: 7,
      total: 3500,
      discount: 200,
      totalAfterDiscount: 3300,
      vat: 0,
      totalWithVat: 3300,
      otherCharge: 100,
      grandTotal: 3400,
      orderItems: [
        {
          id: 19,
          createdAt: "2022-10-21T04:42:20.498Z",
          updatedAt: "2022-10-21T04:42:20.499Z",
          status: "PLACED",
          quantity: 2,
          rate: 1000,
          orderId: 13,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 2000,
          discount: 200,
          totalAfterDiscount: 1800,
          vat: 0,
          totalWithVat: 1800,
          grandTotal: 1800,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 20,
          createdAt: "2022-10-21T04:42:20.499Z",
          updatedAt: "2022-10-21T04:42:20.499Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 13,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 21,
          createdAt: "2022-10-21T04:42:20.499Z",
          updatedAt: "2022-10-21T04:42:20.499Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 13,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 14,
      createdAt: "2022-10-21T04:58:03.307Z",
      updatedAt: "2022-10-22T11:34:47.366Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: true,
      userId: 7,
      total: 2500,
      discount: 100,
      totalAfterDiscount: 2400,
      vat: 0,
      totalWithVat: 2400,
      otherCharge: 100,
      grandTotal: 2500,
      orderItems: [
        {
          id: 22,
          createdAt: "2022-10-21T04:58:03.328Z",
          updatedAt: "2022-10-21T04:58:03.329Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 14,
          productId: 1,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 100,
          totalAfterDiscount: 900,
          vat: 0,
          totalWithVat: 900,
          grandTotal: 900,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 23,
          createdAt: "2022-10-21T04:58:03.328Z",
          updatedAt: "2022-10-21T04:58:03.329Z",
          status: "PLACED",
          quantity: 1,
          rate: 1500,
          orderId: 14,
          productId: 2,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1500,
          discount: 0,
          totalAfterDiscount: 1500,
          vat: 0,
          totalWithVat: 1500,
          grandTotal: 1500,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 24,
          createdAt: "2022-10-21T04:58:03.328Z",
          updatedAt: "2022-10-21T04:58:03.329Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 14,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 26,
      createdAt: "2022-10-22T13:13:46.319Z",
      updatedAt: "2022-10-22T13:13:46.320Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 5500,
      discount: 450,
      totalAfterDiscount: 5050,
      vat: 0,
      totalWithVat: 5050,
      otherCharge: 100,
      grandTotal: 5150,
      orderItems: [
        {
          id: 58,
          createdAt: "2022-10-22T13:13:46.340Z",
          updatedAt: "2022-10-22T13:13:46.341Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 26,
          productId: 1,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 0,
          totalAfterDiscount: 1000,
          vat: 0,
          totalWithVat: 1000,
          grandTotal: 1000,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 59,
          createdAt: "2022-10-22T13:13:46.340Z",
          updatedAt: "2022-10-22T13:13:46.341Z",
          status: "PLACED",
          quantity: 3,
          rate: 1500,
          orderId: 26,
          productId: 2,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 4500,
          discount: 450,
          totalAfterDiscount: 4050,
          vat: 0,
          totalWithVat: 4050,
          grandTotal: 4050,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 60,
          createdAt: "2022-10-22T13:13:46.340Z",
          updatedAt: "2022-10-22T13:13:46.341Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 26,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 27,
      createdAt: "2022-10-22T13:13:53.203Z",
      updatedAt: "2022-10-22T13:13:53.203Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 5500,
      discount: 450,
      totalAfterDiscount: 5050,
      vat: 0,
      totalWithVat: 5050,
      otherCharge: 100,
      grandTotal: 5150,
      orderItems: [
        {
          id: 61,
          createdAt: "2022-10-22T13:13:53.205Z",
          updatedAt: "2022-10-22T13:13:53.205Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 27,
          productId: 1,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 0,
          totalAfterDiscount: 1000,
          vat: 0,
          totalWithVat: 1000,
          grandTotal: 1000,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 62,
          createdAt: "2022-10-22T13:13:53.205Z",
          updatedAt: "2022-10-22T13:13:53.205Z",
          status: "PLACED",
          quantity: 3,
          rate: 1500,
          orderId: 27,
          productId: 2,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 4500,
          discount: 450,
          totalAfterDiscount: 4050,
          vat: 0,
          totalWithVat: 4050,
          grandTotal: 4050,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 63,
          createdAt: "2022-10-22T13:13:53.205Z",
          updatedAt: "2022-10-22T13:13:53.205Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 27,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 28,
      createdAt: "2022-10-22T13:13:54.040Z",
      updatedAt: "2022-10-22T13:13:54.040Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 5500,
      discount: 450,
      totalAfterDiscount: 5050,
      vat: 0,
      totalWithVat: 5050,
      otherCharge: 100,
      grandTotal: 5150,
      orderItems: [
        {
          id: 64,
          createdAt: "2022-10-22T13:13:54.044Z",
          updatedAt: "2022-10-22T13:13:54.045Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 28,
          productId: 1,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 0,
          totalAfterDiscount: 1000,
          vat: 0,
          totalWithVat: 1000,
          grandTotal: 1000,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 65,
          createdAt: "2022-10-22T13:13:54.045Z",
          updatedAt: "2022-10-22T13:13:54.045Z",
          status: "PLACED",
          quantity: 3,
          rate: 1500,
          orderId: 28,
          productId: 2,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 4500,
          discount: 450,
          totalAfterDiscount: 4050,
          vat: 0,
          totalWithVat: 4050,
          grandTotal: 4050,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 66,
          createdAt: "2022-10-22T13:13:54.045Z",
          updatedAt: "2022-10-22T13:13:54.045Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 28,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    },
    {
      id: 29,
      createdAt: "2022-10-22T13:13:54.676Z",
      updatedAt: "2022-10-22T13:13:54.677Z",
      status: "PLACED",
      isBillPrinted: false,
      isPaid: false,
      userId: 7,
      total: 5500,
      discount: 450,
      totalAfterDiscount: 5050,
      vat: 0,
      totalWithVat: 5050,
      otherCharge: 100,
      grandTotal: 5150,
      orderItems: [
        {
          id: 67,
          createdAt: "2022-10-22T13:13:54.681Z",
          updatedAt: "2022-10-22T13:13:54.682Z",
          status: "PLACED",
          quantity: 1,
          rate: 1000,
          orderId: 29,
          productId: 1,
          otherChargeId: null,
          discountPercent: 0,
          vatPercent: 0,
          userId: 7,
          total: 1000,
          discount: 0,
          totalAfterDiscount: 1000,
          vat: 0,
          totalWithVat: 1000,
          grandTotal: 1000,
          product: {
            id: 1,
            createdAt: "2022-09-02T14:57:44.203Z",
            updatedAt: "2022-10-22T13:13:54.689Z",
            name: "pant",
            price: 1000,
            desc: "This is jeans pant from zara",
            groupId: null,
            active: true,
            quantity: 6,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 68,
          createdAt: "2022-10-22T13:13:54.682Z",
          updatedAt: "2022-10-22T13:13:54.682Z",
          status: "PLACED",
          quantity: 3,
          rate: 1500,
          orderId: 29,
          productId: 2,
          otherChargeId: null,
          discountPercent: 10,
          vatPercent: 0,
          userId: 7,
          total: 4500,
          discount: 450,
          totalAfterDiscount: 4050,
          vat: 0,
          totalWithVat: 4050,
          grandTotal: 4050,
          product: {
            id: 2,
            createdAt: "2022-09-02T14:59:23.509Z",
            updatedAt: "2022-10-22T13:13:54.698Z",
            name: "Tee shirt",
            price: 1500,
            desc: "This is black tshirt from zara",
            groupId: null,
            active: true,
            quantity: 88,
            vendorId: 2,
            userId: 7,
            unit: "piece"
          },
          othercharges: null
        },
        {
          id: 69,
          createdAt: "2022-10-22T13:13:54.682Z",
          updatedAt: "2022-10-22T13:13:54.682Z",
          status: "PLACED",
          quantity: 1,
          rate: 100,
          orderId: 29,
          productId: null,
          otherChargeId: 1,
          discountPercent: null,
          vatPercent: null,
          userId: 7,
          total: 100,
          discount: 0,
          totalAfterDiscount: 100,
          vat: 0,
          totalWithVat: 100,
          grandTotal: 100,
          product: null,
          othercharges: {
            id: 1,
            createdAt: "2022-10-20T15:06:14.781Z",
            updatedAt: "2022-10-20T15:06:14.808Z",
            name: "delivery",
            desc: "charge for delivery",
            price: 100
          }
        }
      ]
    }
  ]


export default function order({}: Props) {
  return (
    <div className={"accountCss lg:max-w-[1200px] container mx-auto p-1"}>
			{/* upper navigation */}
			<div className="text-sm breadcrumbs text-info">
				<ul className="lg:max-w-[1200px] container">
					<li className="cursor-pointer hover:underline">
						<MdHomeFilled className="mr-1 my-auto" />
						<Link href="/" className="my-auto">
							Home
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdManageAccounts className="mr-1 my-auto" />
						<Link href="/account" className="my-auto">
							Account
						</Link>
					</li>
					<li className="cursor-pointer hover:underline">
						<MdShoppingBasket className="mr-1 my-auto" />
						<Link href="/account/order" className="my-auto">
							My Orders
						</Link>
					</li>
				</ul>
			</div>
			<section className="flex justify-center  items-start content-start">
				<div className="w-[30%] hidden md:block mr-2">
					<AccountNav />
				</div>
				<div className="w-full bg-base-100 drop-shadow-sm px-2 py-4 rounded-md">
					<h1 className="p-1 font-bold text-base-content/80 text-xl border-b uppercase">
						My orders
					</h1>
					<OrderTable orders={orders} />
				</div>
			</section>
		</div>
  )
}