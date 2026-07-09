import os
import random

POSTS_DIR = "/Users/tiagoporto/Projetos/landingpage/content/posts"
DUPLICATE_IMG = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"

NEW_IMAGES = [
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200"
]

def run():
    if not os.path.exists(POSTS_DIR):
        print(f"Diretório {POSTS_DIR} não existe.")
        return
        
    files = os.listdir(POSTS_DIR)
    replaced_count = 0

    for file_name in files:
        if not file_name.endswith(".md"):
            continue
        file_path = os.path.join(POSTS_DIR, file_name)
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        if DUPLICATE_IMG in content:
            # Seleciona uma nova imagem e substitui
            new_img = random.choice(NEW_IMAGES)
            updated_content = content.replace(DUPLICATE_IMG, new_img)
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(updated_content)
            replaced_count += 1

    print(f"Substituição concluída! {replaced_count} posts foram atualizados com novas thumbnails.")

if __name__ == "__main__":
    run()
