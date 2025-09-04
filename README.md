# Wealth Wing Frontend

Wealth Wing is a modern web application for managing personal finances, built with React, Vite, and TypeScript. This repository contains the frontend codebase, including reusable UI components and application logic.

## Features

-   Modular monorepo structure (packages: lani, tayo, utils)
-   Modern React with TypeScript
-   Vite for fast development and builds
-   Storybook for UI component development
-   Redux for state management

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/WealthWing/frontend.git
    cd frontend
    ```
2. Install dependencies (from the root):
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server for the main app (lani):

```sh
cd packages/lani
npm run dev
# or
yarn dev
```

To run Storybook for UI components (tayo):

```sh
cd packages/tayo
npm run storybook
# or
yarn storybook
```

### Building for Production

To build the frontend for production:

```sh
cd packages/lani
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
