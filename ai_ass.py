class AIAssistant:
    def __init__(self, name="GitHub Copilot"):
        self.name = name

    def greet(self):
        return f"Hello, I am {self.name}. How can I assist you today?"

if __name__ == "__main__":
    assistant = AIAssistant()
    print(assistant.greet())