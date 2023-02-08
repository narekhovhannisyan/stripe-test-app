# Subscriptions API

## Table of Contents

- [Subscriptions API](#subscriptions-api)
  - [Table of Contents](#table-of-contents)
  - [Info](#info)
    - [GET **/subscriptions**](#get-subscriptions)

## Info

Authorization is not required.

---

### GET **/subscriptions**

| Parameter | In    | Required | Default | Type   |
| --------- | ----- | -------- | ------- | ------ |
| email     | query | ✔        | ✘       | string |

Request example:

```
POST <YOUR-HOST-HERE>/api/v1/subscriptions?email=valid@mockmail.com
```

Response:

```json
{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "id": 5,
      "customerEmail": "valid@mockmail.com",
      "subscriptionPlanName": "mock-name",
      "subscriptionPlanPrice": 1500
    },
    ...
  ]
}
```

---

**[⬆ back to the top](#table-of-contents)**

*[⬅️ back to the root](/README.md#crypto-vero-backend)*
