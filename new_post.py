import os
import sys
from datetime import datetime

def create_post():
    # 獲取參數或手動輸入
    title = input("📝 文章標題: ").strip()
    if not title:
        print("❌ 標題不能為空")
        return

    lang = input("🌐 語言 (zh/en/ja) [預設 zh]: ").lower() or "zh"
    slug = input("🔗 URL Slug (例如 my-first-post): ").strip()
    
    if not slug:
        slug = title.lower().replace(" ", "-")

    date_str = datetime.now().strftime("%Y-%m-%d")
    folder = f"src/content/blog/{lang}"
    
    # 確保資料夾存在
    os.makedirs(folder, exist_ok=True)
    
    file_path = f"{folder}/{slug}.md"
    
    # 檢查是否已存在
    if os.path.exists(file_path):
        print(f"⚠️ 檔案 {file_path} 已存在，請更換 Slug。")
        return

    content = f"""---
title: "{title}"
date: {date_str}
---

# {title}

在此開始寫作...
"""
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"✅ 成功創建: {file_path}")

if __name__ == "__main__":
    create_post()