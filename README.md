This is my attempt at Project 2 sent for the Anxend Interview Project.

In this project I also planned to add a login page, which would secure the page to only the users using it, therefore increasing security.

I also planned to use EdgeDB, I was able to do the migration, but I was not able to connect to the DB, the code I used to attempt that has been commented out in the application. You can have a look at that. I might have had an issue with my setup that I was not able to figure out in time.

In terms of caching I would have used memory caching to store the resources in the memory cache of the browser after the first visit. I would have also used an expires header for http caching in order to specify a date at which the resources should be considered stale. I would have also used database caching to cache the queries in order to improve performance.

To get started make sure your have nodejs setup on your system and then:

Install Dependencies
npm ci

EdgeDB
To setup Edgedb follow the instructions on https://www.edgedb.com/install#linux-debianubuntults to setup the Edgedb cli. Then use edgedb project init to create an edgedb database and run the migration The databse will be populated with a starting schema defined by the default.esdl file.

If needed you can run a migration with: edgedb migrate (and to create a new one run edgedb migration create)

Development
To start development, run the remix server use: npm run dev