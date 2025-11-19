# WayMate — Front-end

**WayMate is the front-end for a final-year project of a carpooling (ridesharing) web application. This repository implements the user interface and client-side logic for users to discover rides, create trip offers, manage bookings, and interact with the carpooling platform.**

Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Quick Start](#quick-start)
- [Development](#development)
- [Pages Overview](#pages-overview)

## Overview

- **Purpose**: Provide an intuitive and responsive web interface for the WayMate carpooling platform, allowing users to find rides, offer trips, manage bookings, and connect with other travelers.
- **Intended audience**: Examiners and future maintainers of the final-year project.
- **Backend repository**: [WayMate_BackEnd](https://github.com/Antoinehrt/WayMate_BackEnd)

## Features

- **User Management**
  - User registration and authentication
  - Profile management and customization
  - Secure login/logout functionality

- **Trip Management**
  - Create and publish ride offers
  - Search rides by origin, destination, and date
  - View detailed trip information
  - Manage personal trips (edit, cancel)

- **Booking System**
  - Book seats on available rides
  - Manage personal bookings
  - Real-time booking status updates

- **User Interface**
  - Responsive design for desktop and mobile
  - Intuitive navigation and user experience
  - Admin panel for system management
  - Modern Material Design components

## Tech Stack

- **Framework**: Angular 16.2.6
- **UI Libraries**:
  - Angular Material
  - Bootstrap 5.3.2
  - FontAwesome icons
  - Bootstrap Icons
- **Testing**:
  - Jasmine & Karma (Unit tests)
  - Cypress (E2E tests)
- **Build Tools**: Angular CLI
- **Styling**: CSS3, Angular Material themes

## Project Architecture

```bash
/WayMate_FrontEnd
├── src/
│   ├── app/
│   │   ├── addon/                 # Shared components
│   │   │   ├── footer/           # Footer component
│   │   │   ├── navbar/           # Navigation component
│   │   │   └── popup/            # Modal components
│   │   ├── pages/                # Main application pages
│   │   │   ├── admin-panel/      # Admin management
│   │   │   ├── booking/          # Booking management
│   │   │   ├── connection/       # Login page
│   │   │   ├── create-trip/      # Trip creation
│   │   │   ├── home-page/        # Landing page
│   │   │   ├── my-booking/       # User bookings
│   │   │   ├── my-trip/          # User trips
│   │   │   ├── profile/          # User profile
│   │   │   ├── registration/     # Sign up page
│   │   │   └── trip-search/      # Trip search
│   │   ├── utils/                # Utilities and services
│   │   │   ├── authentication/   # Auth services
│   │   │   └── data-transfer/    # DTOs and models
│   │   └── app-routing.module.ts # Route configuration
│   ├── assets/                   # Static assets
│   └── environments/             # Environment configs
├── cypress/                      # E2E tests
├── angular.json                  # Angular configuration
├── package.json                  # Dependencies
└── README.md
```

## Quick Start

1. **Prerequisites**
   - Node.js (version 18 or higher)
   - npm or yarn package manager
   - Angular CLI: `npm install -g @angular/cli`

2. **Clone the repository**

   ```bash
   git clone https://github.com/Antoinehrt/WayMate_FrontEnd.git
   cd WayMate_FrontEnd
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure environment**

   - Update `src/environments/environment.ts` and `src/environments/environment.development.ts` with your backend API URL

5. **Start the development server**

   ```bash
   npm start
   # or
   ng serve
   ```

6. **Access the application**

   - Navigate to `http://localhost:4200/`
   - The application will automatically reload when you make changes

## Development

### Development Server

```bash
ng serve
# Navigate to http://localhost:4200/
```

### Code Scaffolding

```bash
# Generate a new component
ng generate component component-name

# Generate other elements
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build

```bash
# Development build
ng build

# Production build
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.


## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/home` | Landing page with application overview |
| **Registration** | `/registration` | User account creation |
| **Login** | `/connection` | User authentication |
| **Trip Search** | `/tripSearch` | Search and browse available rides |
| **Create Trip** | `/createTrip` | Create and publish new ride offers |
| **My Trips** | `/myTrip` | Manage personal trip offers |
| **My Bookings** | `/myBooking` | View and manage ride bookings |
| **Profile** | `/profile` | User profile management |
| **Booking Details** | `/booking/:id` | Detailed booking information |
| **Trip Details** | `/trip/:id` | Detailed trip information |
| **Admin Panel** | `/adminPanel` | Administrative dashboard (admin only) |
