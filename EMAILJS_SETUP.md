# EmailJS Setup Guide for Contact Form

## Overview
This guide will help you set up EmailJS to send emails from your portfolio contact form to your email address: `abhishekns142@gmail.com`

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (abhishekns142@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New message from {{from_name}} - {{subject}}
```

**Email Body:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code
Replace the placeholder values in `src/components/Contact.js`:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (abhishekns142@gmail.com) for the message

## Important Notes
- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Security**: Your public key is safe to expose in frontend code
- **Spam Protection**: EmailJS includes basic spam protection
- **Email Delivery**: Emails are typically delivered within a few seconds

## Troubleshooting
- If emails aren't received, check your spam folder
- Verify all IDs are correctly copied
- Check the browser console for error messages
- Ensure your Gmail account allows "less secure app access" or use OAuth2

## Alternative: Use Environment Variables
For better security, you can use environment variables:

1. Create `.env` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.js:
```javascript
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

