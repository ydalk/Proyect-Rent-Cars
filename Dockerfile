FROM openjdk:11
ARG JAR_FILE=target/*.jar
COPY app/${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
