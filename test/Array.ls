a = [1 to 5]

equal 1 a.find (% 2)

eq [1 2] a.find-all (< 3)

equal 1 a.find-index (== 2)

eq [0 2 4] a.find-indexes (% 2)

equal 5 a.count!

equal 3 a.count (> 2)

eq [1 3 4 5] a.clone!remove-at 1

eq [1 4 5] a.clone!remove-at 1 2

#tests add
eq [1 to 6] a.include 6

eq [1 to 8] a.include [6 to 8]

#tests remove
eq [1 2 3] a.exclude 4 5

eq [1 2 3] a.exclude (> 3)

eq <[a b c e]> <[a b c d e]>exclude /d/

eq <[a b c e]> <[a b c d e]>exclude 'd'

eq a, a.clone!

eq [1 2 3 4] [1 2 2 2 3 4 4]unique!

eq [1 [2 [3 [[[[4]]]] [[5]]]]]flatten!, a

eq [1 2 3 4] [1 2]union [2 3] [3 4]

eq <[b]> <[a b]>intersect <[b c]> ['a' to 'e']

eq <[a e]> ['a' to 'f']subtract <[b c d]> <[f]>

equal 1 a.at 0

equal 5 a.at -1

eq [5 4] a.at -1 -2

eq [1 3] a.at 0 2

equal 1 a.first!

eq [1 2] a.first 2

equal 5 a.last!

eq [4 5] a.last 2

equal 1 a.min!

equal 5 a.max!

#todo least

#todo most

equal 15 a.sum!

equal 3 a.average!

eq [[1 2 3] [4 5]] a.in-groups-of 3

eq [[1 2 3] [4 5 0]] a.in-groups-of 3 0

eq [[1 2 3 4] [5 '?' '?' '?']] a.in-groups-of 4 '?'

#tests compact
equal true []is-empty!

equal true [null]is-empty!

equal true [[null]]is-empty!

equal false a.is-empty!

eq [id: 1; id: 2] [id: 2; id: 1]sort-by 'id'

eq [{age: 15} {age: 21} age: 22] [{age: 21} {age: 15} age: 22]sort-by compare (.age)

#can't be tested
equal 5 a.randomize!length

#console.log a.randomize!

eq [['Martin' 'Luther' 'King'] ['John' 'F.' 'Kennedy']] ['Martin' 'John']zip ['Luther' 'F.'] ['King' 'Kennedy']

#can't be tested
equal true a.sample! in a

equal 3 a.sample(3)length

#console.log a.sample!

i = 0
a.each -> ++i
equal 5 i

eq {2: ['he' 'ya'] 4: ['heya']} <[he ya heya]>group-by 'length'

eq {13: [age: 15 name: 'Paul'; age: 15 name: 'Marc'] 18: [age: 20 name: 'Pierre']},
	[{age: 15 name: 'Paul'} {age: 15 name: 'Marc'} {age: 20 name: 'Pierre'}]group-by (.age - 2)