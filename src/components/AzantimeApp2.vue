<template>
<div class="container">
    <div class="date-con" style="padding-top: 100px;">
        <div style="position: absolute;left: 0;top: 0;">
            <img src="lamp.png" width="80" height="80">
        </div>
        <div style="position: absolute;right: 0;top: 0;">
            <img src="lamp.png" width="80" height="80">
        </div>
        <div style="position: absolute;top: 3%;">
            <img src="arch.png" style="width: 100%;">
        </div>

        <div align="center">
            <div class="district">
                <Location></Location>
            </div>

        </div>

        <div class="date " align="center">
            <div class="start">
                <span class="q-mr-sm calendar"><img src="calendar.png"></span>
                <span>
                    {{ currentDate }}
                </span>

            </div>

        </div>
        <div class="namaz-table">
            <div class="heading" align="center">

                <p><span><img class="q-mt-sm" src="prayer-mat.png" width="40" height="30"></span>
                    <span>Prayer Times</span></p>
            </div>
            <div class="categories ">
                <span>Waqth</span>
                <span>Namaz</span>
                <span>Iquamath</span>
            </div>
            <div class="waqth-list" align="center" v-for="(value, index) in paginatedItems" :key="index">
                <div class="q-mt-md" >
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sunrise.png"></span>FAJR</div>
                        <div class="col time">{{ value.fnamaz }}</div>
                        <div class="col time">{{ value.fiquamath }}</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sun.png"></span>DHUHAR</div>
                        <div class="col time">{{ value.dnamaz }}</div>
                        <div class="col time">{{ value.diquamath }}</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sunset.png"></span>AZHAR</div>
                        <div class="col time">{{ value.anamaz }}</div>
                        <div class="col time">{{ value.aiquamath }}</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="clear-sky.png"></span>MAQRIB</div>
                        <div class="col time">{{ value.mnamaz }}</div>
                        <div class="col time">{{ value.mnamaz }}</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="moon.png"></span>ISHA</div>
                        <div class="col time">{{ value.inamaz }}</div>
                        <div class="col time">{{ value.iiquamath }}</div>
                    </div>

                </div>

            </div>

            <div class="other-container" v-for="(value, index) in paginatedItems" :key="index">
                <div class="other" align="center">
                    <div class=" row other-items">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="night-mode.png" width="20" height="20"></span>SAHAR</div>
                        <div class="col "></div>
                        <div class="col-4 time">{{ value.sahar }}</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunrise.png" width="20" height="20"></span>SUNRISE</div>
                        <div class="col "></div>
                        <div class="col-4 time">{{ value.sunrise }}</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunset.png" width="20" height="20"></span>SUNSET</div>
                        <div class="col "></div>
                        <div class="col-4 time">{{ value.sunset }}</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sun.png" width="20" height="20"></span>SOLOR PEAK</div>
                        <div class="col"></div>
                        <div class="col-4 time">{{ value.solorpeak }}</div>
                    </div>

                </div>
            </div>

            <div class="othersub-container" style="padding-bottom: 100px;">
                <div class="other-sub" align="center" style="margin-top: 20px;" v-for="(value, index) in paginatedItems" :key="index">
                    <div class=" row other-sub-row">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="cloudy.png" width="20" height="20"></span>ISRAAH</div>
                        <div class="col "></div>
                        <div class="col-4 time">{{ value.israak }}</div>
                    </div>
                    <div class=" row other-sub-row">
                        <div class="col" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunrise.png" width="20" height="20"></span>LUHA</div>
                        <div class="col "></div>
                        <div class="col time">{{ value.luha }}</div>
                    </div>
                    <div class=" row other-sub-row">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="moon.png" width="20" height="20"></span>IFTHAR</div>
                        <div class="col "></div>
                        <div class="col-4 time">{{ value.ifthar }}</div>
                    </div>

                </div>
            </div>

        </div>
        <div class="page">
            <q-pagination v-model="pagination.page" :max="pageCount" max-pages="7" input input-class="text-blue-grey-10" color="blue-grey-10" />
        </div>
    </div>

</div>
</template>

<script>
import Location from 'src/components/LocationFind.vue'

export default {
    components: {
        Location
    },
    data() {
        return {

            namazList: [{}],
            currentDate: '',
            start: '',
            End: '',
            pagination: {
                page: 1,
                rowsPerPage: 1,
            },
            isMatch: false, // Result of the comparison

        }
    },
    computed: {

        paginatedItems() {
            const start = (this.pagination.page - 1) * this.pagination.rowsPerPage;
            const end = start + this.pagination.rowsPerPage;
            const one = this.namazList.slice(start, end);
            console.log("one==============>", one);
            return one;
        },
        pageCount() {
            const count = Math.ceil(this.namazList.length / this.pagination.rowsPerPage);
            console.log("count================>", count);
            return count;
        }

    },
    methods: {
        fetchData() {
            return new Promise((resolve, reject) => {
                this.$api.get(`/AzanTime/all`) // Assuming this endpoint returns an array of objects
                    .then((response) => {
                        console.log("data=========", response.data);

                        // Assuming response.data is an array of objects with ids
                        this.namazList = response.data;


                        resolve(response);
                    })
                    .catch((err) => {
                        console.error("Error fetching data:", err);
                        reject(err);
                    });
            });
        },
        getCurrentDate() {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const year = date.getFullYear();
            this.currentDate = `${day}-${month}-${year}`;
        },
        compareData() {
            this.isMatch = this.currentDate === this.namazList.currentDate;
            console.log("currentDate--------->", this.currentDate);
            console.log("namazDate--------->", this.namazList.currentDate)
            console.log("ismatch------------>", this.isMatch)
            
        },

        updatePage(page) {
            this.pagination.page = page;
        },
    },
    created() {
        this.fetchData();
        this.getCurrentDate();
        this.compareData();
        // this.updatePage();

    },
};
</script>

<style>
@media screen and (max-device-width: 425px) {

    .heading {

        color: white;
        width: 100%;
        font-size: 5.8vw;
        font-weight: 800;

    }

    .heading p {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #1A237E;
        border: none;
        border-radius: 8px;
        width: 90%;
        margin-top: 20px;

    }

    .categories {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        padding: 0px 5px;
        margin-top: 20px;

    }

    .categories span {
        font-size: 4vw;
        font-weight: 700;
        background-color: white;
        border: 1px solid white;
        border-radius: 5px;
        padding: 0px 15px;
        color: #1A237E;
    }

    .waqth-list {
        position: relative;
        font-size: 3.7vw;
        font-weight: 900;
        letter-spacing: 1px;
        color: black;
        margin-top: 20px;

    }

    .waqth {
        display: flex;
        justify-content: space-around;
        align-items: start;
        margin-top: 10px;
        padding: 3px;
        border: 1px solid #FFD117;
        border-radius: 5px;
        background-color: #FFD117;
        width: 87%;
        color: white;

    }

    .icons {
        padding: 6px 7px 6px 5px;
        background-color: #1A237E;
        color: white;
        width: 1vw;
        border: none;
        border-radius: 5px;
    }

    .icons img {
        width: 4.5vw;
    }

    .icon {
        padding: 9px 7px 5px 5px;
        background-color: #1A237E;
        color: white;
        width: 1vw;
        border: none;
        border-radius: 5px;
    }

    .icon img {
        width: 4.5vw;
    }

    .location-icon img {
        width: 4.5vw;
    }

    .time {
        background-color: #1A237E;
        padding: 3px 0px 0px 0px;
        margin: 0px 4px 0px 4px;
        border: none;
        border-radius: 3px;

    }

    .date {
        position: relative;
        color: black;

    }

    .start {
        font-size: 4.5vw;
        font-weight: 700;
        background-color: #FFD117;
        padding: 0px 20px;
        border: none;
        border-radius: 10px;
        width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }

    .end {
        font-size: 4.5vw;
        font-weight: 700;
        background-color: #FFD117;
        padding: 0px 20px;
        border: none;
        border-radius: 10px;
        width: 50%;
    }

    .district {
        font-size: 4.5vw;
        font-weight: 700;
        background-color: #1A237E;
        /* padding: 0px 20px; */
        border: none;
        border-radius: 10px;
        width: 50%;
        color: white;

    }

    .date-con {
        position: relative;
        background-color: #0755B1;
        background-image: linear-gradient(-90deg, #0755B1, #46BBD8);

    }

    .other {
        font-size: 3.5vw;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .other-items {
        width: 87%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        margin-top: 10px;
        padding: 3px;
        border: 1px solid #FFD117;
        border-radius: 5px;
        background-color: #FFD117;
        color: white;

    }

    .other-sub {
        font-size: 3.7vw;
        font-weight: 700;
    }

    .other-sub-row {
        width: 65%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        margin-top: 10px;
        padding: 3px;
        border: 1px solid #FFD117;
        border-radius: 5px;
        background-color: #FFD117;
        color: white;
        transition: transform 0.3s ease;

    }

    .page {
        position: absolute;
        z-index: 8;
        right: 30%;
        bottom: 4%;
        background-color: #FFD117;
        border-radius: 5px;
        border: 1px solid #FFD117;

    }

    .page q-pagination {
        font-size: 10px;
    }
}

.namaz-table {
    position: relative;

}

.waqth-table {
    width: 412px;
}

.other-waqth {

    margin-top: 8px;
    font-size: 16px;
    font-weight: 800;
    color: black;
    letter-spacing: 1px;
}

.other-time {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 800;
    color: white;

}
</style>
