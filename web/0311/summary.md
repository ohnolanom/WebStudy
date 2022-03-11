# 📌 HTML에 CSS를 적용하는 방법
## 1. Inline Style Sheet
: HTML 태그의 **style 속성**에 CSS 코드를 넣는 방법이다.
```html
<h1 style="color: orange">홈페이지</h1>
```
h1태그가 선택자가 되고, CSS코드에는 속성과 값만 들어가서 CSS를 사용하는 데에 한계가 있고, 재사용이 어렵다.

## 2. Internal Style Sheet
: HTML 문서 안에 `<style> </style>` 태그를 이용해 스타일 코드를 넣는 방법이다. 
```html
<style>
    h1 {
        color: blue;
    }
</style>

<h1>홈페이지</h1>
```
## 3. Linking Style Sheet
별도의 CSS파일을 만들어 `<link>` 태그로 HTML 문서와 연결하는 방법이다. 
- `style.css`
    ```css
    h1 {
        color: pink;
    }
    ```
- `index.html`
    ```html
    <head>
        <!-- ... -->
        <link rel="stylesheet" href="./style.css">
    </head>
    ```
보통 가장 많이 사용하는 방법으로, CSS와 HTML 파일이 분리되어 있어 가독성도 좋고 재사용도 가능하다. 

HTML과 CSS의 연결에 대한 내용은 [해당사이트](https://velog.io/@muz/HTML%EC%97%90-CSS-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)에서 가져왔다.
# 📌 HTML에 JavaScript를 연결하는 방법
## 0. 동기와 비동기
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTMcyJ%2FbtqElX4OJAM%2FxhfNvFTI67HwQT9mP2GI2k%2Fimg.png" width="400px"> </img>

## 1. `<head>`에 js파일 연결하기
`<head>`안에 `<script>`태그를 넣는 방법이다. 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- meta정보 -->
        <title>Document</title>
        <script src="./main.js"></script>
    </head>
    <body>
        
    </body>
</html>
``` 

## 2. `<body>` 맨 마지막 부분에 `<script>` 추가하기
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- meta정보 -->
        <title>Document</title>
        <script src="./main.js"></script>
    </head>
    <body>
        <div></div>
    <script src="./main.js"></script>
    </body>
</html>
```

## 3. `<head>` + async 사용하기
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- meta정보 -->
        <title>Document</title>
        <script async src="./main.js"></script>
    </head>
    <body>
        
    </body>
</html>
```

## 4. `<head>` + defer 사용하기
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- meta정보 -->
        <title>Document</title>
        <script defer src="./main.js"></script>
    </head>
    <body>
        
    </body>
</html>
```

HTML과 JavaScript를 연결에 대한 자세한 설명은 [해당사이트](https://velog.io/@muz/JavaScript-html-%ED%8C%8C%EC%9D%BC-%EC%86%8D-script%EB%8A%94-%EC%96%B4%EB%94%94%EC%84%9C-%EC%8B%A4%ED%96%89%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C#html%ED%8C%8C%EC%9D%BC%EA%B3%BC-javascript-%ED%8C%8C%EC%9D%BC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0-)를 읽어보자. 

# 📌 JavaScript의 String과 Array
## String 
- [String]() 정리하기
- 
## Array
- [Array]() 정리하기
