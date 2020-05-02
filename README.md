# prerender-sandbox
## 起動
```bash
$ yarn ts-node --files src/app.ts
``` 

## 確認
### 普通
```bash
$ curl http://localhost:3000
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script>
    const div = document.querySelector("#app")
    div.textContent = "poyo"
  </script>
</body>
</html>
```

### クローラー経由
```bash
$ curl -A "googlebot" http://localhost:3000
<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">poyo</div>
  <script>
    const div = document.querySelector("#app")
    div.textContent = "poyo"
  </script>

</body></html>
```