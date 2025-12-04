# Canadian Toner Supplies Website

This is the website for Canadian Toner Supplies. It automatically publishes to GitHub Pages whenever you make changes.

---

## How to Edit the Website

All content is written in **Markdown** files (`.md`). You can edit these files directly on GitHub or on your computer.

### Pages You Can Edit

| File | What It Is |
|------|------------|
| `index.md` | Home page (hero section, features, intro text) |
| `about.md` | About Us page |
| `contact.md` | Contact page |
| `products/hp.md` | HP toner products |
| `products/canon.md` | Canon toner products |
| `products/brother.md` | Brother toner products |
| `products/epson.md` | Epson toner products |

---

## Editing Directly on GitHub (Easiest Method)

1. Go to the repository on GitHub
2. Click on the file you want to edit (e.g., `index.md`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. The website will automatically update in a few minutes

---

## Basic Markdown Formatting

Here's how to format text in the `.md` files:

```markdown
# Big Heading
## Medium Heading
### Small Heading

Regular paragraph text.

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2
- Bullet point 3

[Link text](https://example.com)
```

---

## Editing the Home Page (`index.md`)

The home page has a special format at the top between the `---` marks:

```markdown
---
hero:
  name: "Canadian Toner Supplies"      # Main title
  text: "Premium Printer Cartridges"   # Subtitle
  tagline: Your tagline here           # Text below subtitle

features:
  - icon: 🍁
    title: Feature Title
    details: Description of the feature
---
```

Below the `---` you can add regular content using Markdown.

---

## Adding a New Product Page

1. Create a new file in the `products/` folder (e.g., `products/xerox.md`)
2. Add your content using Markdown
3. To add it to the sidebar menu, edit `.vitepress/config.mts` and add a new line in the `items` section:

```typescript
items: [
  { text: 'HP Toner', link: '/products/hp' },
  { text: 'Canon Toner', link: '/products/canon' },
  { text: 'Brother Toner', link: '/products/brother' },
  { text: 'Epson Toner', link: '/products/epson' },
  { text: 'Xerox Toner', link: '/products/xerox' }  // ← Add new line like this
]
```

---

## Editing Navigation & Site Settings

The file `.vitepress/config.mts` controls:

- **Site title**: `title: "Canadian Toner Supplies"`
- **Top navigation menu**: The `nav` section
- **Sidebar menu**: The `sidebar` section
- **Footer text**: The `footer` section
- **Social links**: The `socialLinks` section

---

## Special Formatting (Info Boxes)

You can add colored info boxes in your content:

```markdown
::: info Title
This is an info box with a blue background.
:::

::: tip Tip
This is a tip box with a green background.
:::

::: warning Warning
This is a warning box with a yellow background.
:::
```

---

## How Publishing Works

- The website automatically rebuilds when you push changes to the `main` branch
- It takes about 1-2 minutes for changes to appear
- The site is hosted on GitHub Pages

---

## Running the Site Locally (Optional - For Developers)

If you want to preview changes on your computer before publishing, you'll need to install Node.js first.

### Installing Node.js on Windows

1. Go to https://nodejs.org/
2. Download the **LTS** version (Node.js 22 or later)
3. Run the installer and follow the prompts (keep all default options)
4. When asked about "Tools for Native Modules", you can skip this (uncheck the box)
5. Restart your computer after installation

To verify it worked, open **Command Prompt** or **PowerShell** and type:

```bash
node --version
npm --version
```

You should see version numbers (e.g., `v22.x.x` and `10.x.x`).

### Running the Website Locally

Open **Command Prompt** or **PowerShell**, navigate to the project folder, then run:

```bash
# Install dependencies (first time only)
npm install

# Start local preview server
npm run docs:dev
```

Then open `http://localhost:5173` in your browser.

---

## Editing with Windsurf (Recommended)

Windsurf is a free code editor with AI assistance that makes editing the website easy.

### Installing Windsurf

1. Go to https://windsurf.com/download
2. Download the version for your operating system (Windows, Mac, or Linux)
3. Run the installer and follow the prompts
4. Open Windsurf after installation

### Opening the Project in Windsurf

1. In Windsurf, click **File** → **Open Folder**
2. Navigate to where you saved the project folder and select it
3. You'll see all the files in the left sidebar

### Pushing Changes from Windsurf

After making edits, you need to push your changes to GitHub for the website to update:

1. Click the **Source Control** icon in the left sidebar (looks like a branch/fork)
2. You'll see a list of changed files
3. Type a brief message describing your changes (e.g., "Updated contact info")
4. Click the **✓ Commit** button (or press Ctrl+Enter / Cmd+Enter)
5. Click **Sync Changes** (or the cloud icon with arrows)
6. Your changes will be pushed to GitHub and the website will update in 1-2 minutes

::: tip First Time Setup
The first time you push, Windsurf may ask you to sign in to GitHub. Follow the prompts to authorize access.
:::

---

## Need Help?

- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/
- **VitePress Docs**: https://vitepress.dev/
- **Windsurf Download**: https://windsurf.com/download
