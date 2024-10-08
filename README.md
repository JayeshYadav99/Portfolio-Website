

# 🚀 Dynamic Portfolio Website

![Portfolio Banner](https://github.com/user-attachments/assets/613f1b3a-99b2-411d-885d-076337ee5b98)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJayeshYadav99%2FPortfolio-Website&env=MONGO_URL%2CADMIN_USERNAME%2CADMIN_PASSWORD%2CDB_NAME&envDescription=MONGO_URL%20is%20mongodb%20connection%20string&demo-title=Dynamic%20Portfolio&demo-description=A%20customizable%20portfolio%20starter%20with%20admin%20controls&demo-url=https%3A%2F%2Fportfolio-website-genai.vercel.app%2F&demo-image=https%3A%2F%2Fres.cloudinary.com%2Fdifz9x1sc%2Fimage%2Fupload%2Fv1728220528%2Fqaltyrsrgx7uiplniu5f.png)

## 🌟 Overview

Welcome to the **Dynamic Portfolio Website** – your go-to solution for creating a stunning, live portfolio in **minutes**! Whether you're a developer, designer, or creative professional, our platform empowers you to showcase your work effortlessly. With a simple **one-click Deploy to Vercel** button and an intuitive **/admin** form, launching and managing your personalized portfolio has never been easier.

### ✨ Key Highlights:
- **One-Click Deployment**: Launch your live portfolio instantly using the **Deploy to Vercel** button.
- **Easy Content Management**: Update your portfolio effortlessly through the secure **/admin** panel.
- **Secure Admin Access**: Protect your admin dashboard with credentials stored safely in environment variables.
- **Real-Time Updates**: Any changes made in the admin panel reflect immediately on your live site.
- **Responsive & SEO Optimized**: Ensure your portfolio looks great on all devices and ranks well on search engines.

---

## 🔧 Features

- **Instant Deployment**: Deploy your personalized portfolio live on Vercel with just a single click.
- **Dynamic Admin Panel**: Access the `/admin` route to add or modify your personal information, projects, achievements, and more.
- **Responsive Design**: Your portfolio will look stunning on desktops, tablets, and mobile devices.
- **Secure Access**: The admin panel is safeguarded with a username and password stored in the `.env` file.
- **Project Showcase**: Highlight your best work with detailed project cards, images, and descriptions.
- **Achievement Section**: Display your accomplishments, certifications, and accolades.
- **Contact Form**: Allow visitors to reach out to you directly through your portfolio.
- **SEO Optimized**: Enhance your online visibility with built-in SEO best practices.(upcoming)

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB (for dynamic content storage)
- **Authentication**: Password-protected admin panel using environment variables
- **Deployment**: Vercel (for seamless one-click deployment)

---

## 🚀 Getting Started

### 📝 Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MongoDB** account
- **Vercel** account (for deployment)

### 🛠️ Installation & Deployment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JayeshYadav99/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**
   - Rename `.env.example` to `.env.local`.
   - Populate the following variables:
     - `MONGO_URL` – Your MongoDB connection string.
     - `ADMIN_USERNAME` – Desired admin username.
     - `ADMIN_PASSWORD` – Desired admin password.

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view it locally.

5. **Deploy to Vercel:**
   - Click the **Deploy to Vercel** button above.
   - Follow the prompts to link your GitHub repository.
   - Enter the required environment variables (`MONGO_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`) in the Vercel dashboard.
   - Complete the deployment process.

---

## 📋 Usage

### 🌐 Deploy Your Live Portfolio

1. **Click the Deploy Button:**
   - Use the **Deploy to Vercel** button at the top of this README to initiate the deployment process.
   - Vercel will guide you through cloning the repository and setting up your environment.

2. **Set Up Environment Variables:**
   - During the deployment process, Vercel will prompt you to enter necessary environment variables:
     - `MONGO_URL` – Your MongoDB connection string.
     - `ADMIN_USERNAME` – Choose a secure admin username.
     - `ADMIN_PASSWORD` – Choose a strong admin password.
     - `DB_NAME`- choose a database name 

3. **Access Your Live Portfolio:**
   - Once deployed, navigate to your unique Vercel URL to view your live portfolio.

### 🛠️ Manage Your Portfolio

1. **Access the Admin Panel:**
   - Go to `https://your-deployed-portfolio.vercel.app/admin`.
   
2. **Log In:**
   - Enter the **ADMIN_USERNAME** and **ADMIN_PASSWORD** you set during deployment.

3. **Update Your Content:**
   - **Personal Information**: Edit your bio, contact details, and social links.
   - **Projects**: Add new projects, update existing ones, or remove outdated projects.
   - **Achievements**: Showcase your certifications, awards, and other accomplishments.
   - **Contact Form**: Modify how visitors can reach out to you.

4. **Save Changes:**
   - All updates are saved to the database and reflected instantly on your live site.

---

## 🎨 Customization

- **Tailwind CSS**:
  - Customize the design by editing `tailwind.config.js`.
  
- **Components**:
  - Modify or add new components in the `components` directory to change the layout and functionality.

- **Admin Panel**:
  - Enhance or adjust the admin functionalities by editing files in the `pages/admin` directory.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

For any inquiries or support, feel free to reach out via the contact form on the admin panel once deployed.

---

**Ready to showcase your work?** Click the **Deploy to Vercel** button above and get your live portfolio up and running in minutes!

---
