

# 🚀 Dynamic Portfolio Website

![Portfolio Banner](https://github.com/user-attachments/assets/613f1b3a-99b2-411d-885d-076337ee5b98)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJayeshYadav99%2FPortfolio-Website&env=MONGO_URL,ADMIN_USERNAME,ADMIN_PASSWORD&envDescription=MONGO_URL%20is%20mongodb%20connection%20string&demo-title=Dynamic%20Portfolio&demo-description=A%20customizable%20portfolio%20starter%20with%20admin%20controls&demo-url=https%3A%2F%2Fportfolio-website-genai.vercel.app%2F&demo-image=https%3A%2F%2Fres.cloudinary.com%2Fdifz9x1sc%2Fimage%2Fupload%2Fv1728220528%2Fqaltyrsrgx7uiplniu5f.png)

## Overview

The **Dynamic Portfolio Website** is a fully customizable, easy-to-deploy portfolio solution, perfect for developers, designers, and creatives who want to showcase their work with full control. Deploy your portfolio in **minutes** with the **one-click** Vercel button, and manage everything through a simple yet powerful admin panel.

### 🛠 **Key Features:**

- **One-Click Deployment**: Deploy your own portfolio with a single click on Vercel.
- **Dynamic Admin Panel**: Easily modify your personal details, projects, achievements, and more via the `/admin` route.
- **Responsive Design**: Looks amazing on all devices.
- **Admin Security**: Protect your admin panel using a **username** and **password** stored securely in `.env` file.
- **Project Showcase**: Highlight your projects with detailed cards, images, and descriptions.
- **Real-Time Updates**: Instantly update content and see changes reflected on your live site.
- **SEO Optimized**: Improve your online visibility with built-in SEO best practices.

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB (used to store portfolio data dynamically)
- **Authentication**: Password-protected admin panel using environment variables
- **Deployment**: Vercel (for seamless one-click deployment)

---

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dynamic-portfolio.git
   cd dynamic-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your **MongoDB connection string** and other required credentials like **ADMIN_USERNAME** and **ADMIN_PASSWORD**.

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open `http://localhost:3000` in your browser to see the portfolio live on your local machine.

---

## Usage

### Admin Panel Access

1. Navigate to `http://localhost:3000/admin` to access the admin panel.
2. Log in using the credentials you added to `.env.local`:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`

3. Once logged in, you can:
   - Add/Edit/Delete personal information
   - Add/Edit/Delete projects
   - Update achievements
   - Customize contact details

---

## Customization

- Modify the **Tailwind CSS** styles in `tailwind.config.js` to change the theme and design.
- Change the portfolio structure by editing components in the `components` directory.
- Customize the admin panel by modifying files in the `pages/admin` directory.

---

## Deployment

Deploy the portfolio to **Vercel** in just a few simple steps:

1. Push your customized portfolio to a GitHub repository.
2. Click the **"Deploy to Vercel"** button or import your repository directly from the Vercel dashboard.
3. Set your **environment variables** (MongoDB connection string, admin credentials) in the Vercel project settings.
4. Deploy and enjoy your dynamic portfolio!

For an easier process, simply click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJayeshYadav99%2FPortfolio-Website&env=MONGO_URL,ADMIN_USERNAME,ADMIN_PASSWORD&envDescription=MONGO_URL%20is%20mongodb%20connection%20string&demo-title=Dynamic%20Portfolio&demo-description=A%20customizable%20portfolio%20starter%20with%20admin%20controls&demo-url=https%3A%2F%2Fportfolio-website-genai.vercel.app%2F&demo-image=https%3A%2F%2Fres.cloudinary.com%2Fdifz9x1sc%2Fimage%2Fupload%2Fv1728220528%2Fqaltyrsrgx7uiplniu5f.png)

---

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
