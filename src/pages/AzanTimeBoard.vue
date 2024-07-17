<template>
<div class="container">
    <div>

        <div class="bg-img">
            <img src="/namaze-bg-1.png">
        </div>

        <!-- <div class="changeDate-btn">
            <q-btn @click="addSixDays()" color="yellow-8" text-color="black">Add 6 Days</q-btn><br>
            <q-btn @click="lessSixDays()" class="q-mt-sm" color="yellow-8" text-color="black">less 6 Days</q-btn>

        </div> -->
        <div class="date" v-for="(value, index) in paginatedItems" :key="index">
            <div class="start"  style="font-size: 26px; font-weight: 700;background-color: #FFD117;padding: 0px 20px;border: none;border-radius: 10px;" >
                <span>
                    {{ value.currentDate }}
                </span>
                <span class="q-ml-md"> Start</span>
            </div>
            <div class="end q-mt-sm"  style="font-size: 26px; font-weight: 700;background-color: #FFD117;padding: 0px 20px;border: none;border-radius: 10px;">
                <span>
                    {{ value.endDate }}
                </span>
                <span class="q-ml-md">End</span>
            </div>

        </div>
        <div class="namaz-table" align="center">
            <div class="heading" align="center">
                <p>Namaz Timing</p>
            </div>
            <div class="categories ">
                <span>Waqth</span>
                <span>Namaz</span>
                <span>Iquamath</span>
            </div>
            <div class="waqth-list" v-for="(w,index) in waqthList" :key="index" align="start">
                <div>
                    <table class="waqth-table" style="margin-top: 7px;">
                        <tr>{{ w.waqth }} </tr>
                    </table>

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
                <table >
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

            <div class="others" align="start">
                <div class="other-waqth">
                    <table v-for="(value, index) of otherswaqth" :key="index">
                        <tr>
                            <td>{{value.waqth}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="other-time" v-for="(value, index) in paginatedItems" :key="index">
                <table >
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
                <table >
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
            <div class="others1-waqth">
                <table v-for="(value, index) in others1waqth" :key="index">
                    <tr>
                        <td>{{ value.waqth }}</td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="page" style="position: absolute;z-index: 8; right: 10%;top:15%; background-color: #FFD117;border-radius:5px;border: 1px solid #FFD117;">
            <q-pagination v-model="pagination.page" :max="pageCount" max-pages="7" input
            input-class="text-blue-grey-10"   color="blue-grey-10"/>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            waqthList: [
                { waqth: 'Fajr' },
                { waqth: 'Dhuhar' },
                { waqth: 'Azhar' },
                { waqth: 'Maqrib' },
                { waqth: 'Isha' },
            ],
            otherswaqth: [
                { waqth: 'sahar' },
                { waqth: 'sunrise' },
                { waqth: 'sunset' },
                { waqth: 'solorpeak' }
            ],
            others1waqth: [
                { waqth: 'israak' },
                { waqth: 'luha' },
                { waqth: 'ifthar' }
            ],
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
.bg-img img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 700px;
    z-index: 1;

}

.namaz-table {
    position: absolute;
    z-index: 2;
    left: 30%;
    top: 29%;
    width: 610px;
    height: 490px;

}

.categories {
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-between;

}

.categories span {
    font-size: 20px;
    font-weight: 700;
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 0px 15px;
    color: #1A237E;
}

.heading {
    background-color: #1A237E;
    color: white;
    width: 400px;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 10px;
}

.waqth-list {
    position: relative;
    padding-left: 120px;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 1px;
    color: white;

}

.date {
    position: absolute;
    z-index: 3;
    left: 43%;
    top: 15%;
    color: black;
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
    color: white;

}

.table-iquamath {
    position: absolute;
    top: 18%;
    right: 25%;
    font-size: 18px;
    font-weight: 700;
    color: white;

}

.others {
    width: 180px;
    position: absolute;
    left: 19%;
    margin-top: 0px;
    color: white;
    font-size: 16px;
    font-weight: 800;
}

.other-waqth {

    margin-top: 8px;
    font-size: 16px;
    font-weight: 800;
    color: white;
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
    color: white;
    letter-spacing: 1px;
}
</style>
