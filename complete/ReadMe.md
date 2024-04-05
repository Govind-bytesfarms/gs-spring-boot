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

docker build -t myorg/springbootmvc .
docker run -p 8080:8080 myorg/springbootmvc
docker run -ti --entrypoint /bin/sh myorg/springbootmvc
