![clean architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

This project created for learning perpose, concepting clean architecture with javascript.

## File Structure

- `DB` - Database file
- `example-with-framework` - Example with framework to run architecture
- `src/Web/Http` - Main web controller 
- `src/UseCases/Payload` - All Payload format of use cases
- `src/UseCases/UseCase` - Use case to run specification 
- `src/Infrastructure/Gateway` - Gateway to operating between web and database
- `src/Infrastructure/Repository` - Repository to saving data via gateway
- `src/Domain` - Domain object contain aggregate 

## Run
```bash
npm run start
```