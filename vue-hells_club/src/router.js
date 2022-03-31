import { createRouter, createWebHistory } from "vue-router";
import SampleComponent from "@/components/SampleComponent"

const routes = [
    {
        path : "/sample",
        name : "Sample",
        component : SampleComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;