# 23-React1

대림대학교 컴퓨터정보학부 3학년 1반 리엑트 수업

---

# GitHub 2023년 3월 8일

## Git 설치

1. 구글에 Git 검색 후 설치
2. 설치 후 cmd에 git --version으로 버전 확인

- git config --global user.name “foo”
- git config --global user.email “foo@example.com”

## GitHub에 가입하기

- 구글에 Github를 검색한 후 회원가입

## Git 사용자 설정(GitHub에 등록한 이름과 메일을 사용)

1. Global 사용자 정보 설정 : 시스템 전체에서 사용함
2. 스페이스 가없으면 ""(double quotes)은 사용하지 않아도 됨

- Local 사용자 정보 설정: Global 설정과는 다르게 특정 폴더만 다른 계정을 등록하고 사용할 수있습니다
- 공용 PC인 경우에 비교적 안전하게 사용할 수 있습니다
- 위 Global 명령에서 ‘--global’ 옵션만 제거하면 됩니다

3. 설정 내용은 다음 명령어로 확인 가능

- git config user.name foo
- git config user.email foo@example.com

## 프로젝트 폴더 Git으로 초기화 하기

- 명령은 원하는 폴더로 이동 후 git init명령으로 초기화 할 수 있음

1. VSCode에서 좌측 source control탭에서 Initialize Repository 클릭
2. 폴더에 .git이라는 숨김 폴더 생성 확인

## commit하기

1. Git으로 초기화된 폴더에 파일이 생성되거나 변경되면 Git이 추척을 시작
2. 변한 파일의 숫자 만큼 source control탭에 숫자로 표기 됨
3. source control탭에서 commit하기 원하는 파일을 stage로 이동 후 Mesesage부분에 commit의 제목과 자세한 설명을 작성
4. 그 후 commit버튼을 누르면 commit 완료

## push하기

### 변경된 내용 중 일부만 commit후 push하는 경우

1. 케밥 메뉴에 push를 선택
2. GitHub에 아직 Repository가 없는 경우 안내 창이 나타남
3. Add Remote 버튼을 클릭한 후 원하는 repository를 선택

### 변경된 내용 모두 commit후 push하는 경우

1. 더 이상 커밋할 파일이 없으면 commit버튼이 Publish Branch로 바뀜
2. 이 버튼을 클랙해도 Push됨
3. 현재 작업 폴더와 같은 이름으로 원격에 저장소를 만들어줌
4. private인지 public인지만 선택해 주면 됨

---

# Github VSCODE 연결방법

## Github vscode에서 repository 생성, GITHUB페이지에서 생성

1. 우측 상단에 +기호 를 누른 후 New repository 클릭
2. Repository name를 정한 후 Public, Praivate선택
3. Add a README.file 생성 여부 클릭
4. Create Repository 클릭

## GitHub와의 연동

1. 연동하기 전에 시스템의 기본 브라우저를 이용하여 GitHub에 로그인 해 놓은 것이 좋음
2. VSCode의 status bar왼쪽의 구름 아이콘을 클릭
3. GitHub에 로그인한다는 팝업창이 나타나면 Allow를 클릭
4. 브라우저에 다음과 페이지를 보여주면 Contunue를 클릭
5. 다음과 같은 메시지가 나오면 체크박스를 체크하고 Visual Studio Code열기를 클릭
6. 크롬의 경우 VSC가 열리고 파이어폭스의 경우에는 응용프로그램을 선택하는 화면 다음에 VSC를 선택하는 화면이 나옴
7. VSCode가 열리면서 메시지가 나오면 Open을 클릭
8. VSCode상단에 보면 2가지의 저장소 중 선택하라는 메시지가 나옴
9. 이는 GitHub에 생성할 저장소를 private를 할지 public으로 할지를 물어본다(private는 본인 이외에는 볼 수가 없으며, public일 경우 소스가 오픈됨)
10. 저장소를 선택하면 계속해서 앞서 연습하던 test폴더를 GitHub에 자동으로 Push하게 된다
11. GitHub에 로그인 하라는 창이 나타나는데 Sign in with browser를 클릭
12. GitHub에 접속하여 test 저장소가 잘 Pysh 됐는지 확인

## Repository 삭제 방법

1. GitHub.com에서 리포지토리의 기본 페이지로 이동 후 설정 클릭
2. 하단의 Delete this repository 클릭
3. 올바른 리포지토리를 삭제하고 있는지 확인하려면 삭제할 리포지토리의 이름을 입력

## Gitignore 파일 생성 방법

1. https://www.toptal.com/developers/gitignore에 접속 후 사용 언어 검색 후 내용 복사
2. `.gitginore`파일 생성 후 내용 붙여넣기 후 커밋

---

# Clone, fork

### Clone과 Fork의 차이점

- Fork한 작업은 원본 작업의 변화를 알 수 있으며 그 변화를 내 작업에 반영 가능
- Clone한 작어븐 원본 작업의 변화를 알 수 없음

### Clone하는 법

1. Git repository에 들어가 Code를 클릭 후 주소 복사
2. vscode 좌측의 source control탭에서 repository 복제에 주소 붙혀넣기
3. 위치 선택 후 열기

---

# BRANCH

## BRANCH

- 새로운 레포지토리를 생성하면 main으로 branch가 생성됨(master일수도 있음)
- 원래는 master였으나 현재는 main으로 변경됨

## Master에서 Main으로 바뀐이유

- 인종차별적 요소나 주종 관계를 담고 있는 용어를 제거하기위해서

---

# 클래스형과 함수형 컴포넌트

## 클래스형

- state, lifeCycle 관련 기능사용 가능하다
- 메모리 자원을 함수형 컴포넌트보다 조금 더 사용한다
- 임의 메서드를 정의할 수 있다

## 함수형

- state, lifeCycle 관련 기능사용 불가능 (Hook을 통해 해결 됨)
- 메모리 자원을 함수형 컴포넌트보다 덜 사용한다
- 컴포넌트 선언이 편하다

## 현재 상황

- React에서는 함수형 컴포넌트를 우선시 한다
- 함수형이 시각적으로도 가독성이 높음
- 최근까지만 해도 클래스형을 우선시 했었다
- 함수형이 클래스보다 후에 나왔기 때문에 더 편한 것은 사실이다
- 과거 클래스 컴포넌트 사용한 프로젝트가 있어 유지보수를 위해서 알아둘 필요가 있다

---

# JSON

## JSON(JavaScript Object Notation)

- JSON은 JavaScript언어에서 시작되었지만 현재는 프로그래밍언어와 관계없이 널리 사용하는 데이터 포맷
- 다른 시스템간 다른 프로그래밍언어간 데이터를 교환하기 좋습니다
- 자바스트립트에서 오브젝트를 선언하는 방법
- Key와 key value로 이루어진 스타일의 자료형

---

# 자바스크립트 연산자

## 연산자

- 연산자란 수나 식을 일정한 규칙에 따라 계산하는 것을 의미
- 프로그래밍에서 쓰이는 기호들
- 자바스크립트에는 여러 연산자가 있음

---

# 자바스크립트 함수

## 함수(function)

- 함수란 JavaScript에서 기본 구성 요소 중하나
- JavaScript의 함수는 작업을 수행하거나 값을 계산하는 명령문의 집합이며 반드시 입력을 받아야하고 입력과 명확한 관계가 있는 출력을 반환해야함
- 자바스크립트에서 함수의 정의는 function 키워드로 시작된다
