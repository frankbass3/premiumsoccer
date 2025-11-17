# Design Guidelines: Framed Soccer Shirts Landing Page

## Design Approach
**Clean E-commerce** - Inspired by simplified Etsy/Shopify product pages with focus on product photography and straightforward purchasing flow.

## Typography System
- **Primary Font**: Inter or Roboto (via Google Fonts CDN)
- **Headings**: Font weight 700, sizes: h1 (text-4xl), h2 (text-2xl), h3 (text-xl)
- **Body**: Font weight 400, text-base for descriptions, text-sm for product details
- **Price**: Font weight 600, text-lg to emphasize pricing

## Layout & Spacing
**Spacing Units**: Use Tailwind spacing of 2, 4, 6, 8, 12, 16, 20
- Section padding: py-12 (mobile), py-20 (desktop)
- Product grid gap: gap-8
- Card internal padding: p-6
- Container: max-w-7xl mx-auto px-4

**Grid Structure**:
- Hero/Description section: Single column, centered, max-w-4xl
- Product section: `grid grid-cols-1 md:grid-cols-2 gap-8` for two vertical lists
- Each column displays products in vertical stack with gap-6

## Component Structure

### Hero Section
- Compact hero (60vh) with background image of elegant framed soccer shirt display
- Centered headline + tagline describing custom framed soccer shirts
- Semi-transparent overlay for text readability
- Single primary CTA button with blurred background (backdrop-blur-md bg-white/20)

### Product Cards (Critical Design)
Each product card contains:
1. **Product Image**: Aspect ratio 3:4, object-cover, rounded-lg, full-width
2. **Product Title**: Text-lg font-semibold, mt-4 (Italian shirt name/team)
3. **Price Display**: Text-xl font-bold, prominent placement
4. **Quantity Selector**: 
   - Horizontal layout with minus/plus buttons
   - Number input in center
   - Buttons: rounded-md border with hover states
5. **Buy Button**: 
   - Full-width (w-full)
   - Rounded-md with py-3
   - Bold text "Acquista Ora"
   - Primary action styling

**Card Layout**: Stack elements vertically with consistent spacing (space-y-3)

### Footer
Simple footer with contact info, social links, copyright in Italian

## Interaction Patterns
- Quantity buttons: Increment/decrement on click
- Buy button: Shows confirmation message or adds to cart counter
- Hover states: Subtle scale on product images (hover:scale-105 transition)
- No complex animations

## Images
**Hero Background**: Wide shot of workshop/studio with framed soccer shirts on wall, professional photography aesthetic, slightly desaturated
**Product Images**: 8-12 framed soccer shirt photos, showing different teams/designs, consistent lighting and framing, vertical orientation preferred

## Italian Language Content
- Hero: "Maglie da Calcio Incorniciate"
- CTA: "Scopri di Più" / "Acquista Ora"
- Quantity: "Quantità"
- Price format: "€XX,XX"
- Product descriptions in Italian

## Accessibility
- Semantic HTML (article for products)
- Alt text for all product images
- Proper button labels
- Sufficient contrast ratios

## Performance Priority
- Minimal CSS (Tailwind CDN)
- Lazy load images below fold
- No external dependencies beyond Tailwind
- Inline critical styles
- Optimized product images (WebP format)