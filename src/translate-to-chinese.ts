// src/translate-to-chinese.tsx (示例概念代码)
import { Clipboard, showToast, Toast, getPreferenceValues, getSelectedText } from "@raycast/api";

// interface Preferences {
//   apiKey: string;
//   // 其他可能的设置
// }

// // 假设的翻译函数
// async function translateText(text: string, targetLang: string, apiKey: string): Promise<string> {
//   // 在这里实现调用翻译 API 的逻辑
//   // 例如：使用 fetch 调用 DeepL 或 Google Translate API
//   // const response = await fetch(...);
//   // const data = await response.json();
//   // return data.translations[0].text;
//   if (!text) return ""; // 防止空请求
//   console.log(`Simulating translation of "${text}" to ${targetLang} using key ${apiKey ? '******' : 'NONE'}`);
//   // 实际应替换为 API 调用
//   if (text === "Hello") return "你好";
//   return `翻译结果 (${targetLang}): ${text}`; // 模拟返回
// }

export default async function Command() {
  try {
    // 获取当前鼠标选中的文本
    const selectedText = await getSelectedText();

    if (!selectedText) {
      await showToast({ style: Toast.Style.Failure, title: "No text selected", message: "Please select text to translate." });
      return;
    }

    console.log(`Selected text: ${selectedText}`);
    await showToast({ style: Toast.Style.Success, title: "Translated and Pasted", message: `Original: ${selectedText.substring(0, 20)}...` });
    // const selectedText = await Clipboard.readText();
    // console.log(`Selected text: ${selectedText}`);
    
    // if (!selectedText) {
    //   await showToast({ style: Toast.Style.Failure, title: "No text selected", message: "Please select text to translate." });
    //   return;
    // }

    // await showToast({ style: Toast.Style.Animated, title: "Translating..." });

    // const preferences = getPreferenceValues<Preferences>();
    // const apiKey = preferences.apiKey; // 从设置获取 API Key

    // const translatedText = await translateText(selectedText, "zh", apiKey); // "zh" 代表中文

    // if (translatedText) {
    //   // await Clipboard.paste(translatedText);
    //   await showToast({ style: Toast.Style.Success, title: "Translated and Pasted", message: `Original: ${selectedText.substring(0, 20)}...` });
    // } else {
    //   throw new Error("Translation failed");
    // }
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Translation Failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}