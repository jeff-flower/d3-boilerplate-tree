# d3-boilerplate

The Vantiv boilerplate is a hierarchical relation made of 4 entities: test suites, test modules, tests and critieria.
Test Suites contain modules, modules contain tests, and tests contain critieria.  

The viewing tool for the Vantiv Boilerplate used a confusing layout that made it difficult to visualize and navigate the 
relationships between entities.  

I built this project as a proposal for what a reimagined boilerplate tool might look like. Since it's a prototype, it's a little (ok, a lot) rough around the edges.

My main goals with this project were to allow the user to:
- Explore entity relationships
- View entity details

## Next Steps
Given more time to work on this project, my next goals would be to provide the user:
- a way to edit entity details 
- a way to add/remove connections between entities


# See it working
Since this is a prototype, this project is built to work without the need for a server to make backend API calls.  
All you'll need is a simple server to serve the index.html file.
I suggest [http-server](#https://www.npmjs.com/package/http-server)