$ErrorActionPreference = "Stop"

function Check-Command($cmd) {
    if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
        Write-Host "Error: Command '$cmd' not found." -ForegroundColor Red
        return $false
    }
    return $true
}

if (-not (Check-Command "az")) {
    Write-Host "Please install Azure CLI: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Login check
Write-Host "Checking Azure login..." -ForegroundColor Cyan
try {
    az account show | Out-Null
} catch {
    Write-Host "Logging in..." -ForegroundColor Yellow
    az login
}

$AppName = "landing-page-magang"
$Location = "eastasia"
$ResourceGroup = "landing-page-rg"

Write-Host "Building project..." -ForegroundColor Cyan
Remove-Item -Path "out" -Recurse -Force -ErrorAction SilentlyContinue
npm run build

if (-not (Test-Path "out")) {
    Write-Host "Error: Build failed. 'out' folder not found." -ForegroundColor Red
    exit 1
}

# Create a web.config for SPA routing in dist
$webConfigContent = @"
<?xml version="1.0"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="React Routes" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
"@
Set-Content -Path "dist\web.config" -Value $webConfigContent

# Deploy
Write-Host "Deploying to Azure Web App..." -ForegroundColor Cyan
Push-Location out
try {
    # Using --html to force static content behavior
    az webapp up --name $AppName --sku F1 --location $Location --resource-group $ResourceGroup --html
} catch {
    Write-Host "Deployment failed. Detail: $_" -ForegroundColor Red
} finally {
    Pop-Location
}

Write-Host "Done." -ForegroundColor Green
