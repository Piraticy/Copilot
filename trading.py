class TradingApp:
    def __init__(self):
        self.portfolio = {}

    def buy(self, symbol, quantity, price):
        if symbol in self.portfolio:
            self.portfolio[symbol]['quantity'] += quantity
            self.portfolio[symbol]['total_cost'] += quantity * price
        else:
            self.portfolio[symbol] = {'quantity': quantity, 'total_cost': quantity * price}
        print(f"Bought {quantity} shares of {symbol} at {price} each.")

    def sell(self, symbol, quantity, price):
        if symbol in self.portfolio and self.portfolio[symbol]['quantity'] >= quantity:
            self.portfolio[symbol]['quantity'] -= quantity
            self.portfolio[symbol]['total_cost'] -= quantity * price
            print(f"Sold {quantity} shares of {symbol} at {price} each.")
            if self.portfolio[symbol]['quantity'] == 0:
                del self.portfolio[symbol]
        else:
            print(f"Not enough shares of {symbol} to sell.")

    def get_portfolio(self):
        return self.portfolio

if __name__ == "__main__":
    app = TradingApp()
    app.buy("AAPL", 10, 150)
    app.sell("AAPL", 5, 155)
    print(app.get_portfolio())