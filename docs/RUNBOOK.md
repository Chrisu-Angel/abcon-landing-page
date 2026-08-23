# What this is

This is ABCon's Landing page it is run at a self-hosted server 165.232.191.165
It is hosted in Digital Ocean

# SERVICES

Droplet IP: 165.232.191.165
GitHub repo URL: https://github.com/Chrisu-Angel/abcon-landing-page
User: abcon
No DNS for now
Vercel backup deployemnt: https://vercel.com/abc-on/~/deployments

# How to deploy

1.  Make updates on local @ "C:\Projects\abcon-landing-page
2.  Push to github
    git status
    git add <edited file> (src/app/page.tsx)
    git commit -m <branch edit and commit> ("feat: add location to footer")
    git push
3.  Verify on Server
    /home/abcon/deploy.sh
    # confirm server running
        uname -r
        ps aux | grep next-server | grep -v grep
        curl -sI http://165.232.191.165/ | head -3
    # verify updates on server
        curl -s http://165.232.191.165/ | grep -o <the update to verify> ("Aizawl[^<]*")

# How to roll back

1. Fix forward
   Make changes to the desired file
   npm run build
   Push to GitHub
   git add src/app/page.tsx
   git commit -m "fix: restore closing footer tag"
   git push
   Push to Server
   /home/abcon/deploy.sh
   Check success
   curl -s http://165.232.191.165/ | grep -o "Aizawl[^<]\*"
2. Rollback a deploy
   /home/abcon/rollback.sh 25723cd <25723cd is the previous build to be rolled back to>
   Verify rollback
   curl -s http://165.232.191.165/ | grep -o "Aizawl[^<]_"
   curl -s http://165.232.191.165/ | grep -o "ABCon[^<]_" | head -1
   cd /var/www/abcon-landing-page
   git status
   <You'll see something like "HEAD detached at 25723cd.">
3. Roll forward again
   git checkout main
   git status
   /home/abcon/deploy.sh
   curl -s http://165.232.191.165/ | grep -o "Aizawl[^<]\*"

# How to check it's alive

    curl -s http://165.232.191.165/ | grep -o "Aizawl[^<]*"
    systemctl list-unit-files | grep -E "^pm2"

# Where the logs are

    tail -5 /var/log/nginx/abcon-access.log
    su - abcon -c "pm2 logs abcon-landing --lines 30 --nostream"

# Known limits

    Server is 1GB only so when building more pages and features it might be a bottleneck

# If it's down
