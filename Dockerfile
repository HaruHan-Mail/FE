# 1. Build 단계
FROM --platform=linux/amd64 node:18 AS build
WORKDIR /app

# package.json과 package-lock.json만 먼저 복사하여 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 이후 소스 코드 복사 (이전에 package.json만 복사하는 이유: Docker 캐싱 최적화)
COPY . . 

# esbuild 강제 재설치 (Vite 빌드 오류 방지)
RUN npm rebuild esbuild

# Vite 빌드 실행
RUN npm run build

# 2. Serve 단계
FROM --platform=linux/amd64 nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .   
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]