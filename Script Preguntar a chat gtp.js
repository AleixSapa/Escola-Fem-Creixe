async function askChatGPT() {
    var question = document.getElementById("question").value;
    if (!question) return;
  
    // Aquí va la teva clau d'API de OpenAI
    var apiKey = 'la_teva_clau_d_API';
  
    var response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        model: "text-davinci-003",  // O qualsevol altre model de GPT que vulguis utilitzar
        prompt: question,
        max_tokens: 150,
      }),
    });
  
    var data = await response.json();
    document.getElementById("response").innerText = data.choices[0].text.trim();
  }
  