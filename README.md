# VocifyAI

Welcome to VocifyAI – a cutting-edge AI SaaS platform designed for podcast enthusiasts. Our platform empowers users to create, discover, and enjoy podcasts with advanced features such as text-to-audio conversion with multi-voice AI, AI-generated podcast thumbnails, and seamless playback. Dive into the future of podcasting with VocifyAI and experience innovation at its finest.

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/JohnnySonTrinh/voicifyai)](https://github.com/JohnnySonTrinh/voicifyai/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/JohnnySonTrinh/voicifyai)](https://github.com/JohnnySonTrinh/voicifyai/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/JohnnySonTrinh/voicifyai)](https://github.com/JohnnySonTrinh/voicifyai)

<div align="center">
  <br/>
      <img src="" alt="Project Banner"> <!-- Replace with actual banner image URL -->
    </a>
  <br/>

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=3178C6" alt="clerk" />
    <img src="https://img.shields.io/badge/-Convex-black?style=for-the-badge&logoColor=white&logo=convex&color=3178C6" alt="convex" />

  </div>
</div>

## 🔋 Features

This application is a full-stack podcast creation and discovery platform built with Next.js, TypeScript, Tailwind CSS, React, Convex, and Clerk.  Key features include:

* **Robust Authentication:** Secure user authentication and authorization powered by Clerk.
* **Modern Home Page:** Displays trending podcasts with a sticky podcast player for continuous listening.
* **Discover Podcasts Page:**  Allows users to browse and search for podcasts.
* **Create Podcast Page:**  Enables users to create podcasts using AI-powered text-to-speech and AI-generated thumbnails.  Provides a user-friendly form for podcast details and AI prompt input.  Includes audio previews and visual feedback during the generation process.
* **Multi-Voice AI Functionality:** Offers a selection of AI voices for podcast creation.
* **Profile Page:** Displays the user's created podcasts with options to manage them.
* **Podcast Details Page:** Shows detailed information about individual podcasts, including transcripts (where applicable).
* **Podcast Player:**  Provides basic playback controls including play/pause, mute/unmute, and forward/rewind functionality.
* **Responsive Design:** Adapts seamlessly to different screen sizes.
* **Efficient Code Architecture:**  Emphasizes component reusability and maintainability.


## ⚙️ Tech Stack

* Next.js 14 (App Router)
* TypeScript
* Tailwind CSS
* React
* Convex (Backend)
* Clerk (Authentication)
* OpenAI (AI Services)
* ShadCN UI library (Component library for UI elements)
* @xixixao/uploadstuff (File upload handling)


## Getting Started

1.  **Clone the repository:** `git clone <repository_url>`
2.  **Install dependencies:** `npm install` or `yarn install`
3.  **Set up environment variables:** Create a `.env.local` file in the root directory and add your Convex API key, Clerk publishable key, and OpenAI API key.  Refer to the `.env.example` file for variable names.
4.  **Run the development server:** `npm run dev` or `yarn dev`


## Directory Structure

The project follows a well-organized directory structure for maintainability and scalability. Key directories include:

*   `app/`: Next.js App Router pages and layouts.
*   `components/`: Reusable React components.
*   `convex/`: Convex functions and schema.
*   `hooks/`: Custom React hooks.
*   `lib/`: Utility functions.
*   `public/`: Static assets (images, audio files).


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


## License

[Specify your license here]


This README provides a starting point and should be expanded upon with more detailed instructions and information as the project evolves. Remember to replace placeholder content (like the banner image URL and license) with your actual information.
