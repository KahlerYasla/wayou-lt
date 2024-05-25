<body style="background: #fff;">

# Wayou
The AI powered route planner for the visually impaired.

## How to run
Mobile:
cd clients/mobile
npm i
npx expo start

Center End Backend:
cd backend 
dotnet build
cd CenterEnd/CenterEnd.GatewayApi
dotnet run

For Each MicroService:
cd backend/Microservices/\[name of the microservice\]
if the microservice powered by flask: cd python3 pip install python3 src/main.py

## Screenshots
<img src="./assets/screenshots/ss-login.jpeg" alt="login" height="300"/>
<img src="./assets/screenshots/ss-home.jpeg" alt="home" height="300"/>
<img src="./assets/screenshots/ss-decks.jpeg" alt="decks" height="300"/>
<img src="./assets/screenshots/ss-place-info.jpeg" alt="place-info" height="300"/>
<img src="./assets/screenshots/ss-create-route.jpeg" alt="create-route" height="300"/>
<img src="./assets/screenshots/ss-route-info.jpeg" alt="route-info" height="300"/>

## Backend diagrams
### CenterEnd Project 
<img src="./assets/diagrams/center-end-structure.svg" alt="center-end-structure" height="500"/>
### Software Architecture
<img src="./assets/diagrams/software-architecture.svg" alt="software-architecture" height="500"/>
### Request-Response Flow
<img src="./assets/diagrams/request-response.drawio.svg" alt="request-response" height="500"/>

</body>
