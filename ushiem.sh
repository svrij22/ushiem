npm run build
echo '{}' > ./dist/composer.json
git add ./dist/composer.json
git add .
git commit -m "heroku"
git push heroku master
