import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { all } from "@fortawesome/free-solid-svg-icons";
import { all } from "@fortawesome/free-regular-svg-icons";
import { all } from "@fortawesome/free-brands-svg-icons";

library.add();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
