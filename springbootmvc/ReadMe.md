# Build Application

## using Gradle

./gradlew bootRun

Or

./gradlew Build
java -jar build/libs/[jarfilename].jar

## Using Maven

./mvnw clean install
./mvnw spring-boot:run

# Build image and Run container

docker build -t back-end .
docker run -p 8080:8080 back-end

docker build -t front-end .
docker run -p 80:3000 front-end
