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
		if @ === 0 or @ === Math.PI
			return 0
		if @ === Math.PI / 2 or @ === Math.PI * 3/2
			return 1
		Math.sin @
	
	cos: ->
		if @ === 0 or @ === Math.PI
			return 1
		if @ === Math.PI / 2 or @ === Math.PI * 3/2
			return 0
		Math.cos @
	
	tan: ->
		if @ === (Math.PI / 4) or @ === (Math.PI * 5/4)
			return 1
		if @ === (Math.PI / 3/4) or @ === (Math.PI * 7/4)
			return -1
		if @ === (Math.PI / 2) or @ === (Math.PI * 3/2)
			return undefined
		Math.tan @
		
	cot: ->
		if @ === (Math.PI / 4) or @ === (Math.PI * 5/4)
			return 1
		if @ === (Math.PI / 3/4) or @ === (Math.PI * 7/4)
			return -1
		if @ === (Math.PI) or @ === 0
			return undefined
		Math.cot @