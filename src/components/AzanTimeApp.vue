<template>
<div class="container">
    <div class="date-con" style="padding-top: 100px;">

        <div class="date " v-for="(value, index) in paginatedItems" :key="index" align="center">
            <div class="start">
                <span>
                    01-07-2024
                </span>
                <span class="q-ml-md"> Start</span>
            </div>
            <div class="end q-mt-sm">
                <span>
                    07-07-2024
                </span>
                <span class="q-ml-md">End</span>
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
            <div class="waqth-list" align="center">
                <div class="q-mt-md">
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sunrise.png" width="20" height="20"></span>FAJR</div>
                        <div class="col time">04:35</div>
                        <div class="col time">05:05</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sun.png" width="20" height="20"></span>DHUHAR</div>
                        <div class="col time">12:45</div>
                        <div class="col time">01:00</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="sunset.png" width="20" height="20"></span>AZHAR</div>
                        <div class="col time">04:50</div>
                        <div class="col time">05:05</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="clear-sky.png" width="20" height="20"></span>MAQRIB</div>
                        <div class="col time">06:43</div>
                        <div class="col time">06:43</div>
                    </div>
                    <div class=" row waqth">
                        <div class="col" align="start" style="color: black;"><span class="q-mr-sm icons"><img src="moon.png" width="20" height="20"></span>ISHA</div>
                        <div class="col time">08:10</div>
                        <div class="col time">08:25</div>
                    </div>

                </div>

            </div>

             <div class="other-container">
                <div class="other" align="center" >
                    <div class=" row other-items">
                        <div class="col" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="night-mode.png" width="20" height="20"></span>SAHAR</div>
                        <div class="col "></div>
                        <div class="col time">04:14</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunrise.png" width="20" height="20"></span>SUNRISE</div>
                        <div class="col "></div>
                        <div class="col time">05:55</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunset.png" width="20" height="20"></span>SUNSET</div>
                        <div class="col "></div>
                        <div class="col time">06:38</div>
                    </div>
                    <div class=" row other-items">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sun.png" width="20" height="20"></span>SOLOR PEAK</div>
                        <div class="col"></div>
                        <div class="col-4 time">06:17</div>
                    </div>

                </div>
             </div>

             <div class="othersub-container">
                <div class="other-sub" align="center" style="margin-top: 20px;">
                    <div class=" row other-sub-row">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="cloudy.png" width="20" height="20"></span>ISRAAH</div>
                        <div class="col "></div>
                        <div class="col-4 time">06:15</div>
                    </div>
                    <div class=" row other-sub-row">
                        <div class="col" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="sunrise.png" width="20" height="20"></span>LUHA</div>
                        <div class="col "></div>
                        <div class="col time">10:00</div>
                    </div>
                    <div class=" row other-sub-row">
                        <div class="col-7" align="start" style="color: black;font-size: 14px;"><span class="q-mr-sm icon"><img src="moon.png" width="20" height="20"></span>IFTHAR</div>
                        <div class="col "></div>
                        <div class="col-4 time">06:43</div>
                    </div>

                </div>
             </div>

            <div class="table-namaz" v-for="(value, index) in paginatedItems" :key="index">
                <table>
                    <tr>
                        <td>{{ value.fnamaz }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.dnamaz }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.anamaz }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.mnamaz }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.inamaz }}</td>
                    </tr>
                </table>
            </div>

            <div class="table-iquamath" v-for="(value, index) in paginatedItems" :key="index">
                <table>
                    <tr>
                        <td>{{ value.fiquamath }} </td>
                    </tr>
                    <tr>
                        <td>{{ value.diquamath }} </td>
                    </tr>
                    <tr>
                        <td>{{ value.aiquamath }} </td>
                    </tr>
                    <tr>
                        <td>{{ value.miquamath }} </td>
                    </tr>
                    <tr>
                        <td>{{ value.iiquamath }} </td>
                    </tr>
                </table>
            </div>

            <!-- <div class="others" align="start">
                    <div class="other-waqth">
                        <table v-for="(value, index) of otherswaqth" :key="index">
                            <tr>
                                <td>{{value.waqth}}</td>
                            </tr>
                        </table>
                    </div>
                </div> -->
            <div class="other-time" v-for="(value, index) in paginatedItems" :key="index">
                <table>
                    <tr>
                        <td>{{ value.sahar }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.sunrise }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.sunset }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.solorpeak }}</td>
                    </tr>
                </table>
            </div>
            <div class="others1-time" v-for="(value, index) in paginatedItems " :key="index">
                <table>
                    <tr>
                        <td>{{ value.israak }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.luha }}</td>
                    </tr>
                    <tr>
                        <td>{{ value.ifthar }}</td>
                    </tr>
                </table>
            </div>
            <!-- <div class="others1-waqth">
                    <table v-for="(value, index) in others1waqth" :key="index">
                        <tr>     
                            <td>{{ value.waqth }}</td>
                        </tr>
                    </table>
                </div> -->

        </div>
        <!-- <div class="page" style="position: absolute;z-index: 8; right: 10%;top:15%; background-color: #FFD117;border-radius:5px;border: 1px solid #FFD117;">
                <q-pagination v-model="pagination.page" :max="pageCount" max-pages="7" input
                input-class="text-blue-grey-10"   color="blue-grey-10"/>
            </div> -->
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {

            namazList: [{}],

            currentDate: new Date("2024-06-25"),
            EndDate: new Date("2024-07-01"),

            start: '',
            End: '',
            pagination: {
                page: 1,
                rowsPerPage: 1,
            },

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
        addSixDays() {
            this.fetchData();
            this.addDaysToEndDate(6);
            this.currentDate = this.addDays(this.currentDate, 6);
            console.log("currentDate after adding 6 days:", this.currentDate);
            console.log("EndDate after adding 6 days:", this.EndDate);
            this.start = this.formattedDate;
            this.End = this.formattedDateEnd;
            console.log("typeof======", typeof (this.End));
            console.log("typeof======", typeof (this.start));
            console.log(" Add start", this.start);
            console.log(" Add End", this.End);

        },

        lessSixDays() {
            // this.fetchData().then(() => {
            //     this.addDaysToEndDate(-6);

            // }).catch(err => {
            //     console.error("Error fetching data:", err);
            // });

            this.fetchData()
            this.addDaysToEndDate(-6);
            this.currentDate = this.addDays(this.currentDate, -6);
            console.log("currentDate after subtracting 6 days:", this.currentDate);
            console.log("EndDate after subtracting 6 days:", this.EndDate);

            this.start = this.formattedDate;
            this.End = this.formattedDateEnd;

            console.log(" less start", this.start);
            console.log("less End", this.End);
        },

        addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        },

        addDaysToEndDate(days) {
            this.EndDate = this.addDays(this.EndDate, days);
        },

        fetchData() {
            return new Promise((resolve, reject) => {
                this.$api.get(`/AzanTime/all`) // Assuming this endpoint returns an array of objects
                    .then((response) => {
                        console.log("data=========", response.data);

                        // Assuming response.data is an array of objects with ids
                        this.namazList = response.data;

                        console.log("namazList========>", this.namazList);

                        resolve(response);
                    })
                    .catch((err) => {
                        console.error("Error fetching data:", err);
                        reject(err);
                    });
            });
        },

        updatePage(page) {
            this.pagination.page = page;
        },
    },
    created() {
        this.addSixDays();
        // this.updatePage();

    },
};
</script>

<style>
@media screen and (max-device-width: 425px) {

    .heading {

        color: white;
        width: 100%;
        font-size: 24px;
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
        font-size: 18px;
        font-weight: 700;
        background-color: white;
        border: 1px solid white;
        border-radius: 5px;
        padding: 0px 15px;
        color: #1A237E;
    }

    .waqth-list {
        position: relative;
        font-size: 15px;
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
        transition: transform 0.3s ease;
    }

    .waqth:hover {
        transform: scale(1.05);
    }

    .icons {
        padding: 8px 7px 6px 5px;
        background-color: #1A237E;
        color: white;
    }
    .icon{
        padding: 9px 7px 5px 5px;
        background-color: #1A237E;
        color: white;
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
        font-size: 20px;
        font-weight: 700;
        background-color: #FFD117;
        padding: 0px 20px;
        border: none;
        border-radius: 10px;
        width: 50%;

    }

    .end {
        font-size: 20px;
        font-weight: 700;
        background-color: #FFD117;
        padding: 0px 20px;
        border: none;
        border-radius: 10px;
        width: 50%;
    }

    .date-con {
        position: relative;
        background-color: #0755B1;
        background-image: linear-gradient(-90deg, #0755B1, #46BBD8);
        
    }
    .other{
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 1px;
    }
    .other-items{
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
        transition: transform 0.3s ease;
    }
    .other-items:hover{
        transform: scale(1.05);
    }
    .other-sub-row{
        width: 65%;
        display: flex;
        justify-content: space-around;
        align-items: start;
        margin-top: 10px;
        padding: 3px;
        border: 1px solid #FFD117;
        border-radius: 5px;
        background-color: #FFD117;
        font-size: 16px;
        font-weight: 700;
        color: white;
        transition: transform 0.3s ease;

    }
}

.namaz-table {
    position: relative;

}

.waqth-table {
    width: 412px;
}

.changeDate-btn {
    position: absolute;
    right: 10%;
    top: 11%;
    z-index: 3;

}

.table-namaz {
    position: absolute;
    top: 18%;
    left: 45%;
    font-size: 18px;
    font-weight: 700;
    color: black;

}

.table-iquamath {
    position: absolute;
    top: 18%;
    right: 25%;
    font-size: 18px;
    font-weight: 700;
    color: white;

}

/* .others {
    width: 180px;
    position: absolute;
    left: 19%;
    margin-top: 0px;
    color: black;
    font-size: 16px;
    font-weight: 800;
} */

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

.others1-time {
    position: absolute;
    left: 55%;
    bottom: 3%;
    font-size: 16px;
    font-weight: 800;
    color: white;
}

.others1-waqth {
    position: absolute;
    left: 40%;
    bottom: 3%;
    font-size: 16px;
    font-weight: 800;
    color: black;
    letter-spacing: 1px;
}
</style>
