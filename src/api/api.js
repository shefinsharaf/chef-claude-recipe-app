const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
console.log("🔑 OpenRouter API Key:", API_KEY); // Debug log

export async function fetchAIResponse(prompt) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173", // must match local URL
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful chef assistant." },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ OpenRouter API error:", data);
      return `⚠️ API Error: ${data.error?.message || "Unknown error"}`;
    }

    return data.choices[0]?.message?.content || "⚠️ No recipe returned.";
  } catch (error) {
    console.error("❌ Network Error:", error);
    return "⚠️ Could not reach AI.";
  }
}
