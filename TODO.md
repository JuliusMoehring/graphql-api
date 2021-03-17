# TODO

- [ ] Add resolvers
- [ ] Add authentication

## Authentication

Authentication will be done using JWT

1. Retrieve only own user data ⮕ `userId from JWT === requested userId` 
2. Only users with role `admin` should allowed to use mutations (`create, update, delete`) for content
3. LogIn/ LogOut using credentials; optional `rememberMe`