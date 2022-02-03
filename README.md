# WriteFreely

WriteFreely is a beta-version of <a href="https://github.com/Matt-Eva/FreeCreate">FreeCreate</a>, and serves as a platform for readers and writers. Users can post their own writing, browse others' writings, and interact with writing by liking it, adding it to their library, and flagging it for innappropriate content.

This is the frontend of WriteFreely, built with React.js and custom CSS via Styled Components. To checkout the backend, check out this <a href="https://github.com/Matt-Eva/phase-3-sinatra-react-project" target="_blank">repo</a>.

## Launch

### Backend

To launch the backend, first visit the <a href="https://github.com/Matt-Eva/phase-3-sinatra-react-project">backend repo</a> for this application and clone down the code into your target directory.

Then, navigate into the backend directory and run `rake db:migrate` to set up the database and `bundle install` to install all requisite gems in the gemfile. WriteFreely uses SQLite for its database. Finally, run `bundle exec rackup config.ru` in the command line to launch the server.

### Frontend

Once the backend is set up, you can clone down this repository into your target directory. Then, navigate into this frontend directory and run `npm install`. Once your installation is finished and your backend server is launched, you can run `npm start` from within the frontend directory to launch the application in the browser.

## Walkthrough

- Video Demo:
- Snapshots:

Login Screen:

<img width="1344" alt="Screen Shot 2022-02-03 at 3 41 07 PM" src="https://user-images.githubusercontent.com/89106805/152447680-2857779d-ca9e-4b9d-b83d-680d2a149449.png">

Homepage: 

<img width="1344" alt="Screen Shot 2022-02-03 at 3 42 17 PM" src="https://user-images.githubusercontent.com/89106805/152447752-0916c731-a7c8-4a17-9def-e2e491355449.png">

View Writing Page:

<img width="1344" alt="Screen Shot 2022-02-03 at 3 43 06 PM" src="https://user-images.githubusercontent.com/89106805/152447819-2cf1c06c-c396-4f59-aa23-9fb6689ef66c.png">

User Library View: 

<img width="1344" alt="Screen Shot 2022-02-03 at 3 44 52 PM" src="https://user-images.githubusercontent.com/89106805/152447992-6a8d215e-ad33-432c-b4a5-41c705fd3f83.png">

## Created By

Matt Eva:
- GitHub: https://github.com/Matt-Eva
- LinkedIn: https://www.linkedin.com/in/mattheweva/
