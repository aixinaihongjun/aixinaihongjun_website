import config from "@/config";

export default {
    methods: {
        getImgUrl(image) {
            return config.baseUrl + image;
        },
    },
}