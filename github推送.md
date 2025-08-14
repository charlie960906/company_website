# 切換到 main
git checkout main

# 把 main 重置成 chore/upgrade-vite7-react19 的內容
git reset --hard chore/upgrade-vite7-react19

# 推送並覆蓋遠端 main
git push origin main --force
