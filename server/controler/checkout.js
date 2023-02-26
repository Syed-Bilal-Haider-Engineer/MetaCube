
import configureStripe from "stripe";
// const SECRET_KEY = "sk_test_51MNHzbF5wRQ0Uvcs6AuLwHH3pdbL8x2W4NLvnOPgLTUmlZ9WvQcNuMyPixLJ8FD4wQXJI1xifmZQa5U14ujvq9g900awNYi7K3"
console.log(process.env.SECRET_KEY, "------->");
const stripe = configureStripe(process.env.SECRET_KEY);

export const checkOutHandler = async (product, token) => {
  try {
    if (token && product) {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      const idempotencyKey = (Math.random() + 1).toString(36).substring(7);
      const charge = await stripe.charges.create(
        {
          amount: product.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
          },
        },
        {
          idempotencyKey,
        }
      );

      return { charge, customer };
    }
  } catch (error) {
    console.log(error, "striperr---->");
    return { charge: null, customer: null };
  }
};
