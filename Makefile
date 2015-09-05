BIN = ./node_modules/.bin

.PHONY: serve build release bootstrap;

serve:
	@$(BIN)/webpack-dev-server --content-base dist --inline --colors --no-info --port 9000

build:
	@$(BIN)/webpack --progress

release:
	@NODE_ENV=production $(BIN)/webpack -p --progress

bootstrap:
	@npm install