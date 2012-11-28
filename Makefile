mvq.jsx.js : lib/mvq.jsx
	jsx --executable node --output $@ $<
	node $@

test:
	prove

test-optimized:
	JSX_OPTS=--release prove
