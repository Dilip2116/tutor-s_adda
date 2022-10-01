#FROM adoptopenjdk/openjdk11:alpine-jre
#COPY target/tutor.jar tutor.jar
#ENTRYPOINT ["java","-jar","/tutor.jar"]
FROM maven:3.6-jdk-12-alpine as build
WORKDIR /wrk
COPY pom.xml .
COPY src src
RUN mvn clean install -X

FROM adoptopenjdk/openjdk11:alpine-jre
COPY --from=build /wrk/target/tutor.jar tutor.jar
ENTRYPOINT ["java","-jar","/tutor.jar"]