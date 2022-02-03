# WriteFreely

WriteFreely is a beta-version of <a href="https://github.com/Matt-Eva/FreeCreate">FreeCreate</a>, and serves as a platform for readers and writers. Users can post their own writing, browse others' writings, and interact with writing by liking it, adding it to their library, and flagging it for innappropriate content.

This is the frontend of WriteFreely, built with React.js and custom CSS via Styled Components. To checkout the backend, check out this <a href="https://github.com/Matt-Eva/phase-3-sinatra-react-project" target="_blank">repo</a>.

## Launch

### Backend

To launch the backend, first visit the <a href="https://github.com/Matt-Eva/phase-3-sinatra-react-project">backend repo</a> for this application and clone down the code into your target directory.

Then, navigate into the backend directory and run `rake db:migrate` to set up the database and `bundle install` to install all requisite gems in the gemfile. WriteFreely uses SQLite for its database. Finally, run `bundle exec rackup config.ru` in the command line to launch the server.

### Frontend

Once the backend is set up, you can clone down this repository into your target directory. Then, navigate into this frontend directory and run `npm install`. Once your installation is finished and your backend server is launched, you can run `npm start` from within the frontend directory to launch the application in the browser.

## Created By

Matt Eva:
- GitHub: https://github.com/Matt-Eva
- LinkedIn: https://www.linkedin.com/in/mattheweva/
