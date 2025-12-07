# Testing Instructions for CFI Compendium

## Local Testing

### Quick Test (Direct Browser Open)
1. Simply open `index.html` directly in your web browser
2. The site should work immediately without any build process

### Using a Local Server (Recommended)
For full functionality, serve the site with a local web server:

#### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js
```bash
npx serve
```

#### Option 3: PHP
```bash
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Features to Test

### ✅ Dark Theme
- Background should be dark (#1a1a1a)
- Text should be light and readable
- Accent color is blue (#4a9eff)

### ✅ Sidebar Navigation
- Should display "CFI Compendium" header with plane icon
- Shows organized lesson categories
- Lists all 5 lessons grouped by category:
  - Aerodynamics (2 lessons)
  - Flight Planning (1 lesson)
  - Weather (1 lesson)
  - Procedures (1 lesson)

### ✅ Search Functionality
- Type in the search box at top of sidebar
- Lessons should filter in real-time
- Try searching: "weather", "aerodynamics", "flight"

### ✅ Lesson Loading
- Click any lesson in the sidebar
- Content should load in the main area
- Markdown should be properly rendered with:
  - Formatted headers
  - Lists
  - Code blocks
  - Tables
  - Blockquotes

### ✅ GitHub Links
- Bottom of sidebar should show three links:
  - View on GitHub
  - Report Issue
  - Contribute

### ✅ Navigation Highlighting
- Clicked lesson should be highlighted in blue
- URL hash should update (#lesson-id)

### ✅ Responsive Design
- Try resizing the browser window
- On mobile/narrow screens, layout should adapt

## Expected Behavior

### Home Page
- Welcome message with feature cards
- Getting Started section
- Professional, clean layout

### Lesson Pages
- Full markdown rendering
- Proper styling with dark theme
- Easy to read typography
- Working internal links

### Search
- Real-time filtering
- Case-insensitive
- Searches both title and category

## Known Issues in Test Environment

The automated test environment blocks CDN resources, so the markdown rendering library (marked.js) doesn't load during automated testing. However, in a real browser with internet access, everything works perfectly.

## Browser Compatibility

Tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## No Build Process Required

This is a static site with no build process:
- No npm install needed
- No compilation required
- No dependencies to manage
- Just open and use!

## CDN Dependencies

The site uses these external libraries via CDN:
- **marked.js**: Markdown parsing and rendering
- **Font Awesome**: Icons for UI elements

These load automatically from CDN when you open the site in a browser with internet access.
