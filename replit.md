# Framed Soccer Shirts E-commerce

## Overview

This is a single-page e-commerce landing page for selling framed Italian soccer shirts. The application showcases products from major Italian football clubs (Juventus, AC Milan, Inter, Roma, Napoli, Lazio, Fiorentina, Atalanta) with professional framing. It's built as a simple, clean shopping experience inspired by Etsy/Shopify product pages, focusing on product photography and straightforward purchasing flow.

The application is currently a frontend-focused prototype with hardcoded product data. It features a hero section, product grid with quantity selectors and buy buttons, all presented in Italian language to match the target market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Uses Wouter for lightweight client-side routing. Currently implements two routes:
- `/` - Home page with product listings
- `*` - 404 Not Found page

**UI Component System**: Implements shadcn/ui (New York style variant) with Radix UI primitives for accessible, composable components. The design system uses:
- Tailwind CSS for styling with custom configuration
- CSS variables for theming (neutral color scheme as base)
- Consistent spacing scale and typography system defined in design guidelines

**State Management**: 
- Local component state using React hooks (useState)
- No global state management currently implemented
- Uses TanStack Query (React Query) for potential API data fetching (configured but not actively used)

**Design System Decisions**:
- Clean e-commerce aesthetic with Inter/Roboto typography
- Product cards with 3:4 aspect ratio images
- Two-column grid layout on desktop, single column on mobile
- Italian language throughout the interface
- Emphasis on product imagery and clear call-to-action buttons

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Architecture Pattern**: Traditional REST API structure (though routes not yet implemented):
- Server initialization in `server/index.ts`
- Route registration in `server/routes.ts` 
- In-memory storage abstraction in `server/storage.ts`

**Storage Layer**: Currently uses in-memory storage (`MemStorage` class) implementing an `IStorage` interface. Designed to be swappable with a database-backed implementation. The storage interface includes basic CRUD operations for users.

**Development vs Production**:
- Development: Vite dev server with HMR (Hot Module Replacement)
- Production: Static file serving from built assets
- Separate build processes for client (Vite) and server (esbuild)

**Design Rationale**: The in-memory storage allows rapid prototyping without database setup. The interface abstraction means switching to a real database (like PostgreSQL with Drizzle ORM) requires minimal code changes.

### Data Storage Solutions

**Current State**: In-memory storage only. No persistent database connected.

**Planned Database**: PostgreSQL with Drizzle ORM
- Configuration exists in `drizzle.config.ts` for PostgreSQL
- Schema defined in `shared/schema.ts` with a users table
- Uses Neon serverless driver (`@neondatabase/serverless`)
- Migration files would be generated to `./migrations` directory

**Schema Design**: 
- Users table with UUID primary key, username (unique), and password fields
- Uses Drizzle-Zod for runtime schema validation

**Reasoning**: The application is set up for PostgreSQL but currently operates without a connected database. This allows the frontend prototype to function independently while maintaining the architecture to add backend persistence later.

### Authentication & Authorization

**Current State**: No authentication implemented. User schema exists but no auth flow.

**Potential Future Implementation**: 
- Session management infrastructure included (`connect-pg-simple` for PostgreSQL sessions)
- User schema with password field suggests traditional username/password auth
- No JWT or OAuth integrations present

### External Dependencies

**UI Component Library**: 
- shadcn/ui components (extensive set of 40+ components)
- Radix UI primitives for accessibility
- Lucide React for icons

**Styling & Design**:
- Tailwind CSS for utility-first styling
- class-variance-authority (CVA) for component variants
- tailwind-merge and clsx for conditional class composition

**Data Fetching & State**:
- TanStack Query (React Query) v5 for server state management
- React Hook Form with Zod resolvers for form handling

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- Drizzle-Zod for schema validation bridge

**Build Tools**:
- Vite for frontend bundling and dev server
- esbuild for server-side bundling
- TypeScript for type safety across the stack

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for development mapping
- @replit/vite-plugin-dev-banner for development indicators

**Carousel & UI Enhancements**:
- embla-carousel-react for image carousels
- react-day-picker for date selection
- cmdk for command palette functionality
- vaul for drawer components

**Utilities**:
- date-fns for date manipulation
- nanoid for unique ID generation

**Design Philosophy**: The dependency selection favors type safety (TypeScript, Zod, Drizzle), developer experience (Vite, shadcn/ui), and accessibility (Radix UI). The architecture supports both rapid prototyping (current state) and production scaling (database integration ready).