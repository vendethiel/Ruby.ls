Array::<<<
	find: ->
		switch typeof! it
		| 'Function' => [return elem for elem in @ when it elem]
		| 'RegExp'   => [return elem for elem in @ when it.exec elem]
		| otherwise  => [return elem for elem in @ when it is elem]

	find-all: ->
		switch typeof! it
		| 'Function' => [elem for elem in @ when it elem]
		| 'RegExp'   => [elem for elem in @ when it.exec elem]
		| otherwise  => [elem for elem in @ when it is elem]

	find-index: ->
		switch typeof! it
		| 'Function' => [return idx for elem, idx in @ when it elem]
		| 'RegExp'   => [return idx for elem, idx in @ when it.exec elem]
		| otherwise  => [return idx for elem, idx in @ when it is elem]

	find-indexes: ->
		switch typeof! it
		| 'Function' => [idx for elem, idx in @ when it elem]
		| 'RegExp'   => [idx for elem, idx in @ when it.exec elem]
		| otherwise  => [idx for elem, idx in @ when it is elem]

	count: ->
		return @length unless it?

		@find-all it .length

	remove-at: (start, end) ->
		return @ unless start?
		end = start unless end?

		@splice start, 1 + (end - start)

		@

	include: (el, idx) -> @clone!add el, idx

	exclude: -> @clone!remove ...&

	clone: -> []concat @

	unique: -> unique @

	flatten: ->
		flat = []
		flatten = @flatten

		for elem in @
			if typeof! elem == /(Array|Collection|Arguments|Object)/
				flat .= concat elem.flatten!
			else flat.push elem

		flat

	union: (...arrays) ->
		arr = @clone!
		for array in arrays then arr .= concat array
		arr.unique!

	intersect: (...arrays) ->
		arr = []
		l = arrays.length

		for elem in @
			i = 0
			for array in arrays
				++i if elem in array

			arr.push elem if i is l

		arr

	subtract: (...arrays) ->
		arr = []
		l = arrays.length

		:elem for elem in @
			for array in arrays
				continue elem if elem in array

			arr.push elem

		arr

	at: ->
		l = @length

		unless &1?
			return @[if it < 0 then l + it else it]

		[@[if i < 0 then l + i else i] for i in &]

	first: ->
		if it?
			@slice 0 it
		else
			@0

	last: ->
		if it?
			@slice it+1
		else
			@[*-1]

	min: -> fold1 (<?), @

	max: -> fold1 (>?), @

	least: ->
		console.log @group-by it ? 'length'

	most: ->
		console.log @group-by it ? 'length'

	sum: -> sum @

	average: -> average @

#	in-groups: (num, fill-with) -> #awfully useless

	in-groups-of: (num, fill-with) ->
		ret = []
		group = []
		len = @length

		if num >= len
			return [@]

		i = 0
		while i < len, ++i
			group.push @[i]

			if ((i + 1) % num) == 0
				ret.push group
				group = []

		if group.length
			if arguments.length > 1
				#fill
				add = abs (i % num) - num
				i = 0
				while i < add, ++i
					group.push fill-with

			ret.push group

		ret

	is-empty: -> !@compact!length

	sort-by: (f) ->
		sort-by (if typeof! f is 'Function' then f else -> it[f]), @

	randomize: ->
		{length: len}:arr = @concat!

		var j, x
		while len
			j = parse-int Math.random! * len
			x = arr[--len]
			arr[len] = arr[j]
			arr[j] = x

		arr

	sample: ->
		if arguments.length
			@randomize!slice 0 it
		else @randomize!0

	zip: (...arrays) ->
		arrays = [@]concat arrays

		for v, k in @
			for array in arrays
				if array[k]
					that

	each: -> each it, @

	add: (el, idx) ->
		idx = @length unless idx?
		@splice ...[idx, 0]concat el
		@

	remove: (...vals) ->
		arr = @clone!

		for value in vals
			i = 0
			switch typeof! value
			| 'Function' =>
				while i < arr.length
					if value arr[i]
						arr.splice i, 1
					else ++i
			| 'RegExp' =>
				while i < arr.length
					if value.exec arr[i]
						arr.splice i, 1
					else ++i
			| otherwise =>
				while i < arr.length
					if value is arr[i]
						arr.splice i, 1
					else ++i

		arr

	compact: ->
		ret = []

		for v in @
			if v?
				if typeof! v is 'Array'
					if (v = v.compact!)length
						ret.push that
				else
					ret.push v

		ret

	group-by: (f) ->
		result = {}

		unless typeof! f is 'Function'
			c = f
			f = -> it[c]

		for v in @
			result[][f v]push v


		result