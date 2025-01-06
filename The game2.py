import tkinter as tk
import random

class SimpleGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Simple Game")
        
        self.score = 0
        self.label = tk.Label(root, text="Score: 0", font=("Helvetica", 16))
        self.label.pack(pady=20)
        
        self.button = tk.Button(root, text="Click me!", font=("Helvetica", 16), command=self.increase_score)
        self.button.pack(pady=20)
        
        self.reset_button = tk.Button(root, text="Reset", font=("Helvetica", 16), command=self.reset_score)
        self.reset_button.pack(pady=20)
        
    def increase_score(self):
        self.score += random.randint(1, 10)
        self.label.config(text=f"Score: {self.score}")
        
    def reset_score(self):
        self.score = 0
        self.label.config(text="Score: 0")

if __name__ == "__main__":
    root = tk.Tk()
    game = SimpleGame(root)
    root.mainloop()