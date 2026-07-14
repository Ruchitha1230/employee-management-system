    Build the Backend (Node.js + Express)
What are we going to build?

We'll create a backend server that listens for requests.

Currently, your application works like this:

Browser
   │
   ▼
HTML + CSS + JavaScript

After today, it will look like this:

Browser
   │
   ▼
Frontend (HTML/CSS/JS)
   │
HTTP Request
   ▼
Node.js + Express Backend

Later, we'll connect PostgreSQL.

Step 1: Open the backend folder

In VS Code, open the backend folder.

Open a terminal (Terminal → New Terminal).

Make sure you're inside the backend folder:

cd backend

Check it:

pwd

On Windows PowerShell, you can use:

Get-Location

It should end with:

employee-management-system\backend
Step 2: Initialize Node.js

Run:

npm init -y
What does this do?

It creates a file named:

package.json

This file stores information about your project, such as:

Project name
Version
Dependencies
Scripts

Think of it like a project manifest.

Step 3: Install Express

Run:

npm install express

This creates:

node_modules/
package-lock.json
What is Express?

Express is a framework that helps us create web servers easily.

Without Express, creating APIs requires a lot more code.