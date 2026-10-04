sudo apt-get update && sudo apt-get install -y cowsay
cowsay "Hello from GitHub Actions! 🐄" >> cow.txt
grep -i "hello" cow.txt
cat cow.txt
ls -l
