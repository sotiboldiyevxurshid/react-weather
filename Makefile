docker-build:
	docker build --tag crm-dev:tag .
docker-run:
	docker run -p 9080:80 -d docker.io/library/crm-dev:tag  
docker-start:
	make docker-build && make docker-run