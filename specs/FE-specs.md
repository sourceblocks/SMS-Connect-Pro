### Frontend Design Document for React.js Implementation

---

#### **Design Overview:**

The frontend will be built using React.js, designed to be responsive, intuitive, and easy to navigate. The core navigation will be a sidebar with the main sections: Home, Contacts, SendMessage, and Settings. Each section will have specific components designed for the functionality outlined in the project overview.

---

### **Component Breakdown**

1. **App Layout:**
   - **Sidebar Navigation Component:**
     - A fixed sidebar containing tabs (Home, Contacts, SendMessage, Settings).
     - The sidebar will be collapsible for mobile and smaller screens.
   
   - **Main Content Area:**
     - Displays the selected tab content (Home, Contacts, SendMessage, Settings).
     - Each tab will render different React components.

---

### **Page Components**

1. **Home Component:**
   - **User Profile Section:**
     - Display the user's name, phone number, SMS gateway status.
     - Editable fields for updating profile information.
     - `useState` for managing user profile updates.

   - **Activity Feed:**
     - Displays recent SMS sent, contacts added, and credits remaining.
     - Implement with React hooks (`useEffect`, `useState`) to fetch and display user activity dynamically.

2. **Contacts Component:**
   - **Contact List:**
     - Rendered in a list format using `map()` to loop through contacts.
     - Supports bulk operations (delete, edit, import/export CSV).
     - Component structure: 
       ```jsx
       <ContactList contacts={userContacts} />
       ```

   - **Add Contact Modal:**
     - Pop-up modal for adding a new contact.
     - Form fields for contact name and phone number.
     - Triggered with a button.

3. **SendMessage Component:**
   - **Message Composition Area:**
     - A text box where the user can compose a message.
     - A drop-down or scrollable contact list for selecting recipients.
     - Dynamic summary view with message and recipient stats.

   - **Message Submission Flow:**
     - Once the message is confirmed, a confirmation modal will pop up.
     - After submission, the backend will send the message, and a success/failure notice will be shown.

4. **Settings Component:**
   - **Account Information:**
     - Display the user’s creation date, registered phone number, and credit card information.
     - Editable fields for managing payment details.
   
   - **Credits Overview:**
     - Display remaining SMS credits, with a visual progress bar.
     - Option to manually top-up credits.

---

### **UI Structure & Design:**

1. **Sidebar Layout Example:**
   ```jsx
   <div className="sidebar">
     <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/contacts">Contacts</Link></li>
       <li><Link to="/sendmessage">SendMessage</Link></li>
       <li><Link to="/settings">Settings</Link></li>
     </ul>
   </div>
   <div className="main-content">
     <Route path="/home" component={Home} />
     <Route path="/contacts" component={Contacts} />
     <Route path="/sendmessage" component={SendMessage} />
     <Route path="/settings" component={Settings} />
   </div>
   ```

2. **Responsive Design:**
   - Use CSS media queries to make the sidebar collapsible on smaller screens.
   - For mobile, provide a "hamburger" icon to open the sidebar.
