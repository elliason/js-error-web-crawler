build-app:
	docker run -it -v `pwd`/app:/var/www/html -w /var/www/html/ docker.mediafactory.cz/node:12-stretch-slim bash -c 'yarn && yarn build';
