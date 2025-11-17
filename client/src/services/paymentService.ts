// paymentService.ts

import axios from 'axios';

const PAYPAL_API_URL = 'https://api.paypal.com';

export const createPayPalPayment = async (amount: number, description: string) => {
    const response = await axios.post(`${PAYPAL_API_URL}/v1/payments/payment`, {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        transactions: [{
            amount: {
                total: amount.toFixed(2),
                currency: 'USD',
            },
            description,
        }],
        redirect_urls: {
            return_url: 'http://your-return-url.com',
            cancel_url: 'http://your-cancel-url.com',
        },
    });
    return response.data;
};

export const executePayPalPayment = async (paymentId: string, payerId: string) => {
    const response = await axios.post(`${PAYPAL_API_URL}/v1/payments/payment/${paymentId}/execute`, {
        payer_id: payerId,
    });
    return response.data;
};

export const refundPayPalPayment = async (saleId: string, amount: number, currency: string) => {
    const response = await axios.post(`${PAYPAL_API_URL}/v1/payments/sale/${saleId}/refund`, {
        amount: {
            total: amount.toFixed(2),
            currency,
        },
    });
    return response.data;
};
