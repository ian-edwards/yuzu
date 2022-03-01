ssh pi@raspberrypi.server "rm -rf /var/www/html/yuzu/*"
scp -r -p * pi@raspberrypi.server:/var/www/html/yuzu/
ssh -t pi@raspberrypi.server "sudo systemctl restart yuzu"