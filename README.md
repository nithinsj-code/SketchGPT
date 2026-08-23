# SketchGPT 🪄

SketchGPT is an interactive web application that allows users to sketch on a digital canvas and uses Google's powerful **Gemini 3.6 Flash AI** to playfully guess, analyze, and describe the drawing in real-time. 

With a beautifully sleek, minimalist neo-brutalist design, SketchGPT bridges the gap between your doodles and cutting-edge Large Language Models!

## ✨ Features
- **Clean Minimalist UI:** High-contrast, glassmorphic black-and-white aesthetic for a premium drawing experience.
- **AI Vision Integration:** Seamlessly talks to Gemini to analyze your drawings.
- **Intuitive Canvas:** Smooth, lag-free drawing interface built with React.
- **Responsive Design:** Optimized for both desktop and mobile users.

## 🛠 Technologies Used
- **Frontend:** React, HTML5 Canvas, Vanilla CSS
- **Backend:** Python, Flask, Gunicorn
- **AI:** Google Generative AI (`gemini-3.6-flash`)

## 🚀 Getting Started

Follow these instructions to run SketchGPT locally on your machine.

### Prerequisites
- Node.js (for the frontend)
- Python 3.9+ (for the backend)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Backend Setup
1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/nithinsj-code/SketchGPT.git
   cd SketchGPT/backend
   ```
2. Create and activate a virtual environment (recommended):
   ```bash
   python -m venv myenv
   # On Windows:
   .\myenv\Scripts\activate
   # On Mac/Linux:
   source myenv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the `backend` folder and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
5. Start the backend server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Open a new terminal window and navigate to the frontend folder:
   ```bash
   cd SketchGPT/frontend
   ```
2. Install the Node dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open your browser and visit `http://localhost:3000` to start drawing!

## 🌍 Deployment
SketchGPT is fully ready for production deployment:
- **Backend:** Deploy the `backend` directory to [Render](https://render.com) using the `requirements.txt` and `gunicorn app:app` as the start command. Don't forget to add `GEMINI_API_KEY` to Render's environment variables.
- **Frontend:** Deploy the `frontend` directory to [Vercel](https://vercel.com). Add an environment variable named `REACT_APP_API_URL` pointing to your Render backend URL.

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.

## ✉️ Contact
Nithin - [GitHub Profile](https://github.com/nithinsj-code)
