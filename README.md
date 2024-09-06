# Music Queue App

## Prerequisites

- Node.js v20.17.0 or higher
- NPM v10.8.2 or higher

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/YesMySelecta/music-queue-app
   cd music-queue-app

2. Install dependencies: 
   ```bash
   npm install
   ```
To update dependencies to their latest versions, use:
   ```bash
   npm update
   ```
3. To start server:
   ```bash
   npm run start
   ```
   To start server in dev mode (auto reload on code change):
   ```bash
   npm run dev
   ```

## Handy commands
Change script execution policy for the current user (for auto port-forwarding start script:)
```powerscript
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```   
To return policy to default once dev complete:
```powerscript
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser
```
