# 컴퓨터공학부 커뮤니티 - COMMA 리팩토링
### 🗓️ 2023.7 ~ 진행

<br/>

컴퓨터공학부 근로학생으로 근로 중 느낀 불편한 아두이노 신청/제공 방식을 웹서비스로 구현하고  공지사항, 학식 모아보기와 소통 공간을 제공하는 컴퓨터공학부 커뮤니티 시스템

<br/>

> <a href="https://github.com/mintmin0320/COMMA">기존 COMMA Github</a>

<br/>

## 👨🏻‍💻 **팀구성**

<table>
  <tr>
    <td>
      <a href="https://github.com/mintmin0320">
        <img src="https://avatars.githubusercontent.com/u/114549939?s=96&v=4" width="120px" height="120px"/>
      </a>  
    </td>
    <td>
      <a href="https://github.com/hansanhha">
        <img src="https://avatars.githubusercontent.com/u/83945336?v=4" width="120px" height="120px"/>
      </a>  
    </td>
  </tr>
  <tr>
    <th>
      	박하민(FE)
    </th>
      <th>
	신태우(BE)
    </th>
  </tr>
</table>

<br/>

## ⭐️ 주요 변경 사항
### 디렉토리 구조 변경 ( 계층별 -> 기능별 )
> 효율성 향상의 이점 <br/>
- 같은 기능으로 구성된 폴더로 응집성을 높여 효율적인 작업 수행 <br/>
💡 계층별로 코드를 관리할 경우 여러 폴더에 흩어진 파일에 접근하는 것에 비해 효율적 (가독성의 이점)

<br/>

```
comma-refacor
└── components                                                                                   
    ├── shared 			
    │   └── (여러 기능이 공통으로 사용하는 코드)
    └── auth                                  
        ├── components
        │   ├── JoinForm.tsx                       
        │   ├── JoinForm.style.ts                           
	│   ├── LoginForm.tsx
        │   └── LoginForm.style.ts
        ├── hooks
        │   ├── constants.ts
        │   ├── useAuth.ts
        │   └── useEmailAuthCode.ts
        └── utils
```

<br/>

### React-Query 적용
> 서버 데이터 캐싱 진행

- 기존 학식 위젯의 경우 useEffect를 사용해 모든 페이지에서 마운트될 때마다 불필요한 데이터를 재요청 <br/>
💡 학식의 경우 하루 단위로 변경되기 때문에 데이터를 수시로 갱신의 필요가 없다.

<br/>
  
> 에러 핸들러 중앙화
- API 요청 시 발생하는 에러의 경우 각 요청 함수마다 try-catch로 처리 <br/>
💡 에러 발생 시 queryClient에서 onError 콜백에서 에러 핸들러 진행


<br/>
<br/>

## 📚 기술 스택
<div>
 <code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
 <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
 <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
 <code><img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png" alt="styled components" title="styled components"/></code>
 <code><img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631622784/noticon/zwush4y3u0mgamlck9bq.png" alt="React Query" title="React Query"/></code>
 <code><img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1641952185/noticon/a9qgcuhj0enmzobh68cf.png" alt="Recoil" title="Recoil"/></code>
</div>

<br/>
<br/>

## 📌 Git 브랜치 전략
![image](https://github.com/mintmin0320/COMMA_REFACTORING/assets/114549939/477b7539-6086-45c7-96d2-b4366f8e795c)

<br/>
<br/>

## 💬 커밋 메시지

|타입 종류|설명|
|------|---|
|feat|새로운 기능에 대한 커밋|
|fix|	수정에 대한 커밋|
|bug|버그에 대한 커밋|
|build|빌드 관련 파일 수정에 대한 커밋|
|ci/cd|배포 커밋|
|docs|문서 수정에 대한 커밋|
|style|코드 스타일 혹은 포맷 등에 관한 커밋|
|refactor|코드 리팩토링에 대한 커밋|
|test|테스트 코드 수정에 대한 커밋|
|merge|브랜치 병합에 대한 커밋|
