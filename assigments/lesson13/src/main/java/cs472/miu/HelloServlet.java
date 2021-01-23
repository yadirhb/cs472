package cs472.miu;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

@WebServlet(name = "HelloServlet", urlPatterns = "/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // Set response content type
        resp.setContentType("text/html");

        String name = req.getParameter("name");
        if (null == name) {
            name = Arrays.stream(req.getCookies()).filter(cookie -> cookie.getName().equals("Name")).findFirst().get().getValue();
        }
        String[] colors = req.getParameterValues("color");

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<h1>Hello, " + name + "</h1>");
        out.print("<h3>I'm glad you are here.</h3>");
        if (colors != null && colors.length > 0) {
            out.print("<span>What do you want these colors: </span>");
            out.print("<ul>");
            Arrays.stream(colors).forEach((String color) -> out.print("<li>" + color + "</li>"));
            out.print("</ul>");
            out.print("<span>for?</span>");
        }
        out.print("<form method='post'>");
        out.print("<label for=\"password\">Password: </label>");
        out.print("<input type=\"text\" name=\"password\" id=\"password\" value=\"s3cr3t\"/>");
        out.print("<p>Please click the button</p>");
        out.print("<input type=\"checkbox\" name=\"habits\" value=\"Reading\">Reading</input>");
        out.print("<input type=\"checkbox\" name=\"habits\" value=\"Movies\">Movies</input>");
        out.print("<input type=\"checkbox\" name=\"habits\" value=\"Writing\">Writing</input>");
        out.print("<input type=\"checkbox\" name=\"habits\" value=\"Singing\">Singing</input>");
        out.print("<input type='submit' value='Click me'/>");
        out.print("</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String password = req.getParameter("password");
        String[] habits = req.getParameterValues("habits");

        HttpSession session = req.getSession();

        boolean isNewSession = session.isNew();

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>Postback received</p>");

        out.print("<span>The session " + session.getId() + " is: " + (isNewSession ? "new" : "reused") + "</span>");
        String storedPassword = (String) session.getAttribute("password");

        if (isNewSession) {
            session.setMaxInactiveInterval(15 * 60);
        }

        if (null == storedPassword) {
            session.setAttribute("password", password);
            out.print("<info>Password saved!</info>");
            if ("s3cr3t".equals(password)) {
                Cookie cookie = new Cookie("Name", "SUDO");
                resp.addCookie(cookie);
            }
        } else {
            if (!storedPassword.equals(password)) {
                session.invalidate();
                out.print("<info>Password miss match. Session destroyed!</info>");
            }
        }

        if (habits != null && habits.length > 0) {
            out.print("<span>What do you want these habits: </span>");
            out.print("<ul>");
            Arrays.stream(habits).forEach((String habit) -> out.print("<li>" + habit + "</li>"));
            out.print("</ul>");
            out.print("<span>for?</span>");
        }
        out.print("</body></html>");

        resp.sendRedirect("/hello");
    }
}
