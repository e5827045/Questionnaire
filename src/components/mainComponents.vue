<script>
import { mapState } from "pinia";

export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: "問卷一",
          status: "open",
          startDate: "2024-07-23",
          endDate: "2024-08-25",
        },
        {
          id: 2,
          name: "問卷二",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 3,
          name: "問卷三",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 4,
          name: "問卷四",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 5,
          name: "問卷五",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 6,
          name: "問卷六",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 7,
          name: "問卷七",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 8,
          name: "問卷八",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 9,
          name: "問卷九",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },

        {
          id: 10,
          name: "問卷十",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 11,
          name: "問卷十一",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 12,
          name: "問卷十二",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 13,
          name: "問卷十三",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 14,
          name: "問卷十四",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 15,
          name: "問卷十五",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 16,
          name: "問卷十六",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 17,
          name: "問卷十七",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 18,
          name: "問卷十八",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 19,
          name: "問卷十九",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 20,
          name: "問卷二十",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 21,
          name: "問卷二十一",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 22,
          name: "問卷二十二",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 23,
          name: "問卷二十三",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 24,
          name: "問卷二十四",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
        {
          id: 25,
          name: "問卷二十五",
          status: "closed",
          startDate: "2024-06-15",
          endDate: "2024-07-15",
        },
      ],

      nextId: 3,

      currentPage: 1,
      itemperPage: 5,
      show: false,
    };
  },
  computed: {
    PaginatedData() {
      const start = (this.currentPage - 1) * this.itemperPage;
      const end = start + this.itemperPage;
      return this.arr.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.arr.length / this.itemperPage);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      console.log(this.totalPages[selectIndex]);
      this.show = true;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    updateTotalPages() {
      this.totalPages = Math.ceil(this.arr.length / this.itemsPerPage);
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    },
    addRow() {
      this.arr.push({
        id: this.id++,
        name: `問卷${this.nextId - 1}`,
        status: "open",
      });
      this.updateTotalPages();
    },

    removeLastRow() {
      if (this.arr.length > 0) {
        this.arr.pop();
        this.updateTotalPages();
      }
    },

    removeRowAt(index) {
      this.arr.splice(index, 1);
      this.updateTotalPages();
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="serch">
      <h1>搜尋:</h1>
      <input type="search" placeholder="搜尋問卷名稱" />
    </div>

    <div class="time">
      <h1>統計時間:</h1>
      <input type="date" class="dateInput" />
      <h1>到</h1>
      <input type="date" class="dateInput" />
      <button>搜尋</button>
    </div>
    <div class="iconArea">
      <div class="iconChild One">
       <button @click="removeLastRow"><i class="fa-solid fa-trash-can"></i></button> 
        <button @click="addRow"><i class="fa-solid fa-plus"></i></button>
      </div>
      <div class="iconChild Two">
        <p>開放中 :</p>
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <div class="iconChild Three">
        <p>已關閉:</p>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      <div class="iconChild Four">
        <p>尚未開始:</p>
        <i class="fa-solid fa-spinner"></i>
      </div>
      <div class="iconChild Five">
        <P>未發布:</P>
        <i class="fa-solid fa-person-running"></i>
      </div>
    </div>

    <table class="content-table">
      <thead>
        <tr>
          <th></th>
          <th>編號</th>
          <th>問卷名稱</th>
          <th>狀態</th>
          <th>開始時間</th>
          <th>結束時間</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in PaginatedData" :key="item.id">
          <td><input type="checkbox" /></td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>
            <i
              :class="{
                'fa-regular fa-circle-check': item.status === 'open',
                'fa-regular fa-circle-xmark': item.status === 'closed',
                'fa-solid fa-spinner': item.status === 'still',
                'fa-solid fa-person-running': item.status === 'wait',
              }"
            ></i>
          </td>
          <td>{{ item.startDate }}</td>
          <td>{{ item.endDate }}</td>
          <td class="GO">GO!</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="['pagination-button', { 'active-page': currentPage === page }]"
      >
        {{ page }}
      </button>
      <button
        class="pagination-button"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$mainColor: #fff3d9;
$secondColor: #c85250;
$textColor: #e9eae0;

.content {
  width: 100%;
  height: 150dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff3d9;
  padding-top: 0;
}

.serch {
  width: 100%;
  height: 4%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1%;
  padding-left: 2%;

  h1 {
    width: 10%;
  }

  input {
    width: 50%;
    height: 100%;
    font-size: 45px;
    line-height: normal;

    &::placeholder {
      color: black;
      opacity: 0.5;
      font-size: 45px;
      padding-left: 30%;
    }

    &:focus {
      outline: none;
    }
  }
}

.time {
  width: 100%;
  height: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15%;
  margin-bottom: 10%;

  .dateInput {
    width: 35%;
    height: 100%;
    font-size: 25px;
    padding-left: 10%;
  }

  button {
    width: 80px;
    height: 100%;
    font-size: 25px;
    background: $secondColor;
    color: #e9eae0;
    border-radius: 15%;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      color: $secondColor;
      background: white;
    }

    &:active {
      scale: 0.6;
    }
  }
}

.iconArea {
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  align-items: center;

  .iconChild {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
      background: transparent;
      border: none;
    }

    i {
      font-size: 48px;
      margin-right: 15%;
    }

    p {
      font-size: 30px;
    }
  }
}

.content-table {
  border-collapse: collapse;

  margin: 25px 0;

  min-width: 95%;
  min-height: 30%;

  font-size: 30px;
  border-left: 2px solid #c85250;

  th {
    background: $secondColor;
    color: white;
    font-weight: bold;
    text-align: center;
    border-right: 2px solid white;
  }

  td {
    border-right: 2px solid $secondColor;
    padding: 15px, 15px;
    text-align: center;
  }

  tbody,
  tr {
    border-bottom: 2px solid $secondColor;
    height: 5%;
  }

  input {
    width: 40px;
    height: 20px;
    accent-color: $secondColor;
  }

  .GO {
    width: 10%;
    height: 10%;
    transform: 1s;
    cursor: pointer;

    &::before {
      content: "\f04b";

      font-size: 25px;

      font-weight: 500;

      font-family: "FontAwesome";

      color: $secondColor;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      scale: 1.2;
      transform: 0.5;
      color: $secondColor;
    }
  }
}

.pagination {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 55px;

  .pagination-button {
    height: 100%;
    width: 70%;
    font-size: 45px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    i {
      font-size: 60px;
    }
  }
}
.pagination-button:hover:not([disabled]) {
  scale: 1.1;
  color: #c85250;
}
.pagination-button[disabled] {
  cursor: not-allowed;
}

.pagination-button.active-page {
  color: #c85250;
  cursor: default;
  scale: 1.2;
}

.select {
  color: #c85250;
}
</style>
