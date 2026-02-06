# User Manual

## How to add a new Workspace

### 1. Add Image
Place the cover image (SVG, PNG, JPG) in `src/assets/placeholders/` (or organize in `src/assets/images`).

### 2. Create Content File
Create a new JSON file in `src/content/workspaces/`.
Naming convention: `setup-XX.json` (or any unique slug).

### 3. Fill Data
Copy this template:

```json
{
  "title": {
    "es": "Título en Español",
    "en": "English Title"
  },
  "description": {
    "es": "Descripción corta en español...",
    "en": "Short description in english..."
  },
  "coverImage": "../../assets/placeholders/your-image.svg",
  "tags": ["Tag1", "Tag2"],
  "specs": {
    "computer": "Computer Name",
    "monitor": "Monitor Name",
    "keyboard": "Keyboard Name",
    "mouse": "Mouse Name"
  },
  "publishDate": "YYYY-MM-DD"
}
```

### 4. Build/Preview
Run `npm run dev` to see the changes immediately.
Run `npm run build` to generate the static site.
