package Servlets;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import org.bson.Document;
import Logic.*;
import com.mongodb.DB;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import java.util.List;

@WebServlet(name = "demoServlets",urlPatterns = "/demo")
public class demoServlets extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws  IOException {
        String connectionString = "mongodb://localhost:27017";

        try (MongoClient mongoClient =  MongoClients.create(connectionString)) {
            try(PrintWriter out = resp.getWriter()){
                MongoDatabase database= mongoClient.getDatabase("example");
               MongoCollection<org.bson.Document> collection = database.getCollection("users");
                //Create new db/collection if it not exists

                String name= "{name:\"gabi\"}";

               Document document =  Document.parse(name);

                collection.insertOne(document);
                out.println(database);
            }
        }
    }
}
