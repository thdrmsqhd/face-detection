pythom 3.10.5
node 16.15.1

flask
reactnative
openCV

필요 패키지
pip install flask tensorflow keras opencv-python numpy

haarcascade_frontalface_default
https://github.com/opencv/opencv/tree/master/data/haarcascades

emotion_model.hdf5
https://github.com/jinhojang6/ai-powered-detection/blob/master/detection_processing/models/emotion_model.hdf5

실행 명령어
python hello.py

0. choco 설치
   https://chocolatey.org/install

   powershell을 관리자 권한으로 실행후에 명령어 입력:
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

1. choco를 이용한 자바 11 버전 설치
   choco install openjdk11

2. 안드로이드 스튜디오 구성
   https://developer.android.com/studio?gclid=Cj0KCQjwzqSWBhDPARIsAK38LY8DmtqXxUOCYS-oS_2YSWmPjVucTIxYhNYodtblzRocrkhGCOgQXloaAl2ZEALw_wcB&gclsrc=aw.ds

   1-1) 안드로이드 스튜디오 환경변수 설정
   환경 변수 -> 사용자 환경 변수 -> 새로만들기
   환경변수명 : ANDROID_HOME
   경로: %LOCALAPPDATA%\Android\Sdk

3. 리액트 네이티브 구성
   https://reactnative.dev/docs/environment-setup

   프로젝트를 생성하기 원하는 위치에서 아래 명령어를 실행
   npx react-native init faceDection

4. 리액트 네이티브 실행
   2-0) 생성된 프로젝트 폴더로 이동
   cd faceDection
   2-1) 메트로 서버 실행
   npm start
   2-2) 안드로이드 프로젝트 실행
   npm run android

5. axios 설치
   npm install axios
