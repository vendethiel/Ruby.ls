Number::<<<
	times: (fn) -> for i from 1 to @ then fn(i)
	
	is-multiple-of: (num) -> @ % num == 0
	
	is-even: -> @ % 2 == 0
	
	is-odd: -> @ % 2 != 0
	
	is-integer: -> @ % 1 == 0

	abs: -> Math.abs @
	
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

	downto: -> [Number @ to it by -1]
	
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

	chr: -> String.from-char-code @

	format: (pre, thousands = ' ', decimals = ',') ->
		[int, frac] = "#@" / '.'

		result = ""
		i = int.length
		while i > 0, i -= 3
			if i < int.length
				result = thousands + result

			result = int.slice(Math.max 0 i - 3; i) + result

		if frac?
			result += decimals + frac

			if "#frac"length < pre
				i = 0
				result += "0" * (pre - "#frac"length)

		result

	abbr: ->
		str = 'kmbt'
		mid = 0
		limit = 4

		fixed = @to-fixed 20
		decimal-place = fixed.search /\./
		numeral-place = fixed.search /[1-9]/
		significant = decimal-place - numeral-place
		var unit, i, divisor
		if significant > 0
			significant -= 1
		
		i = Math.max Math.min((significant / 3)floor!, if limit is false then str.length else limit), -mid
		unit = str.charAt i + mid - 1
		console.log unit
		if significant < -9 
			i = -3
			it = significant.abs! - 9
			unit = str.slice 0 1
		
		divisor = if bytes? then 2 ** (i * 10) else 10 ** (i * 3)
		return (@ / divisor)round(it || 0)format! + unit.trim!