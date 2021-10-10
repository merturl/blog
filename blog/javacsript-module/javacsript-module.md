---
title: Javascript가 Module을 다루는 방식
date: 2021-10-10T16:27:41.882Z
description: 구현 세부사항을 캡슐화하고 공개 API를 외부로 노출해 다른 코드에서 쉽게 사용할 수 있는 재사용가능한 파일(코드)을 모듈이라 부른다
tags:
  - javascript
  - module
thumbnail: images/js_module.png
---

### 모듈

구현 세부사항을 캡슐화하고 공개 API를 외부로 노출해 다른 코드에서 쉽게 사용할 수 있는 재사용가능한 파일(코드)을 모듈이라 부른다

### 모듈 방식

`Javascript`에서는 모듈을 다루는 다양한 포멧이 존재하는데 초기 자바스크립트에는 모듈과 관련된 표준 문법이 없었기 때문이다.

- CommonJS (CJS): Node.js와 같이 브라우저 밖에서도 사용하기 위해 고안됨
- Asynchronous Module Definition (AMD): 비동기 상황(브라우져)에서도 모듈을 사용하기 위해 고안됨
- Universal Module Definition (UMD): CommonJS, AMD와 모듈을 같이 사용하기 위해 고안
- EcmaScript modules (ESM): Javacsript에서 자체적 모듈 시스템을 지원하기 위해 고안된 표준 모듈 시스템

### 모듈 로더

`CommonJS`나 `AMD` 방식으로 작성된 Module들을 브라우져에서 실행하려면 특별한 모듈 로더가 필요하다.

- RequireJS: AMD Module 방식을 사용하기 위한 로더
- SystemJS: AMD,CommonJS, UMD와 같은 Module 방식을 사용하기 위한 로더

### 모듈 번들러

파일(코드)을 모듈 단위로 개발을 하게되면 하나의 JS파일에 작성될 양이 N개의 JS파일로 나눠지게 된다.
이때, 브라우저에서는 해당 모듈들을 N번 불러오게 되는데 http 프로토콜에서는 큰 부하가 되게 된다.
그래서 이에 대한 해결책으로 빌드 타임을 만들어 하나의 파일로 합치는 방식을 고안했는데
이걸 `module`을 `bundle`한다고 한다.

- Browerify, Webpakc, parcel 등

#### 참조

[JavaScript 번들러로 본 조선시대 붕당의 이해 - 재그지그의 개발 블로그](https://ui.toast.com/fe-guide/ko_DEPENDENCY-MANAGE#commonjs)\
[의존성 관리 | TOAST UI :: Make Your Web Delicious!](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)\
[A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html)\
[모듈 소개](https://ko.javascript.info/modules-intro#ref-424)
