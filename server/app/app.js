import express from 'express';
import path from "path";
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();
import dbConnect from '../config/dbConnect.js';
import Order from '../model/Order.js';
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js';
import userRouter from '../routes/usersRoute.js';
import productsRouter from '../routes/productsRoute.js';
import categoriesRouter from '../routes/categoriesRoute.js';
import brandsRouter from "../routes/brandsRoute.js";
import colorRouter from '../routes/colorsRoute.js';
import reviewRouter from "../routes/reviewsRoute.js";
import orderRouter from '../routes/ordersRoute.js';
import couponRouter from '../routes/couponsRoute.js';

// db connect
dbConnect();
const app = express();
// stripe webhook
// stripe instance
const stripe = new Stripe(process.env.STRIPE_KEY)

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.END_POINT_SECRET;

app.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    // console.log(event);
  } catch (err) {
    console.log(`err ${err.message}`);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    // update the order
    const session = event.data.object;
    const { orderId } = session.metadata;
    const paymentStatus = session.payment_status;
    const paymentMethod = session.payment_method_types[0];
    const totalAmount = session.amount_total;
    const currency = session.currency;

    // find order by id
    const order = await Order.findByIdAndUpdate(
      JSON.parse(orderId),
      {
        totalPrice: totalAmount / 100,
        currency,
        paymentMethod,
        paymentStatus,
      },
      {
        new: true
      }
    );
    // console.log(order);
  } else {
    return;
  }
  // // Handle the event
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event payment_intent.succeeded
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

// pass incoming data
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));

//server static files
app.use(express.static("public"));
//routes
//Home route
app.get("/", (req, res) => {
  res.sendFile(path.join("public", "index.html"));
});

// routes
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/products/", productsRouter);
app.use("/api/v1/categories/", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorRouter);
app.use("/api/v1/reviews/", reviewRouter);
app.use("/api/v1/orders/", orderRouter);
app.use("/api/v1/coupons/", couponRouter);

// err middleware
app.use(notFound);
app.use(globalErrhandler)

export default app;