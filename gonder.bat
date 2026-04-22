@echo off
cd /d C:\Users\fuysa\bbb-danismanlik

git add .

set /p mesaj=Commit mesaji gir: 

git commit -m "%mesaj%"
git push

pause