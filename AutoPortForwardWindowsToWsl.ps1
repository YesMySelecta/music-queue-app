# Fetch WSL IP dynamically
$wslIp = wsl hostname -I | ForEach-Object { $_.Trim() }

# Ports for forwarding
$externalPort = 3000 # Port on Windows to forward traffic from
$internalPort = 3000 # Port on WSL to forward traffic to

# Validate that WSL IP was fetched
if ($wslIp) {
    Write-Host "WSL IP Address: $wslIp"
    
    # Delete any existing port forwarding rule
    netsh interface portproxy delete v4tov4 listenport=$externalPort listenaddress=0.0.0.0

    # Add a new port forwarding rule from Windows to WSL
    netsh interface portproxy add v4tov4 listenport=$externalPort listenaddress=0.0.0.0 connectport=$internalPort connectaddress=$wslIp

    # Add a firewall rule to allow traffic through the specified port
    netsh advfirewall firewall add rule name="WSL Port Forward" dir=in action=allow protocol=TCP localport=$externalPort

    Write-Host "Port forwarding rule added: Windows:$externalPort -> WSL($wslIp):$internalPort"
} else {
    Write-Host "Failed to retrieve WSL IP address."
}
