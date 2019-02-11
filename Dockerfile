FROM microsoft/dotnet:3.0-sdk AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.sln .
COPY ObsDynamicOverlay.Web/*.csproj ./ObsDynamicOverlay.Web/
RUN dotnet restore

# Copy everything else and build
COPY ObsDynamicOverlay.Web/ ./ObsDynamicOverlay.Web/
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:3.0-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=build-env /app/ObsDynamicOverlay.Web/out .
ENTRYPOINT ["dotnet", "aspnetapp.dll"]
