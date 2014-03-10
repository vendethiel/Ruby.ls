i = 0
3.times -> i += 1
eq 3 i

equal true 8.is-multiple-of 4
equal false 8.is-multiple-of 3

equal true 4.is-even!
equal true 3.is-odd!

equal true 3.is-integer!
equal false 3.2.is-integer!

equal 3.14 Math.PI.round 2
equal 3.1415 Math.PI.floor 4
equal 3 Math.PI.floor!
equal 3.1416 Math.PI.ceil 4

equal 2 9.log 3
equal 2 100.log!

equal 1 Math.E.ln!

eq [3, 4, 5] 3.upto 5
eq [10, 9, 8] 10.downto 8

equal 1210 100.to-base 4
equal 1010 10.to-base 2

equal 1 Math.round (Math.PI / 4)tan!

equal 'Z' 90.chr!

eq '5 000' 5000.format!

eq '3m' 3_000_000.abbr!

ok 2012.is-leap-year!

ok not 2013.is-leap-year!

equal 1 1.millisecond!
equal 1000 1.second!

equal 120000 2.minutes!

equal 3024000000 5.week!