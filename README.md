# Survey Craft Flow 🚀

A professional, enterprise-grade survey building application built with modern web technologies. This project demonstrates complex state management, dynamic form generation, and a polished UI/UX suitable for a diverse range of use cases.

![Survey Craft Flow Hero](./public/hero-screenshot.png)
*(Note: Replace with actual screenshot)*

## 🌟 Key Features

-   **Dynamic Survey Builder**: visual editor to create surveys with various question types (Text, Multiple Choice, Rating, Yes/No).
-   **Real-time Preview**: Instantly preview your survey as you build it.
-   **Dashboard Analytics**: Manage surveys and view status/response metrics at a glance.
-   **Global State Management**: Powered by **Zustand** for seamless data flow across components.
-   **Responsive Design**: Fully responsive UI built with **Tailwind CSS** and **shadcn/ui**.
-   **Smooth Animations**: Enhanced user experience with **Framer Motion** interactions.

## 🛠️ Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS, shadcn/ui
-   **State Management**: Zustand
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Routing**: React Router DOM

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/survey-craft-flow.git
    cd survey-craft-flow
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── builder/         # Survey builder specific components
│   └── ui/              # shadcn/ui primitive components
├── pages/               # Main route pages (Dashboard, Builder, Index etc.)
├── store/               # Global Zustand stores (useSurveyStore, useUserStore)
├── types/               # TypeScript definitions
└── App.tsx              # Main application entry
```

## 🎨 Design System

The project uses a clean, modern aesthetic with a focus on readability and ease of use.
-   **Primary Color**: Blue/Indigo gradients
-   **Typography**: Inter (System Default)
-   **Components**: Accessible primitives from Radix UI (via shadcn/ui)

## 🔜 Future Improvements

-   Backend integration (Node.js/Supabase)
-   Advanced analytics charts
-   Drag-and-drop question reordering (dnd-kit)
-   Email notifications for responses

---

© 2024 Survey Craft Flow. Built for the modern web.
