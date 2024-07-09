## Submission for Mayden interview.
Stories Completed: 1, 2, 3, 4, 5, 6, (7 & 8)
This is a dockerised Larvael application with a SPA react/ts front-end.

**Most of the files in here are boilerplate from Laravel. The files that are important to lookat are located in `resources/js`**
**There is also some items added such as the Router and AuthContext which aren't really used but I had originally intended them to be. You should be able to see how they fit in but they are not really important now.** 


### Quick Start
* Clone the repo
* Start Docker
* Run the container
* Open a terminal and navigate to the cloned repo.
* Run the local webserver using `vendor/bin/sail npm run dev`

### Approach
I was initially going to create a backend application with authentication and models for the shopping list objects. But having not directly implimented SPA authentication in a while and not fancying copping out with Sanctum, I decided it would be better to get stuck in with the rest of the tasks. So I opted to go for a front-end application 

The shopping List is a table of entries, with action buttons to move, check or delete an entry.
The shopping list is persisted in local storage using a custom hook.

There are a variety of unit tests, Some are unit tests for functions, some for hooks and some for components. Given more time, these couple be further applied thoughout the components. and integration tests would be applied.

### Whats next
* Implimenting ZOD for validation / form validation.
* Implimenting Cypress to write front-end style integration tests.
* Implimenting Authentication

