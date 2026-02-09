import ollama from 'ollama';

async function askAI() {
  
  const response = await ollama.chat({
    model: 'deepseek-v3.1:671b-cloud',
    messages: [{ role: 'user', content: 'Why is the sky blue? Answer in only three sentences.' }],
  });
  console.log(response.message.content);
}

askAI();