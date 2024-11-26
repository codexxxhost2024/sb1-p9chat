const API_URL = 'https://api.together.xyz/v1/chat/completions';

export async function sendMessage(input: string, apiKey: string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'meta-llama/Llama-Vision-Free',
      messages: [{ role: 'user', content: input }],
      max_tokens: 4000,
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ['<|eot_id|>', '<|eom_id|>']
    })
  });

  return response.json();
}