
## 📁 Git & GitHub 기본 사용법 + 브랜치 전략 정리

---

### ✅ 1. 새로운 프로젝트 GitHub에 올리는 순서

1. **VS Code에서 새 폴더 만들고 열기**
2. **Git 초기화**
```bash
git init
```
3. **파일 생성 후 저장** (예: README.md)
4. **GitHub에서 새 저장소 생성**
   - README, .gitignore 체크 X
5. **원격 저장소 연결**
```bash
git remote add origin https://github.com/유저명/저장소명.git
```
6. **파일 커밋**
```bash
git add .
git commit -m "첫 커밋"
```
7. **main 브랜치 설정 후 push**
```bash
git branch -M main
git push -u origin main
```

---

### ✅ 2. `git push` 에러 해결 (fetch first)

#### 상황: GitHub 쪽에 있는 코드와 로컬이 충돌

**해결 방법 1: 병합하여 push**
```bash
git pull origin main
git push origin main
```

**해결 방법 2: 강제 푸시 (주의)**
```bash
git push origin main --force
```
> GitHub 코드가 완전히 덮어씌워짐

---

### ✅ 3. 브랜치 전략

#### 🎯 개인 프로젝트 / 소규모 팀
- `main`: 안정적 코드
- `feature/기능명`: 기능 개발용 브랜치

#### 🎯 Git Flow (대규모 협업)
- `main`: 배포 버전
- `develop`: 통합 개발 버전
- `feature/기능명`: 기능 개발
- `release/버전`: 배포 준비
- `hotfix/버그`: 긴급 수정

---

### ✅ 4. 브랜치 명령어 정리

| 작업 | 명령어 |
|------|--------|
| 새 브랜치 생성 + 이동 | `git checkout -b feature/login` |
| 브랜치 목록 보기 | `git branch` / `git branch -a` |
| 다른 브랜치로 이동 | `git checkout main` |
| 브랜치 삭제 | `git branch -d 브랜치명` / `-D` 강제 삭제 |
| 브랜치 병합 | `git merge feature/login` |
| 원격 브랜치 push | `git push -u origin feature/login` |
| 원격 브랜치 삭제 | `git push origin --delete 브랜치명` |
| 최신 코드 pull | `git pull origin main` 또는 `--rebase` |

---

### ✅ 5. 브랜치 네이밍 규칙 (추천)

| 브랜치 용도 | 예시 |
|--------------|------|
| 기능 개발 | `feature/login-ui` |
| 버그 수정 | `bugfix/login-error` |
| 긴급 수정 | `hotfix/payment-error` |
| 배포 준비 | `release/v1.0.0` |

---

### ✅ 6. .gitignore 설정

`.gitignore` 파일은 Git이 **추적하지 않을 파일**을 정의함

예시:
```gitignore
# Node
node_modules/
.env

# VSCode
.vscode/

# Python
__pycache__/
*.pyc
```
> GitHub에서 `.gitignore` 템플릿 검색해서 사용 가능

---

### ✅ 7. PR(Pull Request) 흐름

1. `feature/기능명` 브랜치에서 작업 후 push
2. GitHub에서 `Pull Request` 생성
3. 코드 리뷰 받고 승인되면 `main` 또는 `develop`에 merge
4. 머지 후 로컬 브랜치 삭제 (`git branch -d 브랜치명`)

---

### ✅ 8. 협업 시 코드 리뷰 전략

- **PR은 작고 명확하게** (한 기능 단위)
- 커밋 메시지는 의미 있게 작성
- 리뷰 시:
  - 변수명/함수명 직관성 확인
  - 중복/불필요한 코드 확인
  - 주석이나 문서화 여부 확인
- 리뷰어는 직접 실행해보는 습관도 필요

---

### ✅ 9. 예시: 개발자 일상 루틴

```bash
# 1. 최신 main에서 시작
git checkout main
git pull origin main

# 2. 새 기능 브랜치 생성
git checkout -b feature/login

# 3. 작업 후 커밋
git add .
git commit -m "로그인 UI 구현"

git push -u origin feature/login

# 4. PR 보내고 merge 후
# 5. main 다시 pull
git checkout main
git pull origin main

# 6. 브랜치 정리
git branch -d feature/login
```

---

### ✅ 10. Git 태그(Tag)로 버전 관리하기

```bash
# 태그 생성
git tag v1.0.0

# 주석이 있는 태그 (권장)
git tag -a v1.0.0 -m "버전 1.0 릴리스"

# 태그 푸시
git push origin v1.0.0

# 전체 태그 보기
git tag
```

---

### ✅ 11. git stash로 임시 저장

작업 중이던 내용을 임시 저장하고 브랜치를 옮기고 싶을 때 사용

```bash
# 현재 변경사항 저장 (임시)
git stash

# stash 목록 보기
git stash list

# 최근 stash 복원
git stash pop

# 특정 stash 복원
git stash apply stash@{0}
```

---

### ✅ 12. rebase vs merge 차이

| 항목 | merge | rebase |
|------|-------|--------|
| 커밋 히스토리 | 브랜치 병합 흔적 남음 | 깔끔하고 일직선 히스토리 |
| 충돌 발생 시 | 비교적 명확하게 표시 | 충돌 복잡하게 느껴질 수 있음 |
| 협업 시 권장 | PR 머지에는 merge 사용 | 개인 브랜치 정리에는 rebase 사용 |

---

### ✅ 13. 커밋 메시지 작성 규칙 (Conventional Commits)

```text
<type>: <설명>
```

**예시**
```
feat: 로그인 기능 추가
fix: 로그인 시 에러 수정
docs: README 업데이트
style: 코드 포맷팅
refactor: 중복 코드 제거
```

---

### ✅ 14. squash merge 전략

**여러 커밋을 하나로 묶어서 머지하는 방식**

```bash
# feature/login 브랜치를 main에 squash merge
git checkout main
git pull origin main
git merge --squash feature/login
git commit -m "로그인 기능 추가"
git push origin main
```

> 장점: 커밋 로그가 깔끔함
> 단점: 개별 커밋 히스토리 사라짐 (협업 시 주의)

---

### ✅ 15. git rebase -i (인터랙티브 리베이스)

**커밋을 선택적으로 수정, 제거, 병합할 수 있는 기능**

```bash
git rebase -i HEAD~3
```
- pick: 유지
- squash: 이전 커밋과 병합
- reword: 메시지 수정
- drop: 삭제

> 수정 후 `:wq`로 저장 → 충돌 시 수동 수정 후 `git rebase --continue`

---

### ✅ 16. GitHub Actions로 CI/CD 연동 기본

**GitHub Actions는 자동 테스트 & 배포를 위한 CI/CD 도구**

`.github/workflows/main.yml` 파일로 설정함

**예시: Node.js 테스트 워크플로우**
```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

> 위 예시는 main 브랜치에 push 또는 PR 시 자동으로 테스트가 실행됨

---
