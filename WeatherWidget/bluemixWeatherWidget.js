/*
 * © Copyright IBM Corp. 2017
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */
// @name         weatherWidget
// @version      0.1
// @author       Brian Gleeson

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
