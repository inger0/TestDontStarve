randList();

function randList() {
    let images = [
        '\/lol\/lol1.png',
        '\/lol\/lol2.png',
        '\/lol\/lol3.png',
        '\/lol\/lol4.png',
        '\/lol\/lol5.png',
        '\/lol\/lol6.png',
        '\/ds01.jpg',
        '\/ds02.jpg',
        '\/ds03.jpg',
        '\/ds04.jpg',
        '\/ds05.jpg',
        '\/ds06.jpg',
    ];

    images.sort(function () {
        return (0.5 - Math.random());
    });

    String.prototype.format = function () {
        if (arguments.length === 0) {
            return this;
        }
        var param = arguments[0];
        var s = this;
        if (typeof (param) == 'object') {
            for (var key in param)
                s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
            return s;
        } else {
            for (var i = 0; i < arguments.length; i++)
                s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
            return s;
        }
    };

    for (let i = 0; i < 8; i++) {

        let row = "<div class='col-lg-3 col-sm-4 col-md-6'>\n" +
            "    <div class='portfolio-box zoom-effect'>\n" +
            "        <img src='images{image_id}' class='img-responsive' alt=''>\n" +
            "        <div class='portfolio-box-caption'>\n" +
            "            <div class='portfolio-box-caption-content'>\n" +
            "                <div class='project-social'>\n" +
            "                    <ul class='list-inline'>\n" +
            "                        <li><a href='#'><i class='fa fa-link'></i></a></li>\n" +
            "                        <li><a href='images{image_id}' data-lightbox='example-set'\n" +
            "                               data-title='Click the right half of the image to move forward.'><i\n" +
            "                                class='fa fa-search'></i></a></li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";

        $("#image-list").append(row.format({image_id: images[i]}));
    }
}