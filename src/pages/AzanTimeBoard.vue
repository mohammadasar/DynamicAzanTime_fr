<template>
<div class="container">
    <div>

        <div class="bg-img">
            <img src="/namaze-bg-1.png">
        </div>
        <div class="changeDate-btn">
            <q-btn @click="addSixDays()" color="yellow-8" text-color="black">Add 6 Days</q-btn><br>
            <q-btn @click="lessSixDays()" class="q-mt-sm" color="yellow-8" text-color="black">less 6 Days</q-btn>

        </div>
        <div class="date">
            <div class="start" style="font-size: 26px; font-weight: 700;background-color: #FFD117;padding: 0px 20px;border: none;border-radius: 10px;">
                <span>
                    {{ formattedDate }}
                </span>
                <span class="q-ml-md"> Start</span>
            </div>
            <div class="end q-mt-sm" style="font-size: 26px; font-weight: 700;background-color: #FFD117;padding: 0px 20px;border: none;border-radius: 10px;">
                <span>
                    {{ formattedDateEnd }}
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
            <div class="table-namaz" >
                <table v-for="(value, index) in namazList" :key="index">
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

            <div class="table-iquamath">
                <table v-for="(value, index) in iquamathList" :key="index">
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
            <div class="other-time">
                <table v-for="(value, index) in others" :key="index">
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
            <div class="others1-time">
                <table v-for="(value, index) in others1" :key="index">
                    <tr>
                        <td>{{ value.israak}}</td>
                    </tr>
                    <tr>
                        <td>{{ value.luha}}</td>
                    </tr>
                    <tr>
                        <td>{{ value.ifthar}}</td>
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
            iquamathList: [{}],
            others: [{}],
            others1: [{}],
            idList: [], // Array to hold all ids

            currentDate: new Date("2024-06-25"),
            EndDate: new Date("2024-07-01"),
        }
    },
    computed: {
        formattedDate() {
            const date = this.currentDate;
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        },
        formattedDateEnd() {
            const date = this.EndDate;
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        },
    },
    methods: {
        addSixDays(id) {
            this.fetchData(this.idList).then(() => {
                this.addDaysToEndDate(6);
                id=this.idList
                console.log("id================>",id)
                console.log("EndDate after adding 6 days:", this.EndDate);
            }).catch(err => {
                console.error("Error fetching data:", err);
            });

            this.currentDate = this.addDays(this.currentDate, 6);
            console.log("currentDate after adding 6 days:", this.currentDate);

            
        },

        lessSixDays() {
            this.fetchData().then(() => {
                this.addDaysToEndDate(-6);
                console.log("EndDate after subtracting 6 days:", this.EndDate);
            }).catch(err => {
                console.error("Error fetching data:", err);
            });

            this.currentDate = this.addDays(this.currentDate, -6);
            console.log("currentDate after subtracting 6 days:", this.currentDate);
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
                        // this.namazList = response.data;
                        // this.iquamathList = response.data;
                        // this.others = response.data;
                        this.others1 = response.data;

                        // Collecting all ids
                        this.idList = response.data.map(item => item.id);

                        console.log("idList========>", this.idList);
                        console.log("namazList========>", this.namazList);
                        console.log("iquamathList=========>", this.iquamathList);
                        console.log("others==============>", this.others);
                        console.log("others1=========>", this.others1);
                        console.log("currentDate========>", this.currentDate);
                        console.log("EndDate=========>", this.EndDate);

                        resolve(response);
                    })
                    .catch((err) => {
                        console.error("Error fetching data:", err);
                        reject(err);
                    });
            });
        },
    },
    created() {
        this.addSixDays();
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
