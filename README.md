# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, elegant design, and a professional layout to showcase your skills and projects.

## ✨ Features

- **Modern Design**: Clean, minimal, and professional aesthetic
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Engaging user interactions and hover effects
- **Resume Download**: Easy access to download your resume
- **Contact Form**: Functional contact form for potential clients
- **Project Showcase**: Dedicated section to display your work
- **Skills Visualization**: Interactive skills section with progress bars
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Technologies Used

- **Frontend**: React 18, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with Tailwind utilities
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section with photo
│   ├── About.js        # About section
│   ├── Skills.js       # Skills and expertise
│   ├── Projects.js     # Portfolio projects
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Step 1: Clone or Download
```bash
# If using git
git clone <your-repo-url>
cd portfolio-website

# Or download and extract the ZIP file
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Start Development Server
```bash
npm start
# or
yarn start
```

The website will open in your browser at `http://localhost:3000`

### Step 4: Build for Production
```bash
npm run build
# or
yarn build
```

## 📝 Customization

### 1. Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Change name, title, and description
- `src/components/About.js` - Update personal details and achievements
- `src/components/Contact.js` - Update contact information
- `src/components/Footer.js` - Update social links and contact details

### 2. Profile Photo
Replace the image in the `public/` folder:
- Place your photo as `abhiis.jpeg` in the `public/` folder
- Or update the image path in `src/components/Hero.js`

### 3. Resume
Replace the resume file:
- Place your resume as `ressume.pdf` in the `public/` folder
- The download buttons will automatically link to this file

### 4. Projects
Update the projects in `src/components/Projects.js`:
- Add your own projects with descriptions
- Update project images, technologies, and links
- Modify project categories as needed

### 5. Skills
Customize your skills in `src/components/Skills.js`:
- Update skill categories and proficiency levels
- Add or remove skills based on your expertise
- Modify the additional skills list

### 6. Colors and Styling
Customize the color scheme in `tailwind.config.js`:
- Modify primary colors
- Update dark theme colors
- Adjust animations and transitions

## 🎨 Design Features

- **Color Scheme**: Professional dark theme with blue accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows and glows for depth
- **Transitions**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue in the repository.

---

**Note**: This portfolio template is designed to be easily customizable. Make sure to replace all placeholder content with your actual information, projects, and skills before deploying.

---

### Package.json Scripts

The following scripts are available in the `package.json` file:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```
