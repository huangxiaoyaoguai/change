 ! function() {
            function a() {
                var clientWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
                document.documentElement.style.fontSize = clientWidth / 7.5 + "px";
            }
            var b = null;
            window.addEventListener("resize", function() {
                clearTimeout(b), b = setTimeout(a, 300)
            }, !1), a()
        }(window);