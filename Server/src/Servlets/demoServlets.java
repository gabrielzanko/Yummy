package Servlets;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import Logic.*;


@WebServlet(name = "demoServlets",urlPatterns = "/demo")
public class demoServlets extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws  IOException {
        try (PrintWriter out =resp.getWriter()){
            DemoClass demoClass = new DemoClass();
            out.println("hello demo - new");

        }
    }
}
