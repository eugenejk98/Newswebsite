# Eugene Joseph — Full-Stack Portfolio

A responsive developer portfolio backed by an Express REST API and SQLite contact form.

## Stack
- Frontend: semantic HTML, CSS, vanilla JavaScript
- Backend: Node.js + Express
- Database: SQLite via better-sqlite3

## Run locally
```bash
cd portfolio
npm install
npm start
```
Open http://localhost:3000.

## API
- GET `/api/health`
- GET `/api/projects`
- POST `/api/contact` with `{ name, email, message }`

The SQLite database is created automatically as `portfolio.db` and should not be committed to source control.