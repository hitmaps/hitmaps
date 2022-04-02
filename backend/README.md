# Roulette - Backend

The backend for the HITMAPS Roulette website

(does not contain any In-Game Roulette code)

## Creating a New Migration
Inside of the `DataAccess` folder, execute the following:

```
dotnet ef migrations add MigrationName --startup-project ../API
```

## Applying Migrations
Inside of the `DataAccess` folder, execute the following:

```
dotnet ef database update --startup-project ../API