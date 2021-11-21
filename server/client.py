import requests
import json
import time
import threading

data = {}
res = requests.post("http://yt4307.iptime.org:5000/api/pyconnect", json = data)


def pyconnect():
    print(res.status_code)
    
    print(res.json())
    if(res.status_code == 200):
        time.sleep(2)
        print('sleep 2 sec')
    threading.Timer(0.1, pyconnect).start()  # 0.1초마다 반복실행

# print(res.status_code)
# print(res.text)
# print(res.request, res.request.body, res.content)
# print(res.json())

pyconnect()
