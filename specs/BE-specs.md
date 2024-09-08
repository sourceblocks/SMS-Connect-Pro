
### **Document for Backend Service (AWS Elastic Beanstalk - Node.js)**

#### **Overview:**
This Node.js backend service will handle the core functionality of SMS-Connect Pro. It will run on AWS Elastic Beanstalk and leverage AWS services like S3 for data storage, SNS for sending SMS messages, and Lambda for certain background tasks.

#### **Key Features:**
- User authentication (JWT-based)
- SMS message sending via external gateway
- Contact management (CRUD operations)
- SMS logs and message status tracking
- Payment integration for SMS credits
- RESTful API for frontend integration

---

### **API Endpoints Design**

1. **User Management:**
   - **POST** `/api/v1/users/register`  
     Registers a new user.
   - **POST** `/api/v1/users/login`  
     Authenticates a user and provides a JWT token.

2. **Contacts Management:**
   - **GET** `/api/v1/contacts`  
     Retrieves the list of contacts for a logged-in user.
   - **POST** `/api/v1/contacts`  
     Adds a new contact for the logged-in user.
   - **DELETE** `/api/v1/contacts/:id`  
     Deletes a contact by ID.

3. **SMS Sending:**
   - **POST** `/api/v1/sms/send`  
     Sends an SMS to the selected contacts, expects payload:
     ```json
     {
       "message": "string",
       "recipients": ["contact_id1", "contact_id2"]
     }
     ```

4. **Logs & History:**
   - **GET** `/api/v1/sms/logs`  
     Retrieves SMS logs for a user, can be filtered by date range.

5. **Payment & Credits:**
   - **POST** `/api/v1/payments/topup`  
     Initiates a payment for topping up SMS credits.
   - **GET** `/api/v1/users/credits`  
     Retrieves the remaining SMS credits for the user.

---

### **Backend Service Structure**

1. **Project Structure:**
   ```
   /src
     /controllers
       authController.js
       contactController.js
       smsController.js
     /models
       User.js
       Contact.js
       SmsLog.js
     /routes
       authRoutes.js
       contactRoutes.js
       smsRoutes.js
     /services
       smsService.js
       paymentService.js
   ```

2. **Sample Code Snippet for Sending SMS (Using SNS):**

```javascript
const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.sendSms = async (message, phoneNumbers) => {
  const promises = phoneNumbers.map((number) => {
    return sns.publish({
      Message: message,
      PhoneNumber: number,
    }).promise();
  });
  return Promise.all(promises);
};
```

3. **AWS Elastic Beanstalk Configuration:**
   - **Node.js Runtime**: Ensure Node.js 14.x is selected for the environment.
   - **Environment Variables**: Set environment variables in Elastic Beanstalk for:
     - `JWT_SECRET`
     - `DB_URI` (MongoDB connection string)
     - `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for SNS integration
   - **Scaling & Load Balancing**: Configure auto-scaling based on CPU usage for better performance under load.

