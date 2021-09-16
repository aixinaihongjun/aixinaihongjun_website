import config from "@/config";

export default {
    data() {
        return {};
    },
    computed: {
        baseUrl() {
            return config.baseUrl;
        }
    },
    methods: {
        getImgUrl(image) {
            return config.baseUrl + image;
        }
    }
};