import random

def main():
    print("Welcome to the Number Guessing Game!")
    number_to_guess = random.randint(1, 100)
    attempts = 0

    while True:
        guess = input("Guess a number between 1 and 100 (or type 'exit' to quit): ")
        
        if guess.lower() == 'exit':
            print("Thanks for playing! Goodbye.")
            break
        
        try:
            guess = int(guess)
        except ValueError:
            print("Please enter a valid number.")
            continue
        
        attempts += 1
        
        if guess < number_to_guess:
            print("Too low! Try again.")
        elif guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You guessed the number in {attempts} attempts.")
            break

if __name__ == "__main__":
    main()