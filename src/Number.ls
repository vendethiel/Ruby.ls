Number::<<<
	times: (fn) ->
		for i to (@ - 1) then fn(i)
	
	is-multiple-of: (num) -> @ % num === 0
	
	is-even: -> @is-multiple-of 2
	
	is-odd: -> !@is-multiple-of 2
	
	is-integer: -> @ % 1 == 0
	
	round: ->
		mul = 10 ** (it ? 1)
		Math.round(@ * mul) / mul
		
	floor: ->
		mul = 10 ** (it ? 1)
		Math.floor(@ * mul) / mul
	
	ceil: ->
		mul = 10 ** (it ? 1)
		Math.ceil(@ * mul) / mul
	
	log: (base) -> ln(@) / (if base then ln base else ln 10)
	
	ln: -> ln @
	
	upto: -> [Number @ to it]
	downto: -> [it to Number @].reverse!