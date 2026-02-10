# 🤖 AI Prompting with Node.js and Ollama

This project uses Node.js to communicate with the **DeepSeek** model via Ollama. You will be running everything directly inside **VS Code**.

---

## 🛠️ Step 1: Prepare VS Code and Ollama

1. **Install Ollama:** Download and run the installer from [ollama.com](https://ollama.com/). 
   * *Note: Make sure the Ollama icon is visible in your system tray (bottom right on Windows).*
2. **Open Project:** Open VS Code, go to `File > Open Folder...` and select this project folder.
3. **Open Terminal:** Press ``Ctrl + ` `` (backtick) or go to `Terminal > New Terminal` at the top menu.

---

## 📥 Step 2: Setup the Environment

Run these commands **inside the VS Code terminal** in order:

### 1. Download the AI Model
First, we need to pull the model to your machine. This may take a few minutes depending on your internet speed:
```bash
ollama pull deepseek-v3.1:671b-cloud

2. Install Project Dependencies
Install the ollama JavaScript library so Node.js can talk to the engine:

Bash
npm install
🚀 Step 3: Execute the Project
In the VS Code file explorer (left side), click on index.js to view the code.

In the Terminal, type the following and hit Enter:

Bash
node index.js
🧪 Student Task: Code Modification
Once you get the AI to answer "Why is the sky blue?", try the following:

Locate the content line in index.js.

Change the question to: "Explain how a CPU works in one sentence."


Run node index.js again in the terminal to see the new output.

❓ Troubleshooting (Inside VS Code)
Error: ECONNREFUSED: This means the Ollama application isn't running on your computer. Minimize VS Code and launch Ollama from your desktop/start menu.

Error: Module not found: You likely forgot to run npm install.

Terminal doesn't recognize node: You need to install Node.js from nodejs.org and restart VS Code.
