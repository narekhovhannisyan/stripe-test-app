# Stripe Webhook

## Table of Contents

- [Stripe Webhook](#stripe-webhook)
  - [Table of Contents](#table-of-contents)
  - [Info](#info)
    - [POST **/webhook/payments**](#post-webhookpayments)

## Info

Authorization is required.

`STRIPE_WEBHOOK_SECRET` env variable is used to verify if request comes from [Stripe Signature](https://stripe.com/docs/webhooks/signatures).

---

### POST **/webhook/payments**

Listen for events on Stripe account so integration can automatically trigger reactions.

For event example check [Stripe Events](https://stripe.com/docs/webhooks/stripe-events).

For detailes please see [Stripe Webhook](https://stripe.com/docs/webhooks).

---

**[⬆ back to the top](#table-of-contents)**

*[⬅️ back to the root](/README.md#go-squire-backend)*
