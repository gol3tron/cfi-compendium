# Images Directory

This directory contains all media files for the CFI Compendium lessons, organized by topic.

## Structure

Images are organized into subdirectories by lesson category:

```
images/
├── aerodynamics/       # Diagrams and images for aerodynamics lessons
├── flight-planning/    # Charts, maps, and planning-related images
└── weather/           # Weather charts, patterns, and related imagery
```

## Guidelines for Adding Images

### File Naming
- Use lowercase with hyphens: `four-forces-diagram.png`
- Be descriptive: `pressure-pattern-weather-map.jpg`
- Include version if updated: `airspace-chart-v2.png`

### File Formats
- **Diagrams/Graphics**: PNG (supports transparency)
- **Photos**: JPEG (smaller file size)
- **Vector Graphics**: SVG (preferred for scalable diagrams)

### File Size
- Optimize images before adding
- Target < 500KB per image when possible
- Use tools like TinyPNG or ImageOptim

### Image Requirements
- High quality and clear
- Properly licensed or original content
- Relevant to lesson content
- Include attribution if required by license

### Adding Images to Lessons

In your markdown lesson file:

```markdown
![Alt text description](../images/category/image-name.png)
```

Example:
```markdown
![Four Forces of Flight Diagram](../images/aerodynamics/four-forces-diagram.png)
```

## License and Attribution

- Only use images you have rights to use
- Provide attribution for Creative Commons images
- Document image sources in commit messages
- Original diagrams created for this project are MIT licensed

## Image Sources

Recommended sources for aviation images:
- FAA educational materials (public domain)
- NASA imagery (public domain)
- Original diagrams created for the project
- Creative Commons licensed images (with attribution)

## Placeholder Status

Currently, image directories contain placeholder README files. Contributors are encouraged to add relevant diagrams, charts, and images to enhance the lessons.
