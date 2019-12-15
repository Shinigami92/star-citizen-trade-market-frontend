@echo off
echo Starting Deploy-Script

echo Build project
call yarn build

echo Switch to gh-pages branch
git checkout gh-pages

echo Remove old content
rmdir css /S /Q
rmdir fonts /S /Q
rmdir img /S /Q
rmdir js /S /Q
del favicon.ico
del index.html

echo Copy new content from dist to root
xcopy dist\css css\ /S
xcopy dist\fonts fonts\ /S
xcopy dist\img img\ /S
xcopy dist\js js\ /S
move dist\favicon.ico favicon.ico
move dist\index.html index.html

echo Add content to next commit
git add css fonts img js favicon.ico index.html

echo Add commit with message
set /P message=Message:
git commit -m "%message%"

echo Push gh-pages
git push

echo Switch back to development branch
git checkout development

echo Success
