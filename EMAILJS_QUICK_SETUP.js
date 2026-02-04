// EMAILJS QUICK SETUP - Follow these steps to get emails working!

/*
STEP 1: Go to https://www.emailjs.com/ and sign up

STEP 2: After signing up, go to "Email Services" and click "Add New Service"
   - Choose "Gmail" 
   - Connect your Gmail account (abhishekns142@gmail.com)
   - Copy the Service ID (looks like: service_abc123)

STEP 3: Go to "Email Templates" and click "Create New Template"
   - Subject: New message from {{from_name}} - {{subject}}
   - Body: 
     You have received a new message from your portfolio website:

     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}

     Message:
     {{message}}

     ---
     This message was sent from your portfolio contact form.
   - Save and copy the Template ID (looks like: template_xyz789)

STEP 4: Go to "Account" → "API Keys" and copy your Public Key (looks like: user_def456)

STEP 5: Update the Contact.js file with your real credentials:
   Replace these lines in src/components/Contact.js:
   
   const EMAILJS_SERVICE_ID = 'service_abc123'; // ← Replace with your real Service ID
   const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // ← Replace with your real Template ID  
   const EMAILJS_PUBLIC_KEY = 'user_def456'; // ← Replace with your real Public Key

STEP 6: Test the form by filling it out and submitting - you should receive an email at abhishekns142@gmail.com!

IMPORTANT: The form will show errors until you complete this setup.
*/

// Example of what your final configuration should look like:
const EXAMPLE_CONFIG = {
  serviceId: 'service_abc123', // Your actual service ID
  templateId: 'template_xyz789', // Your actual template ID
  publicKey: 'user_def456' // Your actual public key
};

export default EXAMPLE_CONFIG;
