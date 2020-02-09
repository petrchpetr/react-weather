
npm install -g create-react-app
mkdir myApp
cd myApp
create-react-app frontend


docker build ./

Now to run your React app through docker in dev mode enter the below command in terminal from the app’s directory:


pwd
docker run -it -p 3000:3000 -v [put your path here]/frontend/src:/frontend/src [image id]


To build a production image run:
$ docker build ./ --build-arg app_env=production
Then to run the production image:
$ docker run -i -t -p 3000:3000 [image id]


