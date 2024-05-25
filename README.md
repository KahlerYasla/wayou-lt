<body style="background: #fff;">

# Wayou
The AI powered route planner for the visually impaired.

## What yo neaad to run tha shit
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
if naaaa then cry some

## Some Screenshots yo
![login](./assets/screenshots/ss-login.jpeg)
![home](./assets/screenshots/ss-home.jpeg)
![decks](./assets/screenshots/ss-decks.jpeg)
![place-info](./assets/screenshots/ss-place-info.jpeg)
![create-route](./assets/screenshots/ss-create-route.jpeg)
![route-info](./assets/screenshots/ss-route-info.jpeg)

## Some technical backend shit
### CenterEnd Project 
![center-end-structure](./assets/diagrams/center-end-structure.svg)
### Software Architecture
![software-architecture](./assets/diagrams/software-architecture.svg)
### Request-Response Flow
![request-response](./assets/diagrams/request-response.drawio.svg)

</body>
