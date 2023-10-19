package mx.uv;

import static spark.Spark.*;

public class App {
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        get("/",
                (request, response) -> "<h1> Hola Mundo </h1>");
        get("/ruta",
                (request, response) -> "<h1> Que onda Mundo </h1>");
        get("/ruta2",
                (request, response) -> "<h1> Adios Mundo </h1>");
        get("/ruta3",
                (request, response) -> "{'alumno':'jhon','matricula':'s2200','carrera':'TC'}");

    }

}
