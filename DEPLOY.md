# Deploying to Azure Static Web Apps

This guide explains how to deploy your React application to Azure Static Web Apps. This service is ideal for static sites built with Vite and includes free SSL, global hosting, and automatic deployments from GitHub.

## Prerequisites

1.  **Azure Account**: If you don't have one, create a [free account](https://azure.microsoft.com/free/).
2.  **GitHub Repository**: Your code is already on GitHub, which is perfect.

## Step-by-Step Deployment Guide

### 1. Create a Static Web App resource in Azure

1.  Log in to the [Azure Portal](https://portal.azure.com/).
2.  In the search bar at the top, type **"Static Web Apps"** and select it.
3.  Click **+ Create**.
4.  **Basics Tab**:
    *   **Subscription**: Select your active subscription.
    *   **Resource Group**: Click "Create new" and name it (e.g., `landing-page-rg`).
    *   **Name**: Give your app a name (e.g., `landing-page-magang`).
    *   **Plan type**: Select **Free** (sufficient for personal projects).
    *   **Deployment details**: Select **GitHub**.
    *   **Azure Static Web Apps**: Click "Sign in with GitHub" and authorize Azure.

### 2. Connect your Repository

After signing in, fill in the repository details:
*   **Organization**: Select your GitHub username.
*   **Repository**: Select `Landing-Page-Magang` (or your repo name).
*   **Branch**: Select `main` (or `master`).

### 3. Build Details

In the "Build Presets" dropdown, select **Vite** (or "Custom" if Vite isn't listed).

Ensure the following settings match your `package.json` and directory structure:
*   **App location**: `/` (This is the root of your project)
*   **Api location**: *(Leave empty)*
*   **Output location**: `dist` (This is where Vite builds your files)

### 4. Review and Create

1.  Click **Review + create**.
2.  Double-check the details, then click **Create**.
3.  Azure will now:
    *   Create the resource.
    *   Automatically add a GitHub Actions workflow file to your repository (in `.github/workflows`).
    *   Trigger the first build and deployment.

### 5. Verify Deployment

1.  Once the resource is created, click **Go to resource**.
2.  You will see a **URL** on the Overview page (e.g., `https://brave-river-0d12a3b0f.azurestaticapps.net`).
3.  Click the URL to view your live site!


## Fast Deployment (Script)

We have provided a script to automate the deployment to Azure Web Apps (App Service).

1.  **Install Azure CLI**: [Download and Install](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
2.  **Run Script**:
    ```powershell
    .\deploy.ps1
    ```
    This script will:
    - Check for Azure CLI
    - Build the project
    - Deploy to Azure Web Apps (Free Tier F1)

## Troubleshooting

-   **Updates**: Any change you push to the `main` branch will automatically trigger a new build and deployment.
-   **Build Failures**: If the site doesn't load, check the "Actions" tab in your GitHub repository to see the build logs.

