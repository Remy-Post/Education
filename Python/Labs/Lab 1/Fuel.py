import math as math #Importing stuff

#Simple explaination of the code
print('Here is a gas per km price calculator', end='------------\n\n')


#Variable declaration
Distance = int(math.floor(float(input('How much gas do you have in your vehicle: '))))
print() # For spacing

gas_eff = float(input('That is the gas efficiency you have in your vehicle: '))
print()

amount = float(input('How much gas do you have in your vehicle: '))
print()

price = round(float(input('What is the price of the gas: ')), 2)
print(end='\n\n\n\n\n\n\n\n\n\n\n\n\n')

# Fuel Cost Calculator Summary
print('Fuel Cost Calculator Summary:\n'
      'Total Distance: ', round(Distance,2), ' km\n',
      'Gas efficiency: ', round(gas_eff,2), ' km/L\n',
      'Fuel Price: ', round(price,2), ' per liter\n',
      'Total Fuel Required: ', round(Distance/gas_eff,2), 'liter(s)\n',
      'Total Cost (CAD): $',  round((Distance/gas_eff) * price,2), '\n',
      'Total Cost (USD): $', ((Distance/gas_eff) * price) * 0.80, end='\n----------------------')