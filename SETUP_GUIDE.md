# Phyto Punch Co. - Setup & Development Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- React 18 & React DOM
- Vite 4 (build tool)
- Tailwind CSS 3 + Autoprefixer
- Framer Motion 10 (animations)
- gh-pages (GitHub deployment)

### Step 2: Start Development Server

```bash
npm run dev
```

This starts Vite's dev server at `http://localhost:5173`. The app will hot-reload as you edit files.

### Step 3: Build for Production

```bash
npm run build
```

Generates optimized production build in `dist/` folder, minified and ready for deployment.

---

## 📋 Project Architecture

### App Flow

```
App.jsx (Main orchestrator)
  ├── CartProvider (Context wrapper)
  ├── Navbar (Navigation + Cart trigger)
  ├── Hero (Vibrant intro)
  ├── Benefits (6-grid USPs)
  ├── ProductStore (3 flavors + sizes)
  ├── About (Company story)
  ├── FAQ (Accordion Q&A)
  └── Footer (Links + Newsletter)

Cart (Side drawer - only renders when isCartOpen=true)
└── CheckoutModal (Nested inside Cart)
```

### State Management

**Cart Context** (`src/context/CartContext.jsx`):
- Manages global cart state across all components
- Methods: `addToCart()`, `updateQuantity()`, `removeFromCart()`, `clearCart()`
- Accessed via `useCart()` hook

**Component State**:
- Navbar: `isOpen` (mobile menu)
- ProductStore: `selectedSizes` per product
- Checkout: `step` (form → processing → success)
- FAQ: `openIndex` (accordion active item)

---

## 🎨 Customization Guide

### Adding a New Product

Edit `src/components/ProductStore.jsx`:

```jsx
const products = [
  // ... existing products ...
  {
    id: 4,
    name: 'Turmeric Thunder',
    description: 'Anti-inflammatory blend with ginger',
    image: '🟡',
  }
]
```

The sizes (Small/Medium/Large) are shared across all products. To change prices:

```jsx
const sizes = [
  { label: 'Small', value: 'small', price: 9.99, description: '30 gummies' },
  // ...
]
```

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      kombucha: {
        berry: '#6B2E4E',    // Change here
        green: '#2D5F4F',
        gold: '#D4AF37',
        light: '#F5E6D3',
        cream: '#FAF7F2',
      }
    }
  }
}
```

Then use in JSX: `bg-kombucha-berry`, `text-kombucha-green`, etc.

### Editing Content

- **Hero**: Edit text in `src/components/Hero.jsx`
- **Benefits**: Update benefits array in `Benefits.jsx`
- **About**: Modify milestones & events in `About.jsx`
- **FAQ**: Update faqs array in `FAQ.jsx`
- **Footer**: Edit footer content in `Footer.jsx`

### Adding Newsletter Signup

In `Footer.jsx`, the email input exists but doesn't submit anywhere. To add functionality:

```jsx
const [email, setEmail] = useState('')

const handleNewsletterSignup = async (e) => {
  e.preventDefault()
  // Call your API endpoint here
  console.log('Subscribe:', email)
}
```

---

## 🚢 GitHub Pages Deployment

### One-Time Setup

1. **Create GitHub repository**:
   ```bash
   git add .
   git commit -m "Initial commit: Phyto Punch SPA"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/PhytoPunch.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save

3. **Set repository visibility** (optional):
   - If private, enable Pages for private repos
   - If public, pages auto-enable

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Installs dependencies
2. Builds the project
3. Deploys to `gh-pages` branch

Every push to `main` triggers this workflow. Your site will be live at:
```
https://YOUR_USERNAME.github.io/PhytoPunch/
```

### Manual Deployment (Alternative)

If you want to deploy locally:

```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

This creates/updates the `gh-pages` branch with your build.

---

## 🧪 Testing Checklist

- [ ] Dev server runs: `npm run dev`
- [ ] Navigation smooth scrolls to sections
- [ ] Navbar cart badge updates
- [ ] Product sizes selectable
- [ ] Add to cart shows success alert
- [ ] Cart sidebar opens/closes
- [ ] Cart items update/remove correctly
- [ ] Checkout form submits (shows processing → success)
- [ ] FAQ accordion opens/closes smoothly
- [ ] Mobile menu works on small screens
- [ ] All colors display correctly
- [ ] No console errors

---

## 📦 Production Build Size

```
dist/
├── index.html          (~1KB)
├── assets/
│   ├── index-xxxx.js   (~200KB gzipped)
│   └── index-xxxx.css  (~30KB gzipped)
```

Vite automatically optimizes and minifies. Total load time ~2-3 seconds on 4G.

---

## 🔧 Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Build fails with Tailwind error
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### GitHub Pages shows 404
- Check `vite.config.js` has `base: '/PhytoPunch/'`
- Repo must be named `PhytoPunch`
- Wait 1-2 minutes for workflow to complete

### Cart state resets on refresh
This is **expected** - state is in-memory. To persist:
```jsx
// Add to CartContext.jsx
const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem('cart')
  return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])
```

---

## 📚 File Editing Tips

### Icon/Emoji Changes
Most icons are emojis. Change in components (🍇→🫐, 🌿→🍃, etc.)

### Animation Tweaks
Framer Motion settings in components:
```jsx
animate={{ y: [0, 20, 0] }}
transition={{ duration: 4, repeat: Infinity }}
```

### Button Styling
All buttons use Tailwind:
```jsx
className="bg-kombucha-berry text-white px-4 py-2 rounded-lg hover:bg-kombucha-green transition"
```

---

## 🌐 Environment Variables

Currently, no env vars needed. If you add features requiring them (API calls, etc.):

Create `.env`:
```
VITE_API_URL=https://api.example.com
VITE_STRIPE_KEY=pk_test_xxxxx
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 💡 Next Features You Could Add

1. **Real Stripe Integration** - Replace dummy checkout with live payments
2. **Backend/Database** - Store orders, user accounts, inventory
3. **Image Optimization** - Replace emojis with actual product images
4. **Email Notifications** - Send order confirmations
5. **Analytics** - Track conversions, user behavior
6. **SEO Optimization** - Meta tags, structured data
7. **Testimonials Section** - Customer reviews carousel
8. **Subscription Model** - Monthly gummy boxes
9. **Blog** - Wellness tips, fermentation science
10. **Multi-language** - i18n internationalization

---

## 📞 Support

For issues or questions:
- Check console for errors: F12 → Console tab
- Review component props/state in React DevTools
- Search Framer Motion docs: framer.com/motion
- Tailwind docs: tailwindcss.com/docs

Happy coding! 🍇✨
