FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["RouletteBackend/RouletteBackend.csproj", "RouletteBackend/"]
RUN dotnet restore "RouletteBackend/RouletteBackend.csproj"
COPY . .
WORKDIR "/src/RouletteBackend"
RUN dotnet build "RouletteBackend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "RouletteBackend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RouletteBackend.dll"]
