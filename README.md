# Dynamic Portfolio Website

![Portfolio Banner](https://github.com/user-attachments/assets/613f1b3a-99b2-411d-885d-076337ee5b98)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJayeshYadav99%2FPortfolio-Website&env=MONGO_URL,ADMIN_USERNAME,ADMIN_PASSWORD&envDescription=MONGO_URL%20is%20mongodb%20connection%20string&demo-title=Dynamic%20Portfolio&demo-description=A%20customizable%20portfolio%20starter%20with%20admin%20controls&demo-url=https%3A%2F%2Fportfolio-website-genai.vercel.app%2F&demo-image=https%3A%2F%2Fres.cloudinary.com%2Fdifz9x1sc%2Fimage%2Fupload%2Fv1728220528%2Fqaltyrsrgx7uiplniu5f.png)

## Overview

This Dynamic Portfolio Website is a fully customizable, easy-to-deploy solution for showcasing your professional work and achievements. Built with Next.js and MongoDB, it offers a sleek, responsive design and an intuitive admin panel for effortless content management.

## Features

- **Responsive Design**: Looks great on all devices
- **Dynamic Content**: Easily update your portfolio through the admin panel
- **Project Showcase**: Highlight your best work with detailed project cards
- **Achievement Section**: Display your accomplishments and certifications
- **Contact Form**: Allow visitors to reach out directly through your site
- **SEO Optimized**: Improve your online visibility
- **Easy Deployment**: One-click deployment to Vercel

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: Password auth for admin panel
- **Deployment**: Vercel

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
   - Fill in your MongoDB connection string and other required variables

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open `http://localhost:3000` in your browser to see the result.

## Usage

1. Navigate to `http://localhost:3000/admin` to access the admin panel.
2. Log in with the default credentials (change these after first login):
   - Username: admin
   - Password: password
3. Use the admin panel to update your portfolio content, including:
   - Personal information
   - Projects
   - Achievements
   - Contact details

## Customization

- Modify the Tailwind configuration in `tailwind.config.js` to change the overall theme.
- Edit components in the `components` directory to change the layout and structure.
- Customize the admin panel by modifying files in the `pages/admin` directory.

## Deployment

1. Push your code to a GitHub repository.
2. Log in to your Vercel account and import the project.
3. Set the environment variables in the Vercel dashboard.
4. Deploy!

For detailed deployment instructions, refer to the [documentation](./docs/deployment.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

