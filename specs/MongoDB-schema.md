### **MongoDB Schema Design**

```json
{
  "users": {
    "username": "string",
    "password": "string",
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "email": "string",
    "sms_credits": "number",
    "created_at": "Date",
    "payment_details": {
      "card_number": "string",
      "expiry_date": "string",
      "cvv": "string"
    }
  },
  "contacts": {
    "user_id": "ObjectId",
    "contacts": [
      {
        "name": "string",
        "phone_number": "string",
        "created_at": "Date"
      }
    ]
  },
  "sms_logs": {
    "user_id": "ObjectId",
    "message": "string",
    "recipients": [
      {
        "contact_id": "ObjectId",
        "phone_number": "string",
        "status": "string",
        "delivery_time": "Date"
      }
    ],
    "created_at": "Date",
    "status": "string"
  },
  "transactions": {
    "user_id": "ObjectId",
    "amount": "number",
    "type": "string",
    "date": "Date",
    "details": "string"
  }
}
```