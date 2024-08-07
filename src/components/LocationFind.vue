<template>
<div>
    <div v-if="district" class="district">
        <p class="para"><span class="location-icon "><img src="location.png" ></span>{{ district }}</p>
    </div>
    <div v-if="error">
        <p>Error: {{ error }}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            district: null,
            error: null,
        };
    },
    methods: {
        async getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                            try {
                                const { latitude, longitude } = position.coords;
                                const apiKey = 'b69612816d6f41b49af24954fc1b7326';
                                const response = await axios.get(
                                    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
                                );
                                console.log("reponse=======>", response);
                                console.log("latitude=====", latitude, "<br>longitude===", longitude)
                                const results = response.data.results;
                                console.log("result======", results)
                                if (results.length > 0) {
                                    const components = results[0].components;
                                    if (components.suburb) {
                                        this.district = components.suburb;
                                    } else if (components.state_district) {
                                        this.district = components.
                                        state_district
                                        ;
                                        console.log("this.district=======", this.district)
                                    } else {
                                        this.error = 'District not found';
                                    }
                                } else {
                                    this.error = 'No results found';
                                }
                            } catch (err) {
                                this.error = 'Failed to fetch district: ' + err.message;
                            }
                        },
                        (err) => {
                            this.error = err.message;
                        }
                );
            } else {
                this.error = "Geolocation is not supported by this browser.";
            }
        },
    },
    mounted() {
        this.getLocation();
    },
};
</script>

<style scoped>
button {
    margin-top: 20px;
}

.para {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
}
.para img{
    margin-top: 4px;
}
</style>
