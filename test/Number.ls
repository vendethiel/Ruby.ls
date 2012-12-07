
# Number.times
output = []
3.times (i) -> output.push i
eq [0, 1, 2] output

equal true 8.is-multiple-of 4
equal false 8.is-multiple-of 3

equal true 4.is-even!
equal true 3.is-odd!

equal true 3.is-integer!
equal false 3.2.is-integer!

equal 3.14 Math.PI.round 2
equal 3.1415 Math.PI.floor 4
equal 3.1416 Math.PI.ceil 4

equal 2 9.log 3
equal 2 100.log!

equal 1 Math.E.ln!

eq [3, 4, 5] 3.upto(5)
eq [10, 9, 8] 10.downto(8)