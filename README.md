# 🍇 Phyto Punch Co. - Kombucha Gummies SPA

A sleek, minimalist single-page application for Phyto Punch Co., a premium kombucha-based gummy brand. Built with React, Vite, Tailwind CSS, and Framer Motion for smooth, engaging interactions.

## 🎯 Features

- **Lightning-fast builds** with Vite and optimized for GitHub Pages
- **Smooth frame-by-frame animations** using Framer Motion
- **Responsive design** with organic, earthy color palette
- **Full e-commerce functionality**:
  - Product showcase with 3 pack sizes (Small, Medium, Large)
  - Real-time shopping cart with CRUD operations
  - Lightweight dummy payment gateway modal
- **Company storytelling**: Hero, Benefits, Products, About, FAQ sections
- **Accordion-style FAQ** with smooth animations
- **Mobile-first, Tailwind CSS styling** with custom Kombucha color palette

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/PhytoPunch.git
cd PhytoPunch

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 📁 Project Structure

```
PhytoPunch/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with cart indicator
│   │   ├── Hero.jsx            # Vibrant hero section
│   │   ├── Benefits.jsx        # 6-grid benefits showcase
│   │   ├── ProductStore.jsx    # Product selection with sizes
│   │   ├── Cart.jsx            # Shopping cart sidebar
│   │   ├── CheckoutModal.jsx   # Payment gateway simulation
│   │   ├── About.jsx           # Company story & events
│   │   ├── FAQ.jsx             # Accordion-style Q&A
│   │   ├── Footer.jsx          # Links & newsletter signup
│   │   └── index.js            # Component exports
│   ├── context/
│   │   └── CartContext.jsx     # React Context for cart state
│   ├── App.jsx                 # Main app orchestrating sections
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme & colors
├── postcss.config.js           # PostCSS setup
├── package.json                # Dependencies & scripts
└── .github/workflows/
    └── deploy.yml              # GitHub Actions deployment

```

## 🎨 Design System

### Color Palette
- **Berry**: `#6B2E4E` - Primary brand color
- **Green**: `#2D5F4F` - Secondary/hover states
- **Gold**: `#D4AF37` - Accent color
- **Light**: `#F5E6D3` - Light background
- **Cream**: `#FAF7F2` - Primary background

### Components by Section
1. **Hero** - Eye-catching introduction with animated gummy visual
2. **Benefits** - 6-card grid highlighting probiotic advantages
3. **Products** - 3 signature flavors with size/price selection
4. **Cart** - Side drawer with full item management
5. **Checkout** - Modal with form validation & payment simulation
6. **About** - Company story, timeline, & upcoming events
7. **FAQ** - 8 accordion items with smooth toggle
8. **Footer** - Links, newsletter, social media, legal

## 🛒 Cart Management

Cart state is managed via **React Context** (`CartContext.jsx`) with these operations:
- `addToCart(product)` - Add item or increment quantity
- `updateQuantity(productId, size, quantity)` - Modify quantity
- `removeFromCart(productId, size)` - Remove single item
- `clearCart()` - Empty entire cart
- `getTotalPrice()` - Calculate total amount
- `getTotalItems()` - Count total items

## 💳 Checkout Flow

1. User clicks "Proceed to Checkout" in cart
2. Modal opens with form (Name, Email, Address, Card)
3. On submit → Processing animation → Success confirmation
4. Cart clears automatically, user returned to storefront

## 📱 Responsive Design

- **Mobile**: Stacked layout, hamburger menu, full-width components
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full 3-column grids, expanded whitespace

## 🚢 Deployment to GitHub Pages

### Setup (One-time)
1. Push code to GitHub repository
2. Go to repo Settings → Pages
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch (auto-created by workflow)

### Automatic Deployment
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys on every push to `main` branch
- Your site will be live at: `https://yourusername.github.io/PhytoPunch/`

## 🧪 Development Tips

### Add a New Product
Edit `src/components/ProductStore.jsx`, add to the `products` array:
```jsx
{
  id: 4,
  name: 'New Flavor',
  description: 'Description here',
  image: 'emoji-here',
}
```

### Customize Colors
Edit `tailwind.config.js` in the `kombucha` color extension.

### Add New Sections
1. Create component in `src/components/`
2. Export from `src/components/index.js`
3. Import in `App.jsx` and add ref + div wrapper
4. Add to navigation in `Navbar.jsx`

## 📦 Dependencies

- **React 18** - UI framework
- **Vite 4** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animations
- **gh-pages** - GitHub Pages deployment

## 📄 License

Licensed under the MIT License - see LICENSE file for details.

## 🤝 Contributing

Questions or suggestions? Open an issue or reach out!

---

**Made with ❤️ for a healthier world** 🍇 ✨