<template>
  <!-- <q-page class="flex flex-center"> -->
    <div>
      <q-btn @click="addSixDays">Add 6 Days</q-btn>
      <div class="q-mt-md">
        Current Date: {{ formattedDate }}
      </div>
    </div>
  <!-- </q-page> -->
</template>

<script>
export default {
  name: 'ExercisePage',
  data() {
    return {
      currentDate: new Date("2024-07-01") // Format YYYY-MM-DD
    }
  },
  computed: {
    formattedDate() {
      const date = this.currentDate;
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  },
  methods: {
    addSixDays() {
      const date = new Date(this.currentDate);
      date.setDate(date.getDate() + 6);
      this.currentDate = date;
    }
  }
}
</script>

<style scoped>
.q-page {
  text-align: center;
}
</style>
