# BlogPro - Modern Blogging Platform

## Overview

BlogPro is a full-stack blogging platform built with React, Express, and PostgreSQL. It provides a complete content management system with both public blog functionality and admin dashboard capabilities. The application supports user authentication through Replit Auth, rich text editing, file uploads, and comprehensive blog management features including posts, categories, tags, and site settings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application using React with TypeScript
- **Routing**: Client-side routing with Wouter for navigation
- **State Management**: React Query (TanStack Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL using Neon serverless database
- **Authentication**: Replit Auth with OpenID Connect and session management
- **File Handling**: Multer middleware for image uploads with file validation
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Database Design
- **Users Table**: Stores user profiles with social media links and bio information
- **Posts Table**: Blog posts with rich content, categories, tags, and metadata
- **Categories/Tags System**: Hierarchical content organization
- **Settings Table**: Site-wide configuration and customization options
- **Sessions Table**: User session persistence for authentication

### Authentication & Authorization
- **Replit Auth Integration**: OAuth-based authentication using OpenID Connect
- **Session Management**: Secure session handling with PostgreSQL storage
- **Route Protection**: Middleware-based authentication checks for admin routes
- **User Context**: React hooks for authentication state management

### Content Management
- **Rich Text Editor**: Custom markdown-based editor with formatting tools
- **File Upload System**: Image handling with validation and storage
- **SEO Features**: Slug generation, meta descriptions, and social sharing
- **Content Organization**: Categories and tags for post classification

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React Query for data fetching
- **Express.js**: Backend server framework with middleware support
- **Drizzle ORM**: Type-safe database operations with PostgreSQL

### Database & Storage
- **Neon Database**: Serverless PostgreSQL with connection pooling
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

### Authentication
- **Replit Auth**: OAuth provider integration with OpenID Connect client
- **Passport.js**: Authentication middleware for Express

### UI & Styling
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Accessible component primitives for complex UI elements

### Development Tools
- **Vite**: Build tool with hot module replacement and TypeScript support
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration and error overlay

### File Processing
- **Multer**: Multipart form data handling for file uploads
- **Image Validation**: File type and size restrictions for security

### Utilities
- **Zod**: Schema validation for API endpoints and forms
- **Date-fns**: Date manipulation and formatting utilities
- **Memoizee**: Function memoization for performance optimization