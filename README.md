# 🎨 Imagify – AI Text-to-Image Generator

Imagify is an AI-powered web application that transforms text prompts into visually appealing images. Users can describe their imagination in words and generate images within seconds through a simple and interactive interface.

The project is built using the MERN stack, combining a responsive React frontend with a Node.js and Express backend.

## 🌐 Live Demo

- **Frontend:** [Imagify – AI Text-to-Image Generator](https://imagify-frontend-eta-rouge.vercel.app/)
- **Backend API:** [Imagify Backend – Render](https://imagify-backend-ty6c.onrender.com)

Try the live application and experience AI-powered image generation!

## ✨ Features

- **AI Image Generation:** Convert text descriptions into AI-generated images.
- **Interactive UI:** Clean, modern, and user-friendly interface.
- **Image Preview:** View generated images directly within the application.
- **Download Images:** Download generated images to your device.
- **Generate Again:** Create new images using different text prompts.
- **Responsive Design:** Optimized for different screen sizes.
- **CI Automation:** GitHub Actions workflow to automatically build and validate the frontend.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| Tailwind CSS | Responsive UI styling |
| JavaScript | Application logic |
| Node.js | Backend runtime |
| Express.js | Backend API |
| MongoDB | Database |
| Git & GitHub | Version control |
| GitHub Actions | Continuous Integration |

## 📂 Project Structure

```text
Imagify-Text-to-Image/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── frontend-ci.yml
│
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js (20.19+ recommended)
- npm
- Git
- MongoDB (if required by the backend)

### 1. Clone the Repository

```bash
git clone https://github.com/PalakMishra1905/Imagify-Text-to-Image.git

cd Imagify-Text-to-Image
```

### 2. Setup the Frontend

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at the local URL displayed in your terminal (usually `http://localhost:5173`).

### 3. Setup the Backend

Open another terminal and navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables in a `.env` file according to the backend configuration.

Start the backend using the script configured in `server/package.json`.

## ⚙️ Environment Configuration

The backend may require environment variables for database connectivity, API authentication, and image generation.

Create a `.env` file inside the server directory and configure the variables required by your implementation.

**Important:** Never commit API keys, database credentials, or other sensitive information to GitHub.

## 🔄 CI/CD

This project uses **GitHub Actions** for Continuous Integration.

### Frontend CI Workflow

The GitHub Actions workflow automatically runs when code is pushed to the `main` branch or when a pull request targets `main`.

The workflow performs the following steps:

1. Checks out the repository.
2. Sets up the Node.js environment.
3. Installs frontend dependencies using `npm ci`.
4. Builds the React application using `npm run build`.

This helps identify build errors before changes are merged or deployed.

## 🔮 Future Improvements

- Add image generation history.
- Support multiple image generation models.
- Improve image customization options.
- Implement automated backend testing.
- Extend CI/CD automation to backend deployment.

## 👩‍💻 Author

**Palak Mishra**

- GitHub: [PalakMishra1905](https://github.com/PalakMishra1905)
- Project Repository: [Imagify – Text to Image](https://github.com/PalakMishra1905/Imagify-Text-to-Image)

---

⭐ If you find this project interesting, consider giving the repository a star!
