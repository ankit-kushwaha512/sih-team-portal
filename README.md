# SIH Team Hub

A reusable, responsive SIH team-management frontend starter.

## Run locally

1. Install Node.js 20 LTS or newer.
2. Extract the project.
3. Run:
   npm install
   npm run dev
4. Open http://localhost:3000

## Production

npm run build
npm start

For a VPS, the app can run behind Nginx/Caddy with HTTPS. `next.config.mjs` uses standalone output for straightforward container/server deployment.

## Important

The included register/login pages are intentionally UI-ready demo forms. For a real public deployment, connect them to a production authentication/database layer before collecting real user data.

Recommended production stack:
- PostgreSQL
- Server-side sessions or a vetted auth library
- Argon2id/bcrypt password hashing
- RBAC for member/admin permissions
- Object storage for uploads
- HTTPS
- Rate limiting
- CSRF/XSS/input validation
- Audit logs and backups

The editable content currently lives in `data/site.json` so you can prototype changes without touching page components. The production CMS should move this data into PostgreSQL and expose admin-only CRUD APIs.

## Suggested production data model

users(id, name, email, password_hash, role_id, status, created_at)
roles(id, name, description, permissions)
study_topics(id, role_id, title, description, order_index)
resources(id, title, url, type, role_id, is_public)
tasks(id, title, description, role_id, assignee_id, status, priority, due_at)
statements(id, year, title, body, is_active)
announcements(id, title, body, created_at, author_id)
progress(id, user_id, task_id, status, completed_at)

Never store plaintext passwords. Never trust a role sent by the browser; authorize it on the server.
