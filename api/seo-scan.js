export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const system = `You are an elite SEO analyst. You MUST respond with ONLY a single valid complete JSON object. No markdown fences, no explanation, no text outside the JSON. Every array must be fully populated and the JSON must be properly closed.`;

  const user = `SEO audit for: ${url}

Reply with ONLY this JSON structure, fully filled with real analysis:
{"score":72,"grade":"B","gradeLabel":"Good","summary":"2-3 sentence summary of SEO health for this site.","stats":{"critical":2,"warnings":3,"passed":6},"onPage":[{"sev":"high","issue":"issue title","fix":"fix description"},{"sev":"high","issue":"issue title","fix":"fix description"},{"sev":"medium","issue":"issue title","fix":"fix description"},{"sev":"medium","issue":"issue title","fix":"fix description"},{"sev":"low","issue":"issue title","fix":"fix description"}],"technical":[{"sev":"high","issue":"issue title","fix":"fix description"},{"sev":"medium","issue":"issue title","fix":"fix description"},{"sev":"medium","issue":"issue title","fix":"fix description"},{"sev":"low","issue":"issue title","fix":"fix description"}],"checks":[{"name":"SSL Certificate","value":"Active","pass":true},{"name":"Mobile Friendly","value":"Yes","pass":true},{"name":"XML Sitemap","value":"Missing","pass":false},{"name":"Robots.txt","value":"Present","pass":true},{"name":"Page Speed","value":"Slow","pass":false},{"name":"Meta Title","value":"Present","pass":true},{"name":"Meta Description","value":"Missing","pass":false},{"name":"Canonical Tags","value":"Not Found","pass":false}],"keywords":[{"kw":"keyword 1","vol":"2.1K/mo","diff":"Easy","intent":"Info"},{"kw":"keyword 2","vol":"850/mo","diff":"Medium","intent":"Commercial"},{"kw":"keyword 3","vol":"320/mo","diff":"Easy","intent":"Transact"},{"kw":"keyword 4","vol":"1.4K/mo","diff":"Hard","intent":"Info"},{"kw":"keyword 5","vol":"3.2K/mo","diff":"Medium","intent":"Commercial"},{"kw":"keyword 6","vol":"900/mo","diff":"Easy","intent":"Nav"},{"kw":"keyword 7","vol":"1.8K/mo","diff":"Easy","intent":"Info"},{"kw":"keyword 8","vol":"600/mo","diff":"Hard","intent":"Transact"}],"content":["suggestion 1","suggestion 2","suggestion 3","suggestion 4"],"quickwins":["quick win 1","quick win 2","quick win 3","quick win 4"]}

Replace ALL values with real specific analysis for ${url}. No extra text, just the JSON.`;

  try {
    const geminiBody = {
      contents: [
        {
          parts: [{ text: system + "\n\n" + user }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.4,
        responseMimeType: "application/json",
      },
    };

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(geminiBody),
      }
    );

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      throw new Error(`Gemini API ${geminiRes.status}: ${errorText.slice(0, 150)}`);
    }

    const apiResp = await geminiRes.json();
    const rawText = apiResp?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText.trim()) {
      throw new Error("Gemini returned empty response");
    }

    // Extract JSON from response
    let jsonStr = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    const j0 = jsonStr.indexOf("{");
    const j1 = jsonStr.lastIndexOf("}");

    if (j0 === -1 || j1 === -1) {
      throw new Error("No JSON found in response");
    }

    jsonStr = jsonStr.slice(j0, j1 + 1);
    const data = JSON.parse(jsonStr);

    return res.status(200).json(data);
  } catch (error) {
    console.error("SEO Scan Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
