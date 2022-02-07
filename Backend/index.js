const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51KQCoWBW0vi5VLWlqDqmELDgr3jiegqmWEuvOeja6ElrApmunCI5vZzP93dYcsnNJDSuubY4bHB2GphlXgo5Zy9J00SY40NrWp");
// const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { cartItems, token,totalPrice } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: "cad",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${cartItems}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

// app.listen(8080);
app.listen({port : 5000}, async() =>{
    console.log("Server is running");
})

