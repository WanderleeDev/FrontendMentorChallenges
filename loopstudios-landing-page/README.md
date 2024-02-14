# 🚀 Proyecto de Landing Page

Este proyecto es una landing page creada con React, Vite y TypeScript. El diseño se basa en los desafíos de Frontend Mentor.

## 🌐 Demo

Puedes ver la versión en vivo del proyecto en este [enlace](https://dist-five-tau.vercel.app/)

## 📖 Menú

- Características
- Instalación
- Estructura de Carpetas
- Licencia

## 🎯 Características

- **Componentización**: El proyecto practica la componentización para mejorar la reutilización del código y la eficiencia del desarrollo.
- **Organización por carpetas**: El código del proyecto está organizado en carpetas para facilitar la navegación y el mantenimiento del código.
- **Uso y tipado de props**: Se hace uso de las props en los componentes de React y se tipan correctamente con TypeScript para mejorar la seguridad del código.
- **Uso del useState**: Se utiliza el hook useState de React para manejar el estado del componente de la barra de navegación y permitir su despliegue.

## ⚙️ Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio: `git clone <url-del-repositorio>`
2. Instala las dependencias: `npm install`
3. Ejecuta el proyecto: `npm run dev`

## 📂 Estructura de Carpetas

```
└── 📁loopstudios-landing-page
    └── .eslintignore
    └── .eslintrc.cjs
    └── .gitignore
    └── .prettierignore
    └── .prettierrc
    └── README.md
    └── index.html
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.js
    └── 📁public
        └── react.svg
    └── 📁src
        └── App.tsx
        └── 📁assets
            └── 📁design
                └── active-states.jpg
                └── desktop-design.jpg
                └── desktop-preview.jpg
                └── mobile-design.jpg
                └── mobile-menu.jpg
            └── 📁images
                └── 📁desktop
                    └── image-curiosity.webp
                    └── image-deep-earth.webp
                    └── image-fisheye.webp
                    └── image-from-above.webp
                    └── image-grid.webp
                    └── image-hero.webp
                    └── image-night-arcade.webp
                    └── image-pocket-borealis.webp
                    └── image-soccer-team.webp
                └── 📁icons
                    └── icon-close.svg
                    └── icon-facebook.svg
                    └── icon-hamburger.svg
                    └── icon-instagram.svg
                    └── icon-pinterest.svg
                    └── icon-twitter.svg
                    └── logo.svg
                └── 📁mobile
                    └── image-curiosity.webp
                    └── image-deep-earth.webp
                    └── image-fisheye.webp
                    └── image-from-above.webp
                    └── image-grid.webp
                    └── image-hero.webp
                    └── image-interactive.webp
                    └── image-night-arcade.webp
                    └── image-pocket-borealis.webp
                    └── image-soccer-team.webp
        └── 📁components
            └── Banner.tsx
            └── BasicBtn.tsx
            └── BtnMobile.tsx
            └── Footer.tsx
            └── Gallery.tsx
            └── Header.tsx
            └── ImageGallery.tsx
            └── Navbar.tsx
            └── NavbarMobile.tsx
            └── Presentation.tsx
            └── SocialMedia.tsx
        └── 📁contexts
            └── NavbarContextProps.interface.ts
            └── NavbarProvider.tsx
        └── 📁data
            └── images.ts
        └── index.css
        └── 📁interfaces
            └── CustomStyles .interface.ts
            └── ImageFormat.interface.ts
        └── 📁layout
            └── BaseLayout.tsx
        └── main.tsx
        └── 📁shared
            └── Logo.tsx
        └── vite-env.d.ts
    └── tailwind.config.js
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## 📄 Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.
