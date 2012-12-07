Number::<<<
	times: (fn) -> for i from 1 to @ then fn(i)
	
	is-multiple-of: (num) -> @ % num == 0
	
	is-even: -> @ % 2 == 0
	
	is-odd: -> @ % 2 != 0
	
	is-integer: -> @ % 1 == 0
	
	round: ->
		mul = 10 ** (it ? 0)
		Math.round(@ * mul) / mul
		
	floor: ->
		mul = 10 ** (it ? 0)
		Math.floor(@ * mul) / mul
	
	ceil: ->
		mul = 10 ** (it ? 0)
		Math.ceil(@ * mul) / mul
	
	log: (base) -> ln(@) / (if base then ln base else ln 10)
	
	ln: -> ln @
	
	upto: -> [Number @ to it]
	downto: -> [it to Number @].reverse!
	
	to-base: (base) ->
		result = 0
		remainder = @
		while remainder > 0
			power = Math.floor(Math.log(remainder) / Math.log(base))
			q = base ** power
			n = Math.floor(remainder / q)
			result += n * 10 ** power
			remainder -= n * q
		result
		
	# Trigonometric functions
	sin: ->
		| @ in [0 Math.PI] => 0
		| @ in [Math.PI / 2, Math.PI * 3/2] => 1
		| otherwise => Math.sin @
	
	cos: ->
		| @ in [0 Math.PI] => 1
		| @ in [Math.PI / 2, Math.PI * 3/2] => 0
		| otherwise => Math.cos @
	
	tan: ->
		| @ in [Math.PI / 4, Math.PI * 5/4] => 1
		| @ in [Math.PI / 3/4, Math.PI*7/4] => -1
		| @ in [Math.PI/2, Math.PI*3/2] => undefined
		| otherwise => Math.tan @
		
	cot: ->
		| @ in [Math.PI / 4, Math.PI * 5/4] => 1
		| @ in [Math.PI / 3/4, Math.PI*7/4] => -1
		| @ in [0 Math.PI] => undefined
		| otherwise => Math.cot @