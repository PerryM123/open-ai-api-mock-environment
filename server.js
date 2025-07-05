const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3926;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

app.use(cors());
// Middleware to parse JSON in the request body
app.use(express.json({ limit: "50mb" }));
// POST endpoint
app.post("/v1/chat/completions", async(req, res) => {
  const requestData = req.body;
  console.log("Received:", requestData);
  const isErrorPattern = !!process.env.ERROR_PATTERN;

  if (!isErrorPattern) {
    await sleep(2000);
    res.json({
      id: "chatcmpl-hogehoge",
      object: "chat.completion",
      created: 1748869333,
      model: "gpt-4.1-mini-2025-04-14",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              '{\n  "items": [\n    { "name": "ハーゲン ミニCコウチャクッキーコウガ", "price_total": 218 },\n    { "name": "オリジナルアイスブラッドオレンジ", "price_total": 204 },\n    { "name": "オカメ スゴイナットウS-903", "price_total": 264 },\n    { "name": "アタックコウキンEXハヤヨウカエ850g", "price_total": 308 },\n    { "name": "コウショウノドンゴジネヌ150*3", "price_total": 78 },\n    { "name": "セブスプリサンゴールド", "price_total": 499 },\n    { "name": "ワイドハイターEXパワー820ml", "price_total": 328 },\n    { "name": "サラサーティコットン100ムコウ56", "price_total": 280 },\n    { "name": "バナナ", "price_total": 256 },\n    { "name": "ハウスバーニク35g", "price_total": 100 },\n    { "name": "トマト コバコ", "price_total": 398 },\n    { "name": "ダゾンビオセイタクブドウ", "price_total": 326 },\n    { "name": "ダゾンビオ シチリアレモン 4コ", "price_total": 163 },\n    { "name": "コイワイヨーグルトシボウ0 400g", "price_total": 199 },\n    { "name": "ミヤマ イチオシキムチ 200g", "price_total": 153 },\n    { "name": "コクサンワカドリムネニク", "price_total": 596 }\n  ],\n  "receipt_total": 4626\n}',
            refusal: null,
            annotations: [],
          },
          logprobs: null,
          finish_reason: "stop",
        },
      ],
      usage: {
        prompt_tokens: 2565,
        completion_tokens: 427,
        total_tokens: 2992,
        prompt_tokens_details: {
          cached_tokens: 0,
          audio_tokens: 0,
        },
        completion_tokens_details: {
          reasoning_tokens: 0,
          audio_tokens: 0,
          accepted_prediction_tokens: 0,
          rejected_prediction_tokens: 0,
        },
      },
      service_tier: "default",
      system_fingerprint: "fp_hogehoge",
    });
  } else {
    res.status(401).json({
      error: {
        message:
          "You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accessing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.",
        type: "invalid_request_error",
        param: null,
        code: null,
      },
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
