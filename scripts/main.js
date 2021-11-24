console.log("load");

$(".nav-link").on("click", function () {
    $(".nav-link").toggleClass("active", false);
    $(this).toggleClass("active", true);
});

var app = Vue.createApp({
    data() {
        return {
            kidsList: [],
            youthList: [],
        };
    },
    created() {
        const self = this;

        $.getJSON("/data/kids.json", function (data) {
            for (item of data) {
                self.kidsList.push({
                    group: item.group,
                    born: item.born,
                });
            }
        });

        $.getJSON("/data/youth.json", function (data) {
            for (item of data) {
                self.youthList.push({
                    group: item.group,
                    born: item.born,
                });
            }
        });
    },
});

app.mount("#main");
