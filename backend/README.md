# CSharp Boilerplate

A boilerplate project used to quickly spin up new APIs.  While this boilerplate is licensed under the Unlicense license, HITMAPS-based open-source projects that utilize this template will be relicensed to a different OSS license.

## Creating a New Migration
Inside of the `DataAccess` folder, execute the following:

```
dotnet ef migrations add MigrationName --startup-project ../API
```

## Applying Migrations
Inside of the `DataAccess` folder, execute the following:

```
dotnet ef database update --startup-project ../API
