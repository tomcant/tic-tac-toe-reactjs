IMAGE = node:14.15-alpine
DOCKER = docker run --rm --name tic-tac-toe-reactjs-${@} -v $(PWD):/app:rw,delegated -w /app

.PHONY: install
install:
	$(DOCKER) $(IMAGE) yarn install

.PHONY: start
start:
	$(DOCKER) -it -p 3000:3000 $(IMAGE) yarn start

.PHONY: build
build:
	$(DOCKER) $(IMAGE) yarn build
