// ==UserScript==
// @copyright    Copyright IBM Corp. 2017
// @name         weatherWidget
// @version      0.1
// @namespace    http://ibm.com
// @author       Brian Gleeson
// @include      *://apps.na.collabserv.com/communities/service/html/communityview*
// @include      *://apps.na.collabserv.com/communities/service/html/communityoverview*
// @exclude
// @run-at       document-end
// ==/UserScript==

    if (typeof(dojo) != "undefined") {
        require(["dojo/domReady!"], function() {
            var addWeatherWidget = function() {
                // Get first column dropzone
                var col1DropZone = dojo.byId("col1DropZone");

                // Add weather widget to community overview page
                dojo.place("<div id='weather-widget-container' class='widgetContainer'>" +
                       "<div id='weatherDropZone' class='target' role='presentation'>" +
                       "<div id='weatherHeader' class='lotusWidget2'>" +
                       "<h2 style='cursor: default'>" +
                         "<span >Weather Forecast</span>" +
                       "</h2>" +
                       "<div id='weatherSubArea' style='-webkit-user-select: text;'>" +
                       "<div id='weatherWidget'>" +
                       "<div class='Content view'>" +
                         "<iframe id='weatherFrame' style='width:100%;height:360px;' frameborder='0' src='https://xpages-fusion-alchemy.mybluemix.net/xpagesFusionAlchemy.nsf/weather.xsp'>" +
                         "</iframe>" +
                       "</div>" +
                       "</div>" +
                       "</div>" +
                       "</div>" +
                       "</div>" +
                       "</div>", col1DropZone, "first");
            };
            
            addWeatherWidget();
        });
    }
