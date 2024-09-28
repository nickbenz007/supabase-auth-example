"use server";

import { Stripe } from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

export const checkout = async (
    email: string,
    priceId: string,
    redirectTo: string
) => {
    try {
        const session = await stripe.checkout.sessions.create({
            success_url: redirectTo || process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string,
            cancel_url: process.env.NEXT_PUBLIC_SITE_URL as string,
            customer_email: email,
            line_items: [{ price: priceId, quantity: 1 }],
            mode: "subscription",
        });

        console.log(session.id)

        if(session && session.id){
            console.log("session ID", session.id);
        }

        return JSON.stringify(session);
    } catch (error) {
        console.error(error, "Error: occurred during Stripe checkout");
    }
};
