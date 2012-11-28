mvq.jsx.js : lib/mvq.jsx
	jsx --executable node --output $@ $<
	node $@

test:
	prove
