package mx.uv;

import static spark.Spark.*;

import com.google.gson.*;

/**
 * Hello world!
 *
 */

public class App {
        public static String nombre = "";
        public static String contraseña = "";
        public static int cambio = 0;

        public static void main(String[] args) {
                // fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
                options("/*", (request, response) -> {
                        String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
                        if (accessControlRequestHeaders != null) {
                                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
                        }
                        String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
                        if (accessControlRequestMethod != null) {
                                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
                        }
                        return "OK";
                });

                before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

                get("/iniciarSesion", (request, response) -> {
                        if (cambio < 1) {
                                nombre = request.queryParams("nombre");
                                contraseña = request.queryParams("contraseña");

                                System.out.println("Usuario registrado");
                                System.out.println("Nombre: " + nombre);
                                System.out.println("Contraseña: " + contraseña);
                                System.out.println("----------------------");

                                cambio = 1;
                        } else {
                                System.out.println("el usuario ya existe utiliza el modo de edicion");
                        }

                        return "<h1> Usuario registrado </h1>";
                });

                get("/editar", (request, response) -> {

                        if (cambio > 0) {
                                nombre = request.queryParams("nombre");
                                contraseña = request.queryParams("contraseña");

                                System.out.println("Usuario azxc:");
                                System.out.println("Nombre: " + nombre);
                                System.out.println("Contraseña: " + contraseña);
                                System.out.println("----------------------");

                        } else {
                                System.out.println("El Usuario no existe");
                        }

                        return "<h1>Usuario Editado</h1>";
                });

                get("/eliminar", (request, response) -> {

                        if (cambio > 0) {
                                nombre = null;
                                contraseña = null;

                                System.out.println("Usuario Eliminado");
                                System.out.println("Nombre: " + nombre);
                                System.out.println("Contraseña: " + contraseña);
                                System.out.println("----------------------");

                                cambio = 0;
                        } else {
                                System.out.println("El Usuario no existe");
                        }

                        return "<h1>Usuario eliminado</h1>";

                });

                get("/leer", (request, response) -> {
                        if (cambio > 0) {
                                System.out.println("Usuario Existente, Usuario Mostrado:");
                                System.out.println("Nombre: " + nombre);
                                System.out.println("Contraseña: " + contraseña);
                                System.out.println("----------------------");
                        } else {
                                System.out.println("El Usuario no existe");
                        }

                        return "<h1>Usuario mostrado</h1>";

                });
        }
}