🎫 PlannedIt: The Real-Time Event Ticketing Platform
Welcome to PlannedIt, a modern, full-stack event ticketing platform engineered for real-time performance and scalability. Built with Next.js 15, Convex, Clerk, and Stripe Connect, this application provides a seamless experience for both event organizers and attendees, featuring a sophisticated queuing system, live sales data, and secure, direct payments.

✨ Core Features
PlannedIt is a comprehensive solution for modern event ticketing.

For Event Attendees
🎫 Live Ticket Availability: Watch ticket counts update in real-time, so you always know what's available.

⚡ Intelligent Queuing System: When demand is high, our fair queuing system reserves your spot and provides live position updates.

🕒 Time-Sensitive Offers: Once it's your turn, you have a limited time to complete your purchase, ensuring tickets go to active buyers.

📲 Digital Tickets & QR Codes: Access your tickets on any device and use the secure QR code for entry.

🔒 Secure Stripe Payments: Purchase with confidence through our secure and reliable Stripe-powered checkout.

💸 Automated Refunds: If an event is canceled, receive your refund automatically without any hassle.

For Event Organizers
💰 Direct Payouts with Stripe Connect: Receive your earnings directly and securely through a dedicated Stripe Connect account.

📊 Real-Time Sales Dashboard: Monitor your ticket sales and revenue as they happen with a live analytics dashboard.

🎯 Automated Waitlist Management: Let the platform handle the queue, automatically offering tickets to the next person in line.

🎟️ Customizable Ticket Limits: Set purchase limits per customer to ensure fair distribution.

🔄 Automatic Ticket Recycling: If a buyer's time expires, their ticket is automatically released back into the pool or offered to the next person in the queue.

❌ Easy Event Cancellation: Cancel events and trigger automatic, bulk refunds to all ticket holders with a single click.

🏗️ Architecture & Technical Highlights
🚀 Real-Time Backend: Powered by Convex, all data, from ticket availability to queue positions, is updated live across all clients.

👤 Secure User Management: Clerk handles user authentication, providing a secure and seamless sign-in/sign-up experience.

💳 Advanced Payment Integration: Stripe Connect facilitates complex payment flows, including direct payouts to organizers and automated refunds.

🛡️ Built-in Rate Limiting: Protects against bots and ensures fair access during high-traffic ticket sales.

🎨 Modern & Responsive UI: A sleek interface built with Tailwind CSS v4 and shadcn/ui, ensuring a great experience on any device.

🔔 Instant User Feedback: Sonner toast notifications provide immediate feedback for actions like joining a queue or a successful purchase.

💫 Engaging Micro-interactions: Smooth transitions and loading states create a polished and professional user experience.

🛠️ Tech Stack
PlannedIt leverages a powerful and modern set of technologies, as defined in package.json:

Category

Technology

Framework

Next.js (v15.3.5)

UI Library

React (v19)

Backend/DB

Convex (v1.25.2)

Authentication

Clerk

Payments

Stripe Connect

Styling

Tailwind CSS (v4)

UI Components

shadcn/ui

Form Management

React Hook Form & Zod

Language

TypeScript (v5)

⚙️ Getting Started
Follow these steps to set up a local instance of PlannedIt for development.

Prerequisites
Node.js v20 or later

An active account with Convex, Clerk, and Stripe.

Environment Variables
First, create a .env.local file in the root of your project and populate it with the following keys from your service dashboards.

# Convex URL from your project dashboard
NEXT_PUBLIC_CONVEX_URL=

# Clerk keys from your application dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Stripe keys and webhook secret
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Your local development URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

Installation & Setup
Clone the Repository

git clone https://github.com/this-is-rachit/PlannedIt.git
cd PlannedIt

Install Dependencies
Use the --legacy-peer-deps flag to ensure compatibility with all package versions.

npm install --legacy-peer-deps

Run Convex & the Application
You'll need two separate terminal sessions.

In the first terminal, start the Convex development process. This syncs your backend schema and functions.

npx convex dev

In the second terminal, start the Next.js development server with Turbopack for maximum speed.

npm run dev

Access the Application
Open your browser and navigate to http://localhost:3000.

Setting Up Webhooks for Local Development
To test Stripe payments and webhooks locally, you need to forward events to your running application.

Install the Stripe CLI (follow the official instructions here).

Log in to the Stripe CLI

stripe login

Forward Webhooks
Run the following command to forward Stripe events to your local webhook handler.

stripe listen --forward-to localhost:3000/api/webhooks/stripe

The CLI will output a webhook signing secret (whsec_...). Copy this value and add it to your .env.local file as STRIPE_WEBHOOK_SECRET. Keep this terminal session running during development.

🚀 Platform Usage
As an Event Organizer
Sign up and create an account.

Complete the Stripe Connect onboarding process to set up your payout account.

Create a new event, providing details like date, time, venue, and total ticket quantity.

Publish the event to make it visible on the marketplace.

As an Attendee
Browse the marketplace for upcoming events.

Select an event and join the queue if it's a high-demand event.

When it's your turn, you'll receive an offer to purchase tickets.

Complete the secure checkout within the time limit.

Access your digital ticket with its unique QR code in your account profile.

🤝 Contributing
Contributions are welcome! If you have suggestions for improving PlannedIt, please feel free to fork the repo and create a pull request.

Fork the Project

Create your Feature Branch (git checkout -b feature/NewAmazingFeature)

Commit your Changes (git commit -m 'Add some NewAmazingFeature')

Push to the Branch (git push origin feature/NewAmazingFeature)

Open a Pull Request

