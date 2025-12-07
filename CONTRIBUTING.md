# Contributing to CFI Compendium

Thank you for your interest in contributing to CFI Compendium! This project thrives on community contributions from CFIs, pilots, and aviation enthusiasts. Whether you're new to open source or an experienced contributor, we welcome your participation.

## 🌟 How You Can Contribute

### Types of Contributions We're Looking For

- **New Lesson Plans**: Create comprehensive lesson plans on flight training topics
- **Content Improvements**: Enhance existing lessons with better explanations, examples, or updates
- **Images and Diagrams**: Add visual aids to make lessons more effective
- **Bug Fixes**: Correct errors, typos, or broken links
- **Feature Enhancements**: Improve the website functionality or user experience
- **Documentation**: Improve README, guides, or code comments
- **Reviews**: Provide feedback on pull requests

## 🚀 Getting Started with GitHub (For Beginners)

### Prerequisites

1. **Create a GitHub Account**: If you don't have one, sign up at [github.com](https://github.com)
2. **Install Git**: Download from [git-scm.com](https://git-scm.com/)
3. **Basic Git Knowledge**: Helpful but not required—we'll guide you through it!

### First-Time Setup

1. **Fork the Repository**
   - Go to https://github.com/gol3tron/cfi-compendium
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the project

2. **Clone Your Fork**
   ```bash
   # Replace YOUR-USERNAME with your GitHub username
   git clone https://github.com/YOUR-USERNAME/cfi-compendium.git
   cd cfi-compendium
   ```

3. **Add Upstream Remote**
   ```bash
   # This helps you stay updated with the main project
   git remote add upstream https://github.com/gol3tron/cfi-compendium.git
   ```

4. **Verify Remotes**
   ```bash
   git remote -v
   # You should see both 'origin' (your fork) and 'upstream' (main repo)
   ```

## 📝 Making Your First Contribution

### Step-by-Step Workflow

#### 1. Create a Branch
Always create a new branch for your changes:

```bash
# Update your fork with the latest changes
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b add-new-lesson
# Use descriptive branch names like:
# - add-weather-systems-lesson
# - fix-typo-in-aerodynamics
# - improve-navigation-styling
```

#### 2. Make Your Changes

**Adding a New Lesson:**
- Create a new `.md` file in the `lessons/` directory
- Follow the existing lesson format (see templates below)
- Use clear, concise language
- Include practical examples
- Add references to official FAA materials

**Editing Existing Content:**
- Make your changes in the appropriate file
- Ensure consistency with existing style
- Test your changes locally

#### 3. Test Your Changes Locally

```bash
# Open index.html in your browser to preview
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

#### 4. Update the Lesson Index

If you added a new lesson, update `app.js`:

```javascript
// In app.js, find the lessonsIndex array and add your lesson:
{
    id: 'your-lesson-id',
    title: 'Your Lesson Title',
    file: 'your-lesson-file.md',
    category: 'Appropriate Category'
}
```

#### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Or stage specific files
git add lessons/new-lesson.md

# Commit with a descriptive message
git commit -m "Add lesson on VOR navigation"

# Follow these commit message guidelines:
# - Use present tense ("Add feature" not "Added feature")
# - Be specific and descriptive
# - Reference issues if applicable (#123)
```

#### 6. Push to Your Fork

```bash
git push origin add-new-lesson
```

#### 7. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request" button
3. Fill out the pull request template:
   - **Title**: Brief description of your changes
   - **Description**: Detailed explanation of what you changed and why
   - **Related Issues**: Link any related issues
4. Click "Create pull request"

### Pull Request Guidelines

**Good Pull Request Checklist:**
- [ ] Changes are focused and related to a single topic
- [ ] Code/content follows existing style and conventions
- [ ] All new lessons include proper formatting and references
- [ ] Images are properly sized and placed in correct directories
- [ ] Local testing completed successfully
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains the changes

## 📚 Content Guidelines

### Lesson Plan Format

Use this template for new lessons:

```markdown
# Lesson Title

## Overview
Brief introduction to the topic (2-3 sentences)

## Learning Objectives
- Objective 1
- Objective 2
- Objective 3

## Content Sections
### Main Section 1
Content here...

### Main Section 2
Content here...

## Practical Application
Real-world examples and exercises

## Common Student Errors
List common mistakes and how to avoid them

## Summary
Key takeaways

## References
- FAA Handbook references
- Advisory Circulars
- Other authoritative sources
```

### Writing Style Guidelines

- **Clear and Concise**: Use simple, direct language
- **Technically Accurate**: Ensure all information is correct and current
- **Practical Focus**: Include real-world applications
- **Safety First**: Always emphasize safety considerations
- **Reference FAA Materials**: Cite official sources when appropriate
- **Inclusive Language**: Write for all experience levels

### Markdown Formatting

- Use `#` for main headings (H1)
- Use `##` for section headings (H2)
- Use `###` for subsections (H3)
- Use `**bold**` for emphasis
- Use `*italics*` for definitions or special terms
- Use code blocks for examples or calculations
- Use lists for organized information
- Use tables for structured data
- Use blockquotes for important notes or quotes

### Image Guidelines

- Place images in `/images/[category]/` directory
- Use descriptive filenames: `four-forces-diagram.png`
- Optimize images (prefer PNG for diagrams, JPEG for photos)
- Keep file sizes reasonable (< 500KB when possible)
- Include alt text for accessibility
- Use original content or properly licensed images only

## 🐛 Reporting Issues

### How to Report a Bug

1. Check if the issue already exists
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable
   - Browser/device information

### Suggesting Enhancements

When suggesting new features:
- Explain the problem you're trying to solve
- Describe your proposed solution
- Consider alternative approaches
- Note any potential challenges

## 💬 Community Guidelines

### Code of Conduct

- Be respectful and professional
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different perspectives and experience levels
- Keep discussions on-topic
- Follow aviation community standards

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and discussions
- **Pull Request Comments**: Specific code/content review

## 🔄 Keeping Your Fork Updated

Regularly sync your fork with the main repository:

```bash
# Switch to main branch
git checkout main

# Fetch latest changes
git fetch upstream

# Merge changes from upstream
git merge upstream/main

# Push updates to your fork
git push origin main
```

## ❓ Getting Help

### Resources for Learning Git/GitHub

- [GitHub's Git Guides](https://github.com/git-guides)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Hello World Tutorial](https://guides.github.com/activities/hello-world/)

### Need Help with Your Contribution?

- Ask questions in GitHub Discussions
- Comment on your pull request if you need assistance
- Check existing issues and PRs for examples

## 🎯 Good First Issues

Look for issues labeled `good first issue` or `beginner-friendly` to start contributing. These are typically:
- Documentation improvements
- Typo fixes
- Adding simple lesson sections
- Content reviews

## 📋 Checklist for Contributors

Before submitting your contribution:

- [ ] I've read the contributing guidelines
- [ ] I've tested my changes locally
- [ ] My commits have descriptive messages
- [ ] I've updated documentation if needed
- [ ] I've added myself to contributors (if first contribution)
- [ ] My changes follow the style guidelines
- [ ] I've referenced any related issues

## 🏆 Recognition

All contributors will be recognized in:
- Repository contributors list
- CONTRIBUTORS.md file (if we add one)
- Pull request acknowledgments

## 📄 License

By contributing to CFI Compendium, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

## Thank You! 🙏

Your contributions help make flight training resources accessible to everyone. We appreciate your time and expertise!

**Happy Contributing! ✈️**

*Questions? Open an issue or start a discussion—we're here to help!*
