/*
jslint  browser: true, continue: true, devel: true,
indent: 2, maxerr: 50, newcap: true, nomen: true,
plusplus: true, regexp: true, sloppy: true, vars: false,
white: true
*/
/* global $, spa */

spa.shell = (function () {
    let
        configMap = {
            main_html: String()
                + '<div class="spa-shell-head">'
                + '<div class="spa-shell-head-logo"></div>'
                + '<div class="spa-shell-head-acct"></div>'
                + '<div class="spa-shell-head-search"></div>'
                + '</div>'
                + '<div class="spa-shell-main">'
                + '<div class="spa-shell-main-nav"></div>'
                + '<div class="spa-shell-main-content"></div>'
                + '</div>'
                + '<div class="spa-shell-foot"></div>'
                + '<div class="spa-shell-chat"></div>'
                + '<div class="spa-shell-modal"></div>'
        },
        stateMap = { $container: null },
        jqueryMap = {},
        setjQueryMap, initModule;
    //---------------end of var in module scope---

    //---------beginning service methods----
    //---------end of service methods----

    //-------------beginning of DOM methods----
    setjQueryMap = function () {
        let $container = stateMap.$container;
        jqueryMap = { $container: $container };
    }
    //-------------end of DOM methods-----

    //-------------beginning of listeners----
    //-------------end of listeners----

    //-------------beginning of open methods----
    initModule = function ($container) {
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setjQueryMap();
    };
    return { initModule: initModule };
    //--------------end of open methods----

}());