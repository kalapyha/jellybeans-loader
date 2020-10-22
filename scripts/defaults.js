(function (ls) {
  "use strict";

  // One-time reset of settings
  chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
      // Open the options page after install
      //chrome.tabs.create({ url: "/views/options.html" });
    } else if (
      details.reason === "update" &&
      /^(((0|1)\..*)|(2\.(0|1)(\..*)?))$/.test(details.previousVersion)
    ) {
      // Clear data from versions before 2.1
      ls.clear();
    }
  });

  // Global
  ls.animation_duration = "500";

  // Popup
  var defaults = {
    // Filters
    folder_name: "",
    new_file_name: "",
    filter_url: "",
    filter_url_mode: "normal",
    filter_min_width: 0,
    filter_min_width_enabled: false,
    filter_max_width: 3000,
    filter_max_width_enabled: false,
    filter_min_height: 0,
    filter_min_height_enabled: false,
    filter_max_height: 3000,
    filter_max_height_enabled: false,
    only_images_from_links: false,
    // Options
    // General
    show_download_confirmation: false,
    show_download_notification: true,
    show_file_renaming: true,
    // Filters
    show_url_filter: false,
    show_image_width_filter: false,
    show_image_height_filter: false,
    show_only_images_from_links: false,
    // Images
    show_image_url: true,
    show_open_image_button: true,
    show_download_image_button: true,
    columns: 3,
    image_min_width: 150,
    image_max_width: 200,
    image_border_width: 3,
    image_border_color: "#4d7902",
  };

  for (var option in defaults) {
    if (ls[option] === undefined) ls[option] = defaults[option];
    ls[option + "_default"] = defaults[option];
  }

  ls.options = JSON.stringify(Object.keys(defaults));
})(localStorage);
