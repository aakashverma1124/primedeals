## Steps to execute this project

### Project Installation

`npx create-next-app@latest primedeals`

Choose all the default options.
Typescript? Yes
ESLint? Yes
Tailwind CSS? Yes
src/ directory? No
App Router? Yes
Turbopack? No
import alias? No

Try running the project by running `npm run dev`

### Basic Project Structure Setup

`layout.tsx`

Replace

```js
import { Geist, Geist_Mono } from 'next/font/google';
```

to

```js
import { Inter } from 'next/font/google';
```

<hr>

Replace

```js
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
```

to

```js
const inter = Inter({ subsets: ['latin'] });
```

<hr>

Replace `className` inside body tag.

```js
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
```

to

```js
className={`${inter.className} antialiased`}
```

<hr>

### Setup assets directory

- Create `assets` directory inside root directory.
- Add `loader.gif` inside `assets`.
- May be use https://iconscout.com/lottie-animations/loading?price=free for loader gif.
- Change `title` and `description` inside `layout.tsx`

```js
export const metadata: Metadata = {
  title: 'Prime Deals',
  description: 'An ecommerce app',
};
```

<hr>

- Replace `favicon.ico` inside `/app`
- Add `images` folder to `/public` and remove existing files from `/public` directory.

### Shadcn UI Setup

- Visit `https://ui.shadcn.com/docs/installation/next`
- Run `npx shadcn@latest init`
- Which color would you like to use as the base color? › Slate
- How would you like to proceed? › Use --legacy-peer-deps
- Run `npx shadcn@latest add button`
- This will create `components/ui` directory.
- Now try changing `Page.tsx` and use `Button` component from shadcn.
- Add the below code to `globals.css` file

```css
@layer utilities {
  .wrapper {
    @apply max-w-7xl lg:mx-auto p-5 md:px-10 w-full;
  }

  .flex-start {
    @apply flex justify-start items-center;
  }
  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }

  .h1-bold {
    @apply font-bold text-3xl lg:text-4xl;
  }

  .h2-bold {
    @apply font-bold text-2xl lg:text-3xl;
  }

  .h3-bold {
    @apply font-bold text-xl lg:text-2xl;
  }
}
```

- We want to have some constans now.
- Create `constants/index.ts` inside `lib` directory.
- Add the following variables inside `index.ts`

```js
export const APP_NAME = 'Prime Deals';
export const APP_DESCRIPTION = 'A modern ecommerce app.';
export const SERVER_URL = 'http://localhost:3000';
```

But we want to read them from `.env` file, so let's create one in the root directory.

```yml
NEXT_PUBLIC_APP_NAME="Prime Deals"
NEXT_PUBLIC_APP_DESCRIPTION="A modern ecommerce app."
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

and now read them in `constants/index.ts` file

```js
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prime Deals';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern ecommerce app.';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
```

We can replace the `app/layout.tsx` code something like this and verify on browser, the title will be changed. Try changing the name from `.env` file

```js
export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};
```

<hr>

- Now, we can try passing the metadata if we want to show specific title from any layout.
- For example: export custom metadata with some title from `(root)/page.tsx`

```js
export const metadata = {
  title: 'Home',
};
```

- The page title should be changed to `Home`

### Showing Page Title Dynamically

Make changes in `app/layout.tsx`

```js
export const metadata: Metadata = {
  title: {
    template: `%s | Prime Deals`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};
```

### Header Component

- Create `shared/header` inside `components` directory.
- Create `index.tsx` inside `components/shared/header` directory.
- Import `Header` component inside `app/(root)/layout.tsx`
- Run `npm i lucide-react` to use `ShoppingCart` and `UserIcon` icons.
