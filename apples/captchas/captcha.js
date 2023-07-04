const { ocrSpace } = require("ocr-space-api-wrapper");

try {
  // Using your personal API key + local file
  const res2 = ocrSpace("./c2.jpg", {
    apiKey: "K86271304688957",
  }).then((res) => {
    console.log(res.ParsedResults[0].ParsedText);
    });
} catch (error) {
  console.error(error);
}
