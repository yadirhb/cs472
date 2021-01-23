package cs472.miu.tags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

public class AspxLabel extends SimpleTagSupport {
    String foreColor;
    String text;
    Boolean bold = false;

    public void doTag() throws IOException {
        JspWriter out = getJspContext().getOut();
        StringBuilder htmlTag = new StringBuilder();
        htmlTag.append("<span");

        if (bold || null != foreColor) {
            htmlTag.append(" style='");
            if (null != foreColor) {
                htmlTag.append(String.format("color:%s;", foreColor));
            }
            if (bold) {
                htmlTag.append("font-weight:bold;");
            }
            htmlTag.append("'>");
        }

        htmlTag.append(String.format("%s</span>", text));

        out.write(htmlTag.toString());
    }

    public void setForeColor(String foreColor) {
        this.foreColor = foreColor;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setBold(Boolean bold) {
        this.bold = bold;
    }
}