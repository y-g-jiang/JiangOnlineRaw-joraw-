all: 
	emcc \
		--bind \
		-I../libraw/ \
		-s USE_LIBPNG=1 \
		-s USE_ZLIB=1 \
		-s MODULARIZE=1 \
		-s EXPORT_ES6=1 \
		-s DISABLE_EXCEPTION_CATCHING=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s ENVIRONMENT="web" \
		-O3 \
		libraw_wrapper.cpp \
		./lib/.libs/libraw.a \
		-o libraw.js
