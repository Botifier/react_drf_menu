[![Cirrus CI Build Status][cirrus-ci-badge]][cirrus-ci]

[cirrus-ci]: https://cirrus-ci.com/github/botifier/react_drf_menu
[cirrus-ci-badge]: https://api.cirrus-ci.com/github/botifier/react_drf_menu.svg
[.cirrus.yml]: https://github.com/botifier/react_drf_menu/blob/master/.cirrus.yml

## How to start
There is two seperate apps for both the frontend and the backend. <br/>
### The backend
To setup the backend you need python3 and pip and then run the following: 
<br/>
``` pip install -r requirements.txt ```
<br/>
Create the db:
<br/>
``` python manage.py migrate ```
<br/>Run the server: <br/>
``` python manage.py runserver ```
<br/>The api will run on http://localhost:8000/api/menu/ <br/>
### The frontend
For the frontend app, npm v6.9.0 and node v10.16.0 were used. <br />
cd into the frontend directory and then start with installing dependencies: <br/>
``` npm install ```
<br/> Serving the frontend: <br/>
``` npm start ```
<br/>
and then navigate to http://localhost:3000/
## Testing
To Run the backend tests:<br/>
``` python manage.py test ```
<br/>
To run the frontend tests:<br/>
``` npm test ```

## TODO
- [x] Add docker-compose for an easier setup/reusability 
- [x] Add more tests for the frontend components 
- [ ] Seperate config for production and development for the django backend.
- [] Add ci 

