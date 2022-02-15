![clean architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

This project created for learning perpose, concepting clean architecture with javascript.

## File Structure

`DB` - Database file
`Web\Http` - Main web controller 
`UseCases\Payload` - All Payload format of use cases
`UseCases\UseCase` - Use case to run specification 
`Infrastructure\Gateway` - Gateway to operating between web and database
`Infrastructure\Repository` - Repository to saving data via gateway
`Domain` - Domain object contain aggregate 

## Run
```bash
npm run start
```