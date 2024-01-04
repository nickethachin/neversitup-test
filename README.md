# Standard of init project structure and defined convention
## Standard of init project structure
For a quick private project I tend to go with @nestjs/cli then just `nest new project-name` then have a go with it.

But for more complex and/or corporate project I'll try my best to follow [CatsMiaow's nestjs-project-structure](https://github.com/CatsMiaow/nestjs-project-structure) which is look something like this.

```js
+-- bin // Custom tasks
+-- dist // Source build
+-- public // Static Files
+-- src
|   +-- config // Environment Configuration
|   +-- entity // TypeORM Entities
|   +-- auth // Authentication
|   +-- common // Global Nest Module
|   |   +-- constants // Constant value and Enum
|   |   +-- controllers // Nest Controllers
|   |   +-- decorators // Nest Decorators
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- interceptors // Nest Interceptors
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- pipes // Nest Pipes
|   |   +-- providers // Nest Providers
|   |   +-- * // models, repositories, services...
|   +-- shared // Shared Nest Modules
|   +-- gql // GraphQL Structure
|   +-- * // Other Nest Modules, non-global, same as common structure above
+-- test // Jest testing
+-- typings // Modules and global type definitions

// Module structure
// Add folders according to module scale. If it's small, you don't need to add folders.
+-- src/greeter
|   +-- * // folders
|   +-- greeter.constant.ts
|   +-- greeter.controller.ts
|   +-- greeter.service.ts
|   +-- greeter.module.ts
|   +-- greeter.*.t
```

## Defined convention
### Naming
- Use PascalCase for class names. E.g. GreeterService
- Use camelCase for variables and function names. E.g. greeterService
- Function names should start with a verb. E.g. getInfo()
- Use kebab-case for file names. E.g. greeter.service.ts
- Use UPPERCASE_SNAKE_CASE for constants. E.g. GREETER_SERVICE
- Use snake_case for database fields. E.g. greeter_service

### Code style
Pretty much whatever that project prettier config.<br>
*But* my personal preference is:
- Use single quotes for strings
- Use double quotes for JSX attributes
- Use semicolons
- Use trailing commas
- Use spaces instead of tabs
- Use 4 spaces for indentation
- Use arrow functions instead of function expressions