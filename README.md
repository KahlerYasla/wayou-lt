<body style="background: #fff; font-family: Arial, sans-serif; line-height: 1.6;">

# Wayou
The recommender-engine, AI powered route generator.

## How to run

### Mobile
```sh
cd clients/mobile
npm i
npx expo start
```

### Center End Backend:
```sh
cd backend 
dotnet build
cd CenterEnd/CenterEnd.GatewayApi
dotnet run
```

### For Each MicroService:
```sh
cd backend/Microservices/\[name of the microservice\]
if the microservice powered by flask: python3 pip install python3 src/main.py
if the microservice powered by node: npm install node src/index.js
if the microservice powered by dotnet: dotnet build dotnet run
```

## Some Screenshots
<div style="display: flex; flex-wrap: wrap; justify-content: center;">
    <img src="./assets/screenshots/ss-login.jpeg" alt="login" height="300"/>
    <img src="./assets/screenshots/ss-home.jpeg" alt="home" height="300"/>
    <img src="./assets/screenshots/ss-decks.jpeg" alt="decks" height="300"/>
    <img src="./assets/screenshots/ss-place-info.jpeg" alt="place-info" height="300"/>
    <img src="./assets/screenshots/ss-create-route.jpeg" alt="create-route" height="300"/>
    <img src="./assets/screenshots/ss-route-info.jpeg" alt="route-info" height="300"/>
</div>

## Backend diagrams
### CenterEnd Project 
<img src="./assets/diagrams/center-end-structure.svg" alt="center-end-structure" height="500"/>

### Software Architecture
<img src="./assets/diagrams/software-architecture.svg" alt="software-architecture" height="500"/>

### Request-Response Flow
<img src="./assets/diagrams/request-response.drawio.svg" alt="request-response" height="500"/>

</body>
