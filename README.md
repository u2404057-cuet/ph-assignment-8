# ☀️ SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more.

## 🌐 Live URL

🔗 [https://ph-assignment-8-phi.vercel.app](https://ph-assignment-8-phi.vercel.app)

---

## 📸 Preview

> A vibrant, fully responsive summer shopping experience built with Next.js and BetterAuth.

---

## ✨ Key Features

- 🏠 **Home Page** – Hero banner with summer sale highlights, popular products, summer care tips, and top brands
- 🛍️ **Products Page** – Browse all summer products with ratings, prices, and category info
- 🔒 **Protected Product Details** – Full product details page accessible only to logged-in users
- 🔐 **Authentication** – Email/password login & registration + Google OAuth via BetterAuth
- 👤 **My Profile** – View logged-in user's name, email, and profile photo
- ✏️ **Update Profile** – Update display name and profile photo URL from the profile page
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop
- 🎨 **Smooth Animations** – Hover and entrance animations powered by Animate.css

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Tailwind component library |
| [HeroUI](https://www.heroui.com/) | UI component library (Modal, Button) |
| [BetterAuth](https://better-auth.com/) | Authentication (credentials + Google OAuth) |
| [MongoDB](https://www.mongodb.com/) | Database via BetterAuth adapter |
| [React Hook Form](https://react-hook-form.com/) | Form handling |
| [Animate.css](https://animate.style/) | CSS animations |

---

## 📦 NPM Packages Used

```bash
better-auth
animate.css
react-hook-form
@heroui/react
daisyui
mongodb
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (main)/
│   │   ├── page.jsx          # Home page
│   │   ├── products/
│   │   │   ├── page.jsx      # All products
│   │   │   └── [id]/
│   │   │       └── page.jsx  # Product details (protected)
│   │   └── profile/
│   │       └── page.jsx      # User profile
│   └── api/
│       └── auth/
│           └── [...all]/     # BetterAuth API routes
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── SummerTips.jsx
│   └── TopBrands.jsx
├── lib/
│   ├── auth.js               # BetterAuth server config
│   └── auth-client.js        # BetterAuth client config
└── data/
    └── products.json         # Static product data
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/u2404057-cuet/ph-assignment-8.git
cd ph-assignment-8
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

MONGO_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `BETTER_AUTH_SECRET` | Secret key for BetterAuth session signing |
| `BETTER_AUTH_URL` | Base URL of your app (server-side) |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Base URL of your app (client-side) |
| `MONGO_URI` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

---

## 📋 Pages Overview

| Page | Route | Protected |
|------|-------|-----------|
| Home | `/` | ❌ |
| Products | `/products` | ❌ |
| Product Details | `/products/[id]` | ✅ |
| Login | `/login` | ❌ |
| Register | `/register` | ❌ |
| My Profile | `/profile` | ✅ |

---

## 👤 Author

**Rahimul Hoque**
- GitHub: [@u2404057-cuet](https://github.com/u2404057-cuet)
