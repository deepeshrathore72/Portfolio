# 📧 EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. Once logged in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. **Important:** Make sure your template has these variable names:
   - `from_name` (sender's name)
   - `from_email` (sender's email)
   - `subject` (message subject)
   - `message` (message content)

5. Click **Save** and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with a random string)
3. Copy this key

## Step 5: Configure Environment Variables

1. Create a file named `.env.local` in your portfolio root folder
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Never commit this file to Git!** (It's already in .gitignore)

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

### "Configuration is missing" error
- Make sure your `.env.local` file is in the root directory
- Restart your development server after adding environment variables

### Email not received
- Check your EmailJS dashboard for failed sends
- Verify your email service is properly connected
- Check spam folder

### Template variables not working
- Ensure template variable names match exactly: `from_name`, `from_email`, `subject`, `message`
- Verify the template is saved and published

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- 1 email service

Perfect for a portfolio website! 🎉

## Production Deployment

When deploying to Vercel:

1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add your three EmailJS variables
4. Redeploy your application

Your contact form will now work in production! ✅
