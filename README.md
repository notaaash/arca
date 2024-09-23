# Arca - Store and Share Notes

Arca is a simple, student-focused app designed for sharing and storing class notes. Built with React Native and Expo for cross-platform mobile development, Arca utilizes Appwrite as the backend service for handling user authentication, file storage, and database management. This project aims to strengthen my full-stack development skills, integrating modern tools and technologies for mobile app development and cloud services.

## Features

- **Notes Sharing**: Easily upload and share notes with classmates.
- **PDF Storage**: Securely store notes in PDF format for quick access anytime.
- **User Authentication**: Seamless sign-up and login using Appwrite's authentication service.
- **Cross-Platform**: Built with React Native and Expo, Arca works on both iOS and Android devices.
- **Cloud-Hosted Backend**: Powered by Appwrite for managing backend tasks such as storage and user management.

## Tech Stack

- **Frontend**: 
  - React Native (with Expo)
  - JavaScript/TypeScript
  - Responsive UI for mobile
- **Backend**:
  - Appwrite (authentication, storage, database)
  - Cloud-based file management for storing PDFs and other documents
- **Version Control**: Git & GitHub

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Appwrite](https://appwrite.io/) instance (self-hosted or cloud-hosted)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/arca.git
    cd arca
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your Appwrite instance and configure the environment variables in your project to point to your Appwrite server.

4. Start the Expo development server:
    ```bash
    expo start
    ```

### Deployment

- Once development is complete, you can build your app for Android and iOS using Expo's build services:
    ```bash
    expo build:android
    expo build:ios
    ```

## Contributing

Feel free to submit issues, feature requests etc.
