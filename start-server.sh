#!/bin/bash

echo "Current PATH: $PATH"

# Run the PowerShell script to update port forwarding
cmd.exe /c "C:\\Scripts\run-port-forwarding.bat"

# Start your Node.js server
ts-node src/server.ts
