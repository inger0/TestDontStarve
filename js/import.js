$(document).ready(function ($) {
    $(document).ready(function () {
        // 菜单引用
        $('#menu').empty();
        $('#menu').html("<div class=\"container\">\n" +
            "    <div class=\"navbar-header\">\n" +
            "        <button type=\"button\" class=\"btn btn-navbar navbar-toggle\" data-toggle=\"collapse\"\n" +
            "                data-target=\".navbar-ex1-collapse\"><i class=\"fa fa-bars\"></i></button>\n" +
            "        <a class=\"navbar-brand\" href=\"#\">\n" +
            "            <img src=\"images/logo.png\"/>\n" +
            "        </a>\n" +
            "    </div>\n" +
            "    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n" +
            "        <ul class=\"nav navbar-nav\">\n" +
            "            <li><a href=\"index.html\">Home</a></li>\n" +
            "            <li><a href=\"gallery.html\">Gallery</a></li>\n" +
            "            <li><a href=\"archive.html\">archive</a></li>\n" +
            "            <li><a href=\"single.html\">About</a></li>\n" +
            "            <li><a href=\"contact.html\">Contact</a></li>\n" +
            "        </ul>\n" +
            "    </div>\n" +
            "</div>\n");

        // 会引起跨域问题
        // $('#menu').load('module-menu.html');

        // Footer引用
        $('#footer').empty();
        $('#footer').html("<div class=\"bottom-footer\">\n" +
            "    <div class=\"row\">\n" +
            "        <div class=\"col-md-4\">\n" +
            "            <p>Copyright &copy; Me</p>\n" +
            "        </div>\n" +
            "        <div class=\"col-md-4\">\n" +
            "            <ul class=\"list-inline social-links\">\n" +
            "                <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
            "                <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
            "                <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n" +
            "                <li><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\n" +
            "            </ul>\n" +
            "        </div>\n" +
            "        <div class=\"col-md-4\">\n" +
            "            <ul class=\"list-inline quick-links\">\n" +
            "                <li><a href=\"#\">Privacy Policy</a></li>\n" +
            "            </ul>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>\n");

        // 会引起跨域问题
        // $('#footer').load('module-footer.html');
    });
});